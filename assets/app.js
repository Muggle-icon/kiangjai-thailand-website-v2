(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const config = window.KIANGJAI_CONFIG || {};
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const isHome = document.body.dataset.page === 'home';
  const https = value => {
    try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''; } catch { return ''; }
  };
  const storeUrl = (value, platform) => {
    const url = https(value); if (!url) return '';
    const parsed = new URL(url);
    return platform === 'android'
      ? parsed.hostname === 'play.google.com' && parsed.pathname === '/store/apps/details' && !!parsed.searchParams.get('id') ? url : ''
      : parsed.hostname === 'apps.apple.com' && /\/id\d+(?:\/|$)/.test(parsed.pathname) ? url : '';
  };
  let toastTimer, copyTimer, lastTrigger = null, oldOverflow = '';
  const notify = message => {
    const toast = $('#toast'); if (!toast) return;
    toast.textContent = message; toast.hidden = false; clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 4500);
  };
  const openDialog = (dialog, button) => {
    if (!dialog) return;
    lastTrigger = button; oldOverflow = document.body.style.overflow;
    dialog.showModal(); document.body.style.overflow = 'hidden';
  };
  $$('[data-download]').forEach(button => button.addEventListener('click', () => {
    const dialog = $('#download-dialog');
    dialog.dataset.source = button.dataset.download || 'page';
    openDialog(dialog, button);
  }));
  $$('[data-contact]').forEach(button => button.addEventListener('click', () => {
    $('#kj-copy-feedback').textContent = ''; openDialog($('#contact-dialog'), button);
  }));
  $$('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => { document.body.style.overflow = oldOverflow; lastTrigger?.focus({preventScroll:true}); });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  });
  const phone = typeof config.companyPhone === 'string' ? config.companyPhone.trim() : '';
  $$('[data-phone]').forEach(el => { el.textContent = phone; });
  if (!phone && $('#contact-dialog')) {
    $('#contact-dialog .contact-number').hidden = true;
    $('#contact-dialog [data-copy-phone]').hidden = true;
    $('#contact-dialog > p').textContent = 'ข้อมูลติดต่อยังไม่พร้อมใช้งาน โปรดลองใหม่ภายหลัง';
  }
  const copy = async (value, success, feedback) => {
    try {
      if (!navigator.clipboard?.writeText) throw Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      if (feedback) { feedback.textContent = success; clearTimeout(copyTimer); copyTimer = setTimeout(() => { feedback.textContent = ''; }, 2000); }
      else notify(success);
    } catch {
      const message = 'คัดลอกไม่สำเร็จ โปรดเลือกและคัดลอกด้วยตนเอง: ' + value;
      if (feedback) feedback.textContent = message; else notify(message);
    }
  };
  $$('[data-copy-phone]').forEach(button => button.addEventListener('click', () => copy(phone, 'คัดลอกหมายเลขโทรศัพท์บริษัทแล้ว', button.dataset.copyPhone === 'contact' ? $('#kj-copy-feedback') : null)));
  const line = https(config.lineUrl);
  if (line && $('#contact-line')) { $('#contact-line').href = line; $('#contact-line').hidden = false; }
  const amount = Number(config.loanMaxAmount);
  if (Number.isSafeInteger(amount) && amount > 0) $$('[data-loan-amount]').forEach(el => { el.textContent = amount.toLocaleString('en-US'); });
  const android = storeUrl(config.androidDownloadUrl, 'android');
  const ios = storeUrl(config.iosDownloadUrl, 'ios');
  const available = !!(android || ios);
  if ($('#kj-download-closed')) $('#kj-download-closed').hidden = available;
  if ($('#kj-download-ready')) $('#kj-download-ready').hidden = !available;
  $$('[data-coming-note]').forEach(el => { el.hidden = available; });
  if (available) {
    $('#kj-dialog-download-safety').textContent = 'โปรดดาวน์โหลดผ่านลิงก์ทางการของ Google Play หรือ App Store ที่ประกาศบนเว็บไซต์นี้ อย่าติดตั้งแอปพลิเคชันจากลิงก์ที่ไม่รู้จัก';
    for (const [platform, url, name, label] of [['android',android,'สำหรับ Android','ไปที่ Google Play'],['ios',ios,'สำหรับ iOS','ไปที่ App Store']]) {
      const article = document.createElement('article'); const heading = document.createElement('h3');
      heading.textContent = name; article.append(heading);
      if (url) {
        const link = document.createElement('a'); link.className = 'kj-primary'; link.textContent = label; link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; article.append(link);
        const fallback = document.createElement('p'); fallback.textContent = 'QR Code ยังไม่พร้อมใช้งาน โปรดใช้ปุ่มดาวน์โหลดด้านบน';
        try {
          const qr = window.qrcode(0, 'M'); qr.addData(url, 'Byte'); qr.make();
          const img = document.createElement('img'); img.className = 'store-qr'; img.width = 192; img.height = 192; img.alt = name + ' QR Code'; img.src = qr.createDataURL(4, 16);
          img.addEventListener('error', () => img.replaceWith(fallback), {once:true}); article.append(img);
        } catch { article.append(fallback); }
      } else { const p = document.createElement('p'); p.textContent = (platform === 'android' ? 'Android' : 'iOS') + ': เร็ว ๆ นี้'; article.append(p); }
      $('#store-platforms').append(article);
    }
  }
  $$('[data-faq]').forEach(button => button.addEventListener('click', () => {
    const expand = button.getAttribute('aria-expanded') !== 'true';
    const group = button.closest('.kj-faq-list');
    group.querySelectorAll('[data-faq]').forEach(other => {
      other.setAttribute('aria-expanded','false');
      document.getElementById(other.getAttribute('aria-controls')).hidden = true;
    });
    button.setAttribute('aria-expanded',String(expand));
    document.getElementById(button.getAttribute('aria-controls')).hidden = !expand;
  }));
  // Product-information links open the existing reviewed answer, without duplicating it.
  $$('[data-faq-target]').forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = $(`[data-faq="${link.dataset.faqTarget}"]`);
    if (!target) return;
    event.preventDefault();
    if (target.getAttribute('aria-expanded') !== 'true') target.click();
    target.scrollIntoView({behavior:reduceMotion.matches ? 'instant' : 'smooth',block:'start'});
    target.focus({preventScroll:true});
  }));
  const menu = $('.menu-toggle');
  const setMenu = expand => {
    if (!menu) return;
    menu.setAttribute('aria-expanded',String(expand)); menu.setAttribute('aria-label',expand ? 'ปิดเมนู' : 'เปิดเมนู');
    $('#main-nav').classList.toggle('is-open',expand);
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  $$('#main-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', event => { if (menu && !event.target.closest('.site-header')) setMenu(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); } });
  // Only the real confirmation screen is bound to application step 03.
  $$('[data-screen-detail]').forEach(button => button.addEventListener('click', () => openDialog($('#screen-dialog'), button)));
  // Original App examples stay separate from the four-step application walkthrough.
  const gallery = $('#app-gallery-dialog');
  const galleryPanels = $$('[data-gallery-panel]');
  let galleryIndex = 0;
  const showGalleryImage = index => {
    if (!galleryPanels.length) return;
    galleryIndex = (index + galleryPanels.length) % galleryPanels.length;
    galleryPanels.forEach((panel, i) => { panel.hidden = i !== galleryIndex; });
    $('[data-gallery-position]').textContent = `${galleryIndex + 1} / ${galleryPanels.length}`;
  };
  $$('[data-app-gallery]').forEach(button => button.addEventListener('click', () => {
    showGalleryImage(Number(button.dataset.galleryStart) || 0); openDialog(gallery, button);
  }));
  $('[data-gallery-previous]')?.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
  $('[data-gallery-next]')?.addEventListener('click', () => showGalleryImage(galleryIndex + 1));
  gallery?.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault(); showGalleryImage(galleryIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });
  // Store homepage position only when entering the safety page, never on brand-to-top links.
  const scrollKey = 'kiangjai-v2-home-position';
  if (isHome) {
    $$('a[href*="security"]').forEach(link => link.addEventListener('click', () => { try { sessionStorage.setItem(scrollKey,String(window.scrollY)); } catch {} }));
    if (new URLSearchParams(location.search).has('return')) {
      try { const y = Number(sessionStorage.getItem(scrollKey)); sessionStorage.removeItem(scrollKey); document.fonts.ready.then(() => { window.scrollTo({top:y||0,behavior:'instant'}); history.replaceState(null,'',location.pathname); }); } catch {}
    }
  }
  $$('[data-home-return]').forEach(link => { try { if (sessionStorage.getItem(scrollKey) !== null) link.href += '?return=1'; } catch {} });
  const links = $$('#main-nav a[href*="#"]').map(link => ({link,section:document.getElementById(new URL(link.href).hash.slice(1))})).filter(item => item.section);
  if (links.length) {
    let frame; const update = () => {
      const line = ($('.site-header')?.getBoundingClientRect().bottom||0)+150;
      const homeNav = $('#main-nav [data-home-nav]');
      let active=isHome ? homeNav : null; links.forEach(item => { if (item.section.getBoundingClientRect().top <= line) active=item.link; });
      links.forEach(({link}) => { if (link === active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
      if (homeNav) { if (active === homeNav) homeNav.setAttribute('aria-current','page'); else homeNav.removeAttribute('aria-current'); }
    };
    window.addEventListener('scroll', () => { cancelAnimationFrame(frame);frame=requestAnimationFrame(update); },{passive:true}); update();
  }
  if (document.body.dataset.page === 'security') $('#main-nav a[href*="security"]')?.setAttribute('aria-current','page');
  const site = https(config.officialWebsiteUrl); const publisher = typeof config.appPublisherName === 'string' ? config.appPublisherName.trim() : '';
  if ($('#kj-official-site-row')) {
    $('#kj-official-site-row').hidden = !site; $('#kj-official-site-value').textContent = site;
    $('#kj-publisher-row').hidden = !publisher; $('#kj-publisher-value').textContent = publisher;
    $('#kj-identity-pending').hidden = !!(site && publisher);
  }
  const channel = config.antiFraudChannel;
  const channelValue = channel && typeof channel.value === 'string' ? channel.value.trim() : '';
  const validChannel = channel && (channel.type === 'url' ? https(channelValue) : channel.type === 'phone' ? /^[+\d\s()-]{7,30}$/.test(channelValue) : channel.type === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(channelValue));
  if ($('#kj-report-actions')) {
    $('#kj-report-actions').hidden = !validChannel; $('#kj-report-pending').hidden = !!validChannel;
    $$('[data-report]').forEach(button => button.addEventListener('click', () => {
      if (!validChannel) return;
      $('#kj-report-topic').textContent = button.dataset.report === 'impersonation' ? 'แจ้งแอป / เว็บไซต์ปลอม' : 'แจ้งเบาะแสมิจฉาชีพ';
      $('#kj-report-value').textContent = channelValue;
      $('#kj-report-copy').hidden = channel.type === 'url'; $('#kj-report-url').hidden = channel.type !== 'url';
      if (channel.type === 'url') $('#kj-report-url').href = https(channelValue);
      $('#kj-report-channel').hidden = false; $('#kj-report-channel').scrollIntoView({block:'start',behavior:reduceMotion.matches ? 'instant' : 'smooth'});
    }));
  }
  $$('[data-copy-security]').forEach(button => button.addEventListener('click', () => copy(button.dataset.copySecurity === 'website' ? site : channelValue, button.dataset.copySecurity === 'website' ? 'คัดลอกที่อยู่เว็บไซต์แล้ว' : 'คัดลอกช่องทางรับแจ้งแล้ว')));
  const licenseUrl = https(config.lendingLicenseVerifyUrl);
  if (typeof config.lendingLicenseNumber === 'string' && config.lendingLicenseNumber.trim() && licenseUrl) {
    $$('[data-license]').forEach(el => { el.textContent='เลขที่ใบอนุญาต: '+config.lendingLicenseNumber.trim(); el.hidden=false; });
    $$('[data-license-link]').forEach(el => { el.href=licenseUrl; el.hidden=false; });
  }
})();

// One compact product section; all reviewed descriptions and original screens stay in the DOM.
(() => {
  'use strict';
  document.querySelectorAll('.product-showcase').forEach(showcase => {
    const tabs = [...showcase.querySelectorAll('[data-product-tab]')];
    if (!tabs.length) return;
    const storageKey = 'kiangjai-v2-product-tab';
    const activate = (target, moveFocus = false) => {
      tabs.forEach(tab => {
        const selected = tab === target;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        tab.getAttribute('aria-controls').split(/\s+/).forEach(id => {
          const controlled = document.getElementById(id);
          if (controlled) controlled.hidden = !selected;
        });
      });
      try { sessionStorage.setItem(storageKey, target.dataset.productTab); } catch {}
      if (moveFocus) target.focus();
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[next], true);
      });
    });
    let savedKey = '';
    if (new URLSearchParams(location.search).get('return') === '1') {
      try { savedKey = sessionStorage.getItem(storageKey) || ''; } catch {}
    }
    activate(tabs.find(tab => tab.dataset.productTab === savedKey) || tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
  });
})();
