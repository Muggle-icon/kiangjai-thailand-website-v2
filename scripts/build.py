"""Build shared static HTML components and GitHub Pages-compatible clean route aliases."""
from pathlib import Path
import hashlib
import re
import json
from html import escape

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT/'src/config.json').read_text())
if not isinstance(CONFIG.get('loanMaxAmount'),int) or isinstance(CONFIG['loanMaxAmount'],bool) or CONFIG['loanMaxAmount'] <= 0:
    raise ValueError('loanMaxAmount must be a confirmed positive integer')
COPY = json.loads((ROOT/'src/content/reviewed-th.json').read_text())['copy']
(ROOT/'assets/config.js').write_text('window.KIANGJAI_CONFIG = '+json.dumps(CONFIG,ensure_ascii=False).replace('<','\\u003c')+';\n')
VERSION = hashlib.sha256(b''.join((ROOT/name).read_bytes() for name in ('assets/base.css','assets/redesign.css','assets/homepage.css','assets/secondary.css','assets/app.js','assets/config.js'))).hexdigest()[:12]

def render(text):
    text=re.sub(r'\{\{copy:([\w-]+)\}\}', lambda m:escape(COPY[m[1]]),text)
    def component(match): return render((ROOT/'src/components'/(match[1]+'.html')).read_text())
    def icon(match):
        svg=(ROOT/'assets/icons'/(match[1]+'.svg')).read_text()
        return svg.replace('<svg ','<svg class="icon" aria-hidden="true" focusable="false" ',1)
    return re.sub(r'\{\{icon:([\w-]+)\}\}',icon,re.sub(r'\{\{component:([\w-]+)\}\}',component,text))

for source,filename,title in [('home','index','หน้าแรก'),('security','security','ศูนย์ความปลอดภัย'),('privacy','privacy','นโยบายความเป็นส่วนตัว'),('terms','terms','ข้อกำหนดการใช้บริการ')]:
    main=render((ROOT/'src/pages'/(source+'.html')).read_text())
    header=render('{{component:'+('policy-header' if source in ('privacy','terms') else 'header')+'}}')
    footer=render('{{component:footer}}')
    dialogs=render('{{component:dialogs}}')
    description='เคียงใจ สินเชื่อผ่านแอปพลิเคชัน สมัครออนไลน์ทุกขั้นตอน ดูข้อมูลผลิตภัณฑ์และช่องทางทางการ'
    robots='index,follow' if CONFIG.get('releaseStatus') == 'production' else 'noindex,nofollow'
    html=f'''<!doctype html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="{robots}"><meta name="description" content="{description}">
<meta name="theme-color" content="#44E0F8"><meta property="og:type" content="website"><meta property="og:title" content="{title} — เคียงใจ"><meta property="og:description" content="{description}">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'">
<title>{title} — เคียงใจ</title><link rel="icon" href="assets/brand/app-icon.png" type="image/png">
<link rel="preload" href="assets/fonts/NotoSansThai-Variable.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="assets/base.css?v={VERSION}"><link rel="stylesheet" href="assets/redesign.css?v={VERSION}"><link rel="stylesheet" href="assets/homepage.css?v={VERSION}"><link rel="stylesheet" href="assets/secondary.css?v={VERSION}"><script src="assets/vendor/qrcode.js?v={VERSION}" defer></script><script src="assets/config.js?v={VERSION}" defer></script><script src="assets/app.js?v={VERSION}" defer></script></head>
<body data-page="{source}"><a class="skip-link" href="#main">ข้ามไปยังเนื้อหา</a><div id="kiangjai-v2">
{header}
{main}
{footer}
{dialogs}
</div></body></html>'''
    (ROOT/(filename+'.html')).write_text(html)
    if source != 'home':
        directory=ROOT/source; directory.mkdir(exist_ok=True)
        nested=re.sub(r'(href|src|srcset)="(assets/|index\.html|security\.html|privacy\.html|terms\.html)',lambda m:m[1]+'="../'+m[2],html)
        (directory/'index.html').write_text(nested)
print('Built 4 pages and 3 clean route aliases; preview robots policy:',CONFIG.get('releaseStatus'))
