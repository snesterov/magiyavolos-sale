# -*- coding: utf-8 -*-
import urllib.request, re, os, json, io

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(BASE_DIR, "images")
SCRIPT_JS_PATH = os.path.join(BASE_DIR, "script.js")
CATALOG_JSON_PATH = os.path.join(BASE_DIR, "catalog.json")

os.makedirs(IMAGES_DIR, exist_ok=True)

def fetch_channel_html():
    url = "https://t.me/s/magiavolos_chanel"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8")

def parse_post_data(p_html):
    m_id = re.match(r"^(\d+)", p_html)
    if not m_id:
        return None
    pid = int(m_id.group(1))

    # Text
    m_text = re.search(r'class="tgme_widget_message_text[^>]*>([\s\S]*?)</div>', p_html)
    text = ""
    if m_text:
        text = re.sub(r'<br\s*/?>', '\n', m_text.group(1))
        text = re.sub(r'<[^>]+>', '', text).strip()

    # Skip posts that are clearly not hair products (e.g. training/master classes announcements)
    text_lower = text.lower()
    if "обучение" in text_lower or "курс" in text_lower:
        return None

    # Must contain indicators of hair cut or availability
    keywords = ["срез", "хвостик", "волна", "кудри", "шелк", "волос", "в наличии", "наличии"]
    if not any(k in text_lower for k in keywords):
        return None

    # Check for video or photo thumb
    m_thumb = re.search(r"background-image:url\('([^']+)'\)", p_html)
    thumb_url = m_thumb.group(1) if m_thumb else None
    if not thumb_url:
        return None

    is_video = "tgme_widget_message_video" in p_html

    # Extract clean title and specs
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    raw_title = lines[0] if lines else "Отборный срез волос"
    # Clean emojis from title
    clean_title = re.sub(r'[^\w\s\.,•\-–—]', '', raw_title).strip()
    if len(clean_title) < 4:
        clean_title = "Отборный донорский срез"

    # Category and tags
    cat = "славянский_люкс"
    tags = ["#видеообзор" if is_video else "#в_наличии"]
    
    struct = "Шелковистая волна"
    if "детск" in text_lower:
        cat = "детские_срезы"
        tags.append("#детские_срезы")
    if "кудри" in text_lower or "активная волна" in text_lower:
        cat = "активная_волна"
        struct = "Активная волна и кудри"
        tags.extend(["#активная_волна", "#кудри"])
    elif "прямой" in text_lower:
        struct = "Плотный прямой"
        tags.append("#прямой_срез")
    elif "волна" in text_lower:
        struct = "Мягкая крупная волна"
        tags.append("#волна")

    shade = "Натуральный русый"
    if "шоколад" in text_lower:
        shade = "Глубокий шоколад"
        tags.append("#шоколад")
    elif "карамел" in text_lower:
        shade = "Карамельный подтон"
        tags.append("#карамель")
    elif "светло" in text_lower or "блонд" in text_lower:
        shade = "Светло-русый / Блонд"
    elif "русый" in text_lower:
        shade = "Натуральный русый"

    if "не окрашен" in text_lower:
        tags.append("#не_окрашен")
    tags.append("#одноголовый_срез")

    # Length & weight fallback heuristics
    length_m = re.search(r'(\d{2}[-–]\d{2})\s*см', text)
    length_val = (length_m.group(1) + " см") if length_m else "55-60 см"

    weight_m = re.search(r'(\d{2,3})\s*(?:г|гр|грамм)', text)
    weight_val = (weight_m.group(1) + " грамм") if weight_m else "115 грамм"

    # Price heuristic
    price_val = "от 21 000 ₽"
    if cat == "детские_срезы":
        price_val = "от 19 500 ₽"
    elif "65" in length_val or "70" in length_val:
        price_val = "от 25 000 ₽"

    return {
        "pid": pid,
        "raw_title": clean_title,
        "category": cat,
        "tags": list(dict.fromkeys(tags)), # unique
        "is_video": is_video,
        "tg_url": f"https://t.me/magiavolos_chanel/{pid}",
        "len": length_val,
        "struct": struct,
        "shade": shade,
        "weight": weight_val,
        "price": price_val,
        "thumb_url": thumb_url
    }

def download_image(thumb_url, local_path):
    if os.path.exists(local_path) and os.path.getsize(local_path) > 1000:
        return True
    try:
        req = urllib.request.Request(thumb_url, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://t.me/"})
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = resp.read()
            if len(data) > 1000:
                with open(local_path, "wb") as f:
                    f.write(data)
                return True
    except Exception as e:
        print(f"Error downloading {thumb_url}: {e}")
    return False

def main():
    print("Fetching posts from Telegram channel @magiavolos_chanel...")
    html = fetch_channel_html()
    post_chunks = re.split(r'data-post="magiavolos_chanel/', html)
    print(f"Raw post chunks found: {len(post_chunks)-1}")

    parsed_items = []
    for chunk in post_chunks[1:]:
        item = parse_post_data(chunk)
        if item:
            parsed_items.append(item)

    print(f"Valid cut products extracted: {len(parsed_items)}")
    # Take latest 8 items
    selected = parsed_items[:8]

    catalog_data = []
    for idx, item in enumerate(selected, 1):
        pid = item["pid"]
        img_filename = f"cut_{pid}.jpg"
        img_local_path = os.path.join(IMAGES_DIR, img_filename)

        download_image(item["thumb_url"], img_local_path)

        cdn_img_url = f"https://cdn.jsdelivr.net/gh/snesterov/magiyavolos-sale@main/images/{img_filename}"
        
        # Build nice full title
        title_suffix = f"• {item['struct']}" if item['struct'] not in item['raw_title'] else ""
        full_title = f"{item['raw_title']} {title_suffix}".strip()
        full_title = re.sub(r'\s+', ' ', full_title)

        catalog_data.append({
            "id": idx,
            "title": full_title,
            "category": item["category"],
            "tags": item["tags"],
            "is_video": item["is_video"],
            "tg_url": item["tg_url"],
            "len": item["len"],
            "struct": item["struct"],
            "shade": item["shade"],
            "weight": item["weight"],
            "price": item["price"],
            "img": cdn_img_url
        })

    # Save catalog.json
    with io.open(CATALOG_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog_data, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(catalog_data)} items to catalog.json")

    # Update script.js CATALOG_ITEMS
    if os.path.exists(SCRIPT_JS_PATH):
        with io.open(SCRIPT_JS_PATH, "r", encoding="utf-8") as f:
            script_code = f.read()

        js_array_str = json.dumps(catalog_data, ensure_ascii=False, indent=4)
        new_catalog_def = f"var CATALOG_ITEMS = {js_array_str};"
        
        updated_code = re.sub(
            r"var CATALOG_ITEMS = \[[\s\S]*?\];",
            new_catalog_def,
            script_code,
            count=1
        )

        with io.open(SCRIPT_JS_PATH, "w", encoding="utf-8") as f:
            f.write(updated_code)
        print("Updated script.js CATALOG_ITEMS successfully!")

if __name__ == "__main__":
    main()
