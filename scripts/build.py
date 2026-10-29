"""Build shared static HTML components and GitHub Pages-compatible clean route aliases."""
from pathlib import Path
import hashlib
import re
import json
from html import escape, unescape
from urllib.parse import parse_qsl, unquote, urlencode, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT/'src/config.json').read_text())
if not isinstance(CONFIG.get('loanMaxAmount'),int) or isinstance(CONFIG['loanMaxAmount'],bool) or CONFIG['loanMaxAmount'] <= 0:
    raise ValueError('loanMaxAmount must be a confirmed positive integer')
COPY = json.loads((ROOT/'src/content/reviewed-th.json').read_text())['copy']
(ROOT/'assets/config.js').write_text('window.KIANGJAI_CONFIG = '+json.dumps(CONFIG,ensure_ascii=False).replace('<','\\u003c')+';\n')
VERSION = hashlib.sha256(b''.join((ROOT/name).read_bytes() for name in ('assets/base.css','assets/redesign.css','assets/homepage.css','assets/secondary.css','assets/app.js','assets/config.js'))).hexdigest()[:12]

# One renderer keeps every original App screen's geometry and markup identical.
APP_SCREENS = {
    'home': ('assets/app/home-overview.png', 'หน้าหลักแอปเคียงใจ แสดงวงเงินและความคืบหน้าการกรอกข้อมูล'),
    'repayment': ('assets/app/repayment.png', 'หน้าจอสแกนจ่ายเพื่อชำระคืน'),
    'loan-plan': ('assets/app/loan-plan.png', 'หน้าจอเลือกจำนวนเงินและจำนวนงวด'),
    'withdrawal': ('assets/app/withdrawal-current.png', 'หน้าจอแอปเคียงใจแสดงวงเงินที่พร้อมใช้งาน'),
}

def version_image_url(value):
    """Version local raster files by their bytes without touching other assets."""
    url = urlsplit(unescape(value))
    if url.scheme or url.netloc:
        return value
    image = (ROOT/unquote(url.path).lstrip('/')).resolve()
    if (image.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'}
            or not image.is_relative_to(ROOT) or not image.is_file()):
        return value
    version = hashlib.sha256(image.read_bytes()).hexdigest()[:12]
    query = [(key, val) for key, val in parse_qsl(url.query, keep_blank_values=True) if key != 'v']
    query.append(('v', version))
    return escape(urlunsplit((url.scheme, url.netloc, url.path, urlencode(query), url.fragment)), quote=True)

def version_image_references(html):
    # Run before route aliases are made, so root and nested pages share image versions.
    # The same URL handling also keeps responsive sources and hero preloads identical.
    def attribute(match):
        name, quote, value = match.groups()
        if name.lower() == 'srcset':
            if 'data:' in value.lower():
                return match[0]
            value = re.sub(r'(^|,\s*)([^\s,]+)',
                           lambda candidate: candidate[1]+version_image_url(candidate[2]), value)
        else:
            value = version_image_url(value)
        return name+'='+quote+value+quote
    return re.sub(r'(?<![\w:-])(src|href|srcset)=([\"\'])(.*?)\2', attribute, html, flags=re.IGNORECASE)

def render(text):
    text=re.sub(r'\{\{copy:([\w-]+)\}\}', lambda m:escape(COPY[m[1]]),text)
    def component(match): return render((ROOT/'src/components'/(match[1]+'.html')).read_text())
    def icon(match):
        svg=(ROOT/'assets/icons'/(match[1]+'.svg')).read_text()
        return svg.replace('<svg ','<svg class="icon" aria-hidden="true" focusable="false" ',1)
    def app_screen(match):
        source, alt = APP_SCREENS[match[1]]
        return (f'<div class="app-device"><img class="app-screen" src="{escape(source)}" '
                f'alt="{escape(alt)}" width="750" height="1624" loading="lazy" decoding="async"></div>')
    text=re.sub(r'\{\{component:([\w-]+)\}\}',component,text)
    text=re.sub(r'\{\{app-screen:([\w-]+)\}\}',app_screen,text)
    return re.sub(r'\{\{icon:([\w-]+)\}\}',icon,text)

for source,filename,title in [('home','index','หน้าแรก'),('security','security','ศูนย์ความปลอดภัย'),('privacy','privacy','นโยบายความเป็นส่วนตัว'),('terms','terms','ข้อกำหนดการใช้บริการ')]:
    main=render((ROOT/'src/pages'/(source+'.html')).read_text())
    header=render('{{component:'+('policy-header' if source in ('privacy','terms') else 'header')+'}}')
    footer=render('{{component:footer}}')
    dialogs=render('{{component:dialogs}}')
    description='เคียงใจ สินเชื่อผ่านแอปพลิเคชัน สมัครออนไลน์ทุกขั้นตอน ดูข้อมูลผลิตภัณฑ์และช่องทางทางการ'
    robots='index,follow' if CONFIG.get('releaseStatus') == 'production' else 'noindex,nofollow'
    hero_preload = ('''<link rel="preload" as="image" href="assets/campaign/bangkok-food-stand-1200.webp" media="(max-width:760px)" fetchpriority="high">
<link rel="preload" as="image" href="assets/campaign/bangkok-food-stand-2200.webp" media="(min-width:761px)" fetchpriority="high">''' if source == 'home' else '')
    html=f'''<!doctype html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="{robots}"><meta name="description" content="{description}">
<meta name="theme-color" content="#44E0F8"><meta property="og:type" content="website"><meta property="og:title" content="{title} — เคียงใจ"><meta property="og:description" content="{description}">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'">
<title>{title} — เคียงใจ</title><link rel="icon" href="assets/brand/app-icon.png" type="image/png">
<link rel="preload" href="assets/fonts/NotoSansThai-Variable.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="assets/fonts/Kanit-500-thai.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/Kanit-600-thai.woff2" as="font" type="font/woff2" crossorigin>
{hero_preload}
<link rel="stylesheet" href="assets/base.css?v={VERSION}"><link rel="stylesheet" href="assets/redesign.css?v={VERSION}"><link rel="stylesheet" href="assets/homepage.css?v={VERSION}"><link rel="stylesheet" href="assets/secondary.css?v={VERSION}"><script src="assets/vendor/qrcode.js?v={VERSION}" defer></script><script src="assets/config.js?v={VERSION}" defer></script><script src="assets/app.js?v={VERSION}" defer></script></head>
<body data-page="{source}"><a class="skip-link" href="#main">ข้ามไปยังเนื้อหา</a><div id="kiangjai-v2">
{header}
{main}
{footer}
{dialogs}
</div></body></html>'''
    html = version_image_references(html)
    (ROOT/(filename+'.html')).write_text(html)
    if source != 'home':
        directory=ROOT/source; directory.mkdir(exist_ok=True)
        nested=re.sub(r'(href|src|srcset)="(assets/|index\.html|security\.html|privacy\.html|terms\.html)',lambda m:m[1]+'="../'+m[2],html)
        (directory/'index.html').write_text(nested)
print('Built 4 pages and 3 clean route aliases; preview robots policy:',CONFIG.get('releaseStatus'))
