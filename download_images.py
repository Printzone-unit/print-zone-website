import os
import urllib.request

images = [
    "graphic-design-desk.jpg",
    "print-vinyl-orange.jpg",
    "print-vinyl-blue.jpg",
    "print-yellow-detail.jpg",
    "print-cmyk-stripes.jpg",
    "eqn-2.jpg",
    "epson-surecolor-s60600.jpg",
    "g-oppo-reno16-interior.jpg",
    "g-oppo-reno16-wall.jpg",
    "g-oppo-reno16-pillar.jpg",
    "g-oppo-reno16-counter.jpg",
    "g-oppo-reno16-brandboards.jpg",
    "lehar-3.jpg",
    "proj-oppo-night.jpeg",
    "inst-oppo-storefront-akkalkuwa.jpg",
    "inst-oppo-glowsign-nandurbar.jpg",
    "oppo-fabricbox-newgv-jalgaon.jpg",
    "g-dollar-palus-standee.jpg",
    "oppo-cafereno-activity.jpg",
    "lehar-6.jpg",
    "oppo-dhule-reno16.jpg",
    "oppo-ssmobile-reno16.jpeg",
    "brand_logo.png",
    "brand_pattern.jpg",
    "brand_pattern2.png",
    "brand_pattern_strip.png",
    "brand_tagline.png",
    "brand_services_text.png"
]

base_url = "https://manojgraphics.in/img/"
dest_dir = "img"

os.makedirs(dest_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

for img in images:
    url = base_url + img.replace(" ", "%20")
    dest_path = os.path.join(dest_dir, img)
    
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
        print(f"Skipping already downloaded: {img}")
        continue
        
    print(f"Downloading {url} -> {dest_path}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(dest_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {img}")
    except Exception as e:
        print(f"Error downloading {img}: {e}")

print("Done downloading reference images.")
