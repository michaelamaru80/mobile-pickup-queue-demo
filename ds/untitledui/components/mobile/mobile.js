/* Untitled UI — Mobile patterns (custom). Hand-maintained; NOT part of Untitled UI React and NOT built from the starter kit.
   Keep this file on re-sync. Classic script: reads window.React (and window.UntitledUI.Icons when present), assigns window.UntitledMobile.
   Styles use only Untitled UI tokens (CSS custom properties from tokens.css), with hex fallbacks for pages that don't load tokens.css. */
(function () {
  var React = window.React;
  if (!React) return;
  var h = React.createElement;

  function icons() { return (window.UntitledUI && window.UntitledUI.Icons) || {}; }
  function icon(C, size, extra) {
    if (!C) return null;
    return h(C, Object.assign({ width: size, height: size, 'aria-hidden': true, style: { width: size, height: size, flexShrink: 0 } }, extra || {}));
  }
  var T = {
    bg: 'var(--color-bg-primary, #ffffff)',
    bgHover: 'var(--color-bg-primary_hover, #fafafa)',
    overlay: 'rgba(10,13,18,.55)',
    text: 'var(--color-text-primary, #181d27)',
    text2: 'var(--color-text-secondary, #414651)',
    text3: 'var(--color-text-tertiary, #535862)',
    fg4: 'var(--color-fg-quaternary, #a4a7ae)',
    border2: 'var(--color-border-secondary, #e9eaeb)',
    border1: 'var(--color-border-primary, #d5d7da)',
    brand: 'var(--color-bg-brand-solid, #7f56d9)',
    success: 'var(--color-fg-success-secondary, #17b26a)',
    warning: 'var(--color-fg-warning-secondary, #f79009)',
    error: 'var(--color-fg-error-secondary, #f04438)',
    shadowLg: 'var(--shadow-lg, 0 12px 16px -4px rgba(10,13,18,.08), 0 4px 6px -2px rgba(10,13,18,.03))',
    shadowXl: 'var(--shadow-xl, 0 20px 24px -4px rgba(10,13,18,.08), 0 8px 8px -4px rgba(10,13,18,.03))',
    radius2xl: 'var(--radius-2xl, 16px)',
    radiusSm: 'var(--radius-sm, 4px)',
    font: "var(--font-body, Inter, -apple-system, 'Segoe UI', sans-serif)",
    bg2: 'var(--color-bg-secondary, #fafafa)',
    bgSolid: 'var(--color-bg-primary-solid, #0a0d12)',
    bgBrandSoft: 'var(--color-bg-brand-primary, #f9f5ff)',
    brandText: 'var(--color-text-brand-secondary, #6941c6)',
    brandBorder: 'var(--color-border-brand, #d6bbfb)',
    brand600: 'var(--color-brand-600, #7f56d9)',
    fg2: 'var(--color-fg-secondary, #414651)',
    successFg: 'var(--color-fg-success-primary, #079455)',
    successSolid: 'var(--color-bg-success-solid, #079455)',
    text4: 'var(--color-text-quaternary, #717680)'
  };
  function UB() { return (window.UntitledUI && window.UntitledUI.Button) || null; }
  /* Full-width primary/secondary button; falls back to a plain button when the Untitled UI bundle isn't loaded. */
  function wideButton(label, color, onPress, disabled, extraClass) {
    var B = UB();
    if (B) return h('div', { className: 'um-fullw ' + (extraClass || ''), style: { display: 'flex', flexDirection: 'column', width: '100%' } }, h(B, { className: 'w-full', color: color || 'primary', size: 'lg', isDisabled: !!disabled, onPress: onPress, style: { width: '100%' } }, label));
    return h('button', { type: 'button', disabled: !!disabled, onClick: onPress, style: { width: '100%', height: 44, borderRadius: 8, border: color === 'secondary' ? '1px solid ' + T.border1 : 0, background: color === 'secondary' ? T.bg : T.brand, color: color === 'secondary' ? T.text2 : '#fff', fontFamily: T.font, fontSize: 16, fontWeight: 600, opacity: disabled ? 0.5 : 1 } }, label);
  }
  function textButton(label, onPress, disabled, color) {
    var B = UB();
    if (B) return h(B, { color: 'tertiary', size: 'lg', isDisabled: !!disabled, onPress: onPress, style: color ? { color: color } : undefined }, label);
    return h('button', { type: 'button', disabled: !!disabled, onClick: onPress, style: { minHeight: 44, padding: '0 14px', border: 0, background: 'none', color: color || T.text3, fontFamily: T.font, fontSize: 16, fontWeight: 600 } }, label);
  }
  function iconButton(C, label, onPress, color) {
    return h('button', { type: 'button', 'aria-label': label, onClick: onPress, style: { width: 44, height: 44, border: 0, borderRadius: 8, background: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color || T.fg4, cursor: 'pointer' } }, icon(C, 20));
  }

  /* BottomSheet — a half sheet anchored to the bottom of its positioned container (the phone frame). */
  function BottomSheet(p) {
    if (p.open === false) return null;
    var I = icons();
    var head = p.title ? h('div', { style: { display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 44px', alignItems: 'center', padding: '8px 12px 12px', borderBottom: p.divider === false ? 0 : '1px solid ' + T.border2 } },
      h('div'),
      h('div', { style: { textAlign: 'center', fontSize: 18, lineHeight: '28px', fontWeight: 600, color: T.text } }, p.title),
      p.onClose ? h('button', { type: 'button', 'aria-label': 'Close', onClick: p.onClose, style: { width: 44, height: 44, border: 0, borderRadius: 8, background: 'transparent', color: T.fg4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 } }, icon(I.XClose, 24)) : h('div')
    ) : null;
    return h('div', { style: { position: 'absolute', inset: 0, fontFamily: T.font, zIndex: p.zIndex || 40 } },
      h('button', { type: 'button', 'aria-label': 'Close', onClick: p.onClose, tabIndex: -1, style: { position: 'absolute', inset: 0, border: 0, padding: 0, background: T.overlay, cursor: 'default' } }),
      h('div', { role: 'dialog', 'aria-modal': true, 'aria-label': p.title || p.ariaLabel, style: { position: 'absolute', left: 0, right: 0, bottom: 0, top: p.full ? (p.top || 60) : 'auto', maxHeight: '92%', background: T.bg, borderRadius: '16px 16px 0 0', display: 'flex', flexDirection: 'column', boxShadow: '0 -8px 24px rgba(10,13,18,.18)' } },
        p.showHandle === false ? null : h('div', { style: { display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: p.title ? 0 : 8 } }, h('div', { style: { width: 36, height: 4, borderRadius: 9999, background: T.border1 } })),
        head,
        h('div', { style: { flex: 1, minHeight: 0, overflowY: 'auto', padding: p.padding != null ? p.padding : '16px 20px 20px' } }, p.children),
        p.footer ? h('div', { style: { padding: '16px 20px 28px', borderTop: '1px solid ' + T.border2 } }, p.footer) : h('div', { style: { height: 12 } })
      )
    );
  }

  /* Toast — the pill toast used over a camera view or screen content. */
  function Toast(p) {
    var I = icons();
    if (p.tone === 'dark') return DarkToast(p);
    var v = p.variant || 'success';
    var tone = { success: [T.success, I.CheckCircle], info: [T.fg4, I.InfoCircle], neutral: [T.fg4, I.InfoCircle], warning: [T.warning, I.InfoCircle], error: [T.error, I.AlertCircle] }[v] || [T.fg4, I.InfoCircle];
    var a = p.action;
    return h('div', { role: v === 'error' || v === 'warning' ? 'alert' : 'status', 'aria-live': 'polite', style: { display: 'inline-flex', alignItems: 'center', gap: 10, padding: a ? '6px 6px 6px 16px' : '12px 20px 12px 16px', borderRadius: 9999, background: T.bg, boxShadow: T.shadowLg, whiteSpace: 'nowrap', maxWidth: '100%', boxSizing: 'border-box', fontFamily: T.font } },
      h('span', { style: { color: tone[0], display: 'flex' } }, icon(p.icon || tone[1], 20)),
      h('span', { style: { fontSize: 14, lineHeight: '20px', fontWeight: 600, color: T.text, overflow: 'hidden', textOverflow: 'ellipsis' } }, p.text),
      a ? h('button', { type: 'button', 'aria-label': a.label, title: a.label, onClick: a.onPress, style: { marginLeft: 4, width: 40, height: 40, padding: 0, border: 0, borderRadius: 9999, background: T.brand, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'inset 0 0 0 1px rgba(10,13,18,.18), inset 0 -2px 0 rgba(10,13,18,.05)' } }, icon(a.icon || I.ArrowRight, 20)) : null
    );
  }

  /* DarkToast — Toast with tone="dark": the screen-level toast (dark surface, white text, optional text action). */
  function DarkToast(p) {
    var I = icons();
    var v = p.variant || 'success';
    var tone = { success: ['#47cd89', I.CheckCircle], neutral: ['rgba(255,255,255,.7)', I.InfoCircle], info: ['rgba(255,255,255,.7)', I.InfoCircle], warning: ['#fdb022', I.AlertTriangle || I.InfoCircle], error: ['#f97066', I.AlertCircle] }[v] || ['rgba(255,255,255,.7)', I.InfoCircle];
    var a = p.action;
    return h('div', { role: v === 'error' || v === 'warning' ? 'alert' : 'status', 'aria-live': 'polite', style: { display: 'flex', alignItems: 'center', gap: 12, width: '100%', boxSizing: 'border-box', minHeight: 48, padding: a ? '4px 4px 4px 16px' : '12px 16px', borderRadius: 12, background: T.bgSolid, boxShadow: T.shadowLg, color: '#fff', fontFamily: T.font } },
      h('span', { style: { color: tone[0], display: 'flex' } }, icon(p.icon || tone[1], 20)),
      h('span', { style: { flex: 1, minWidth: 0, fontSize: 14, lineHeight: '20px', fontWeight: 600 } }, p.text),
      a ? h('button', { type: 'button', onClick: a.onPress, style: { minHeight: 40, padding: '0 12px', border: 0, borderRadius: 8, background: 'transparent', color: '#fff', fontFamily: T.font, fontSize: 14, fontWeight: 600, cursor: 'pointer' } }, a.label) : null);
  }

  /* GroupBand — a full-width gray band that starts a group of rows (e.g. items per owner in a proxy pickup). */
  function GroupBand(p) {
    var bleed = p.bleed != null ? p.bleed : 16;
    return h('div', { role: 'heading', 'aria-level': p.level || 3, style: { margin: '0 -' + bleed + 'px', padding: '8px ' + bleed + 'px 8px ' + (bleed + (p.indent || 0)) + 'px', background: T.bg2, borderTop: '1px solid ' + T.border2, borderBottom: p.bottomRule === false ? 0 : '1px solid ' + T.border2, fontFamily: T.font, fontSize: 13, lineHeight: '18px', fontWeight: 600, color: T.text2 } }, p.label, p.count != null ? ' \u00b7 ' + p.count : null);
  }

  /* StepHeader — numbered step marker + title + meta for multi-step tasks. state: current | done | upcoming. */
  function StepHeader(p) {
    var I = icons();
    var st = p.state || 'current';
    var mk = st === 'done' ? { bg: T.brand, fg: '#fff', ring: 'none' } : st === 'current' ? { bg: T.bg, fg: T.brandText, ring: 'inset 0 0 0 2px ' + T.brand600 + ', 0 0 0 4px ' + T.bgBrandSoft } : { bg: T.bg2, fg: T.text4, ring: 'inset 0 0 0 1px ' + T.border2 };
    return h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, fontFamily: T.font } },
      h('span', { 'aria-hidden': st === 'done' ? undefined : true, style: { width: 32, height: 32, flex: '0 0 auto', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 600, background: mk.bg, color: mk.fg, boxShadow: mk.ring } }, st === 'done' ? icon(I.Check, 20, { 'aria-label': 'Done' }) : String(p.number || 1)),
      h('h2', { style: { flex: '1 1 auto', margin: 0, fontSize: 17, lineHeight: '24px', fontWeight: 600, color: st === 'upcoming' ? T.text3 : T.text } }, p.title),
      p.meta ? h('span', { style: { fontSize: 13, lineHeight: '20px', color: T.text3, fontVariantNumeric: 'tabular-nums' } }, p.meta) : null);
  }

  /* PersonCard — photo-led card for matching a person (Up next / You're serving). Photo fills the left edge; one action; optional move (⇄) icon top-right. */
  function PersonCard(p) {
    var I = icons();
    var photo = p.photo
      ? h('button', { type: 'button', 'aria-label': 'See a larger photo of ' + p.name, onClick: p.onPhoto, style: { position: 'relative', flex: '0 0 120px', alignSelf: 'stretch', minHeight: 184, padding: 0, border: 0, background: T.bg2, cursor: 'pointer' } },
          h('img', { src: p.photo, alt: 'Photo of ' + p.name, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } }),
          h('span', { 'aria-hidden': true, style: { position: 'absolute', right: 6, bottom: 6, width: 28, height: 28, borderRadius: 9999, background: 'rgba(255,255,255,.92)', boxShadow: '0 1px 2px rgba(10,13,18,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.text2 } }, icon(I.Expand01, 16)))
      : h('div', { role: 'img', 'aria-label': 'No photo on file', style: { flex: '0 0 120px', alignSelf: 'stretch', minHeight: 184, background: 'var(--color-bg-secondary_hover, #f5f5f5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 } },
          h('span', { style: { fontSize: 32, lineHeight: 1.2, fontWeight: 600, color: T.text4 } }, p.initials || ''),
          h('span', { style: { fontSize: 12, lineHeight: '18px', fontWeight: 500, color: T.text4 } }, 'No photo'));
    return h('section', { 'aria-label': p.ariaLabel || p.eyebrow, style: { position: 'relative', display: 'flex', borderRadius: 12, overflow: 'hidden', background: T.bg, boxShadow: '0 0 0 1px ' + (p.highlight ? T.brandBorder : T.border2), fontFamily: T.font } },
      photo,
      p.onMove ? h('div', { style: { position: 'absolute', top: 4, right: 4, zIndex: 1 } }, iconButton(I.SwitchHorizontal01, p.moveLabel || ('Move ' + (p.ticket || '') + ' to a window'), p.onMove)) : null,
      h('div', { style: { flex: '1 1 auto', minWidth: 0, padding: '14px 14px 14px 16px', display: 'flex', flexDirection: 'column' } },
        p.eyebrow ? h('div', { style: { paddingRight: p.onMove ? 32 : 0, fontSize: 13, lineHeight: '20px', fontWeight: 600, color: p.eyebrowColor || T.brandText } }, p.eyebrow) : null,
        p.ticket ? h('div', { style: { fontSize: 22, lineHeight: '28px', fontWeight: 600, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums', color: T.brandText } }, p.ticket) : null,
        h('div', { style: { fontSize: 20, lineHeight: '28px', fontWeight: 600, color: T.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, p.name),
        (p.lines || []).map(function (l, i) { return h('div', { key: i, style: { fontSize: 14, lineHeight: '20px', color: T.text3 } }, l); }),
        p.action ? h('div', { style: { marginTop: 'auto', paddingTop: 12 } }, wideButton(p.action.label, 'primary', p.action.onPress)) : null));
  }

  /* OptionRow — a selectable row (radio) with icon, label and a status dot, e.g. destination windows in a Move sheet. */
  function OptionRow(p) {
    var dot = { success: T.success, warning: T.warning, error: T.error, gray: T.fg4 }[p.statusTone || 'gray'];
    return h('button', { type: 'button', role: 'radio', 'aria-checked': !!p.selected, onClick: p.onPress, style: { display: 'flex', alignItems: 'center', gap: 12, width: '100%', minHeight: 56, padding: '0 14px', borderRadius: 10, border: 0, background: p.selected ? T.bgBrandSoft : T.bg, boxShadow: p.selected ? 'inset 0 0 0 2px ' + T.brand600 : 'inset 0 0 0 1px ' + T.border2, fontFamily: T.font, textAlign: 'left', cursor: 'pointer' } },
      p.icon ? h('span', { style: { display: 'flex', color: T.fg4 } }, icon(p.icon, 20)) : null,
      h('span', { style: { flex: '1 1 auto', fontSize: 15, lineHeight: '22px', fontWeight: 600, color: T.text } }, p.label),
      p.status ? h('span', { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, lineHeight: '20px', color: T.text3 } }, h('span', { 'aria-hidden': true, style: { width: 8, height: 8, borderRadius: 9999, background: dot } }), p.status) : null);
  }

  /* ScanSheet — the collapsible list sheet over a camera for multi-item scans. Collapsed: progress + Done + fallback. Expanded: To scan / Scanned lists. */
  function ScanSheet(p) {
    var I = icons();
    var U = window.UntitledUI || {};
    var total = p.total || 0, n = p.scanned || 0, all = total > 0 && n >= total, open = !!p.open;
    var bar = U.ProgressBar ? h(U.ProgressBar, { value: n, max: total || 1, progressClassName: all ? 'bg-fg-success-secondary' : undefined, style: { width: '100%' } })
      : h('div', { style: { height: 8, borderRadius: 9999, background: T.border2 } }, h('div', { style: { width: (total ? n / total * 100 : 0) + '%', height: '100%', borderRadius: 9999, background: all ? T.success : T.brand } }));
    function rows(list, kind) {
      var out = [], last = null;
      (list || []).forEach(function (it, i) {
        if (it.group && it.group !== last) { out.push(h(GroupBand, { key: 'g' + i, label: it.group, indent: 32, bottomRule: false })); last = it.group; }
        out.push(h('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 12, padding: '2px 0', borderTop: '1px solid ' + T.border2 } },
          h('span', { style: { display: 'flex', color: kind === 'done' ? T.successFg : T.fg4 } }, icon(kind === 'done' ? I.CheckCircle : I.Package, 20)),
          h('div', { style: { flex: '1 1 auto', minWidth: 0, padding: '8px 0' } },
            h('div', { style: { fontSize: 15, lineHeight: '22px', fontWeight: 600, color: kind === 'done' ? T.text3 : T.text } }, it.label),
            it.detail ? h('div', { style: { fontSize: 13, lineHeight: '20px', color: T.text3 } }, it.detail) : null),
          kind === 'done' ? (it.onRemove ? iconButton(I.XClose, 'Remove the scan for ' + it.label, it.onRemove) : null) : (it.onType ? iconButton(I.Edit05, 'Type the number for ' + it.label, it.onType) : null)));
      });
      return out;
    }
    var todo = p.todo || [], done = p.done || [];
    return h('div', { style: { position: open ? 'absolute' : 'relative', left: 0, right: 0, top: open ? (p.top != null ? p.top : 56) : 'auto', bottom: 0, zIndex: 5, display: 'flex', flexDirection: 'column', padding: '0 16px 34px', borderRadius: '20px 20px 0 0', background: T.bg, color: T.text, boxShadow: '0 -8px 24px rgba(10,13,18,.18)', fontFamily: T.font } },
      h('button', { type: 'button', 'aria-label': open ? 'Collapse the list' : 'Show all items', 'aria-expanded': open, onClick: p.onToggle, style: { height: 28, margin: '0 -16px', border: 0, background: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' } }, h('span', { 'aria-hidden': true, style: { width: 36, height: 5, borderRadius: 9999, background: T.border1 } })),
      h('div', { style: { fontSize: 18, lineHeight: '28px', fontWeight: 600, marginBottom: 12 } }, p.title),
      h('button', { type: 'button', onClick: p.onToggle, style: { border: 0, background: 'none', padding: 0, margin: 0, font: 'inherit', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 6 } },
        bar,
        h('span', { style: { width: '100%', display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 13, lineHeight: '20px', fontWeight: 500, color: all ? T.successFg : T.text3 } },
          h('span', null, all ? 'Everything is scanned.' : open ? 'Can\u2019t scan one? Tap the pencil to type its number.' : 'Swipe up to see all items'),
          h('span', { style: { fontVariantNumeric: 'tabular-nums' } }, all ? 'All ' + total + ' scanned \u2713' : n + ' of ' + total))),
      open ? h('div', { style: { flex: '1 1 auto', minHeight: 0, overflowY: 'auto', margin: '12px -16px 0', padding: '0 16px', display: 'flex', flexDirection: 'column' } },
        todo.length ? h('div', { style: { padding: '6px 0', fontSize: 13, lineHeight: '18px', fontWeight: 600, color: T.text3 } }, 'To scan \u00b7 ' + todo.length) : null,
        rows(todo, 'todo'),
        done.length ? h('div', { style: { padding: '14px 0 6px', fontSize: 13, lineHeight: '18px', fontWeight: 600, color: T.text3 } }, 'Scanned \u00b7 ' + done.length) : null,
        rows(done, 'done')) : null,
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 } },
        h('div', { className: all ? 'um-done-pulse' : '', style: { borderRadius: 8, boxShadow: all ? '0 0 0 4px rgba(23,178,106,.2)' : 'none' } }, wideButton(p.doneLabel || 'Done', 'primary', p.onDone, n === 0)),
        p.onCantScan ? h('div', { style: { display: 'flex', justifyContent: 'center', marginBottom: -6 } }, textButton(p.cantScanLabel || 'Can\u2019t scan a label?', p.onCantScan)) : null));
  }

  /* CameraFallback — the white text button at the bottom of a dark camera: "Can't scan? Type it instead". */
  function CameraFallback(p) {
    return h('div', { style: { padding: '16px 16px 34px', display: 'flex', justifyContent: 'center' } },
      h('button', { type: 'button', onClick: p.onPress, style: { minHeight: 44, padding: '0 16px', border: 0, borderRadius: 8, background: 'transparent', color: '#ffffff', fontFamily: T.font, fontSize: 16, lineHeight: '24px', fontWeight: 600, cursor: 'pointer' } }, p.label || 'Can\u2019t scan? Type it instead'));
  }

  /* PrintAction — print to the preset printer; after printing it reads "Print again" with a caption. */
  function PrintAction(p) {
    var I = icons();
    var B = UB();
    var label = p.printedTo ? (p.againLabel || 'Print again') : (p.label || 'Print');
    return h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: T.font } },
      B ? h(B, { color: 'tertiary', size: 'lg', iconLeading: I.Printer, onPress: p.onPress }, label) : textButton(label, p.onPress),
      p.printedTo ? h('div', { role: 'status', style: { marginTop: -4, fontSize: 13, lineHeight: '20px', color: T.text3, textAlign: 'center' } }, 'Sent to ' + p.printedTo + (p.printedAt ? ' \u00b7 ' + p.printedAt : '')) : null);
  }

  /* CameraControls — the dark capture bar: thumbnail with count, shutter, Done. */
  function CameraControls(p) {
    var count = p.count || 0;
    var ready = p.shutterEnabled !== false;
    var thumb = count > 0
      ? h('button', { type: 'button', 'aria-label': 'Review ' + count + ' captured ' + (count === 1 ? 'item' : 'items'), onClick: p.onThumbnail, style: { position: 'relative', width: 56, height: 56, borderRadius: 9999, border: '1px solid #ffffff', background: '#a2805a', padding: 0, cursor: 'pointer', overflow: 'visible' } },
          p.thumbnail ? h('span', { style: { position: 'absolute', inset: 0, borderRadius: 9999, overflow: 'hidden', display: 'block' } }, p.thumbnail) : null,
          h('span', { style: { position: 'absolute', top: -6, right: -8, minWidth: 24, height: 24, padding: '0 6px', boxSizing: 'border-box', borderRadius: 9999, background: '#ffffff', color: T.text, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(10,13,18,.2)' } }, String(count)))
      : h('div', { 'aria-hidden': true, style: { width: 56, height: 56, boxSizing: 'border-box', borderRadius: 9999, border: '1px dashed rgba(255,255,255,.35)' } });
    var shutter = h('button', { type: 'button', 'aria-label': ready ? 'Capture label' : 'Capture label (codes not detected yet)', 'aria-disabled': ready ? 'false' : 'true', onClick: function (e) { if (ready && p.onCapture) p.onCapture(e); }, style: { width: 78, height: 78, borderRadius: 9999, border: '2.5px solid #ffffff', background: 'transparent', padding: 5, cursor: ready ? 'pointer' : 'not-allowed', opacity: ready ? 1 : 0.4, transition: 'opacity 150ms linear', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
      h('span', { style: { width: '100%', height: '100%', borderRadius: 9999, background: '#ffffff', display: 'block' } }));
    var done = h('button', { type: 'button', disabled: count === 0, onClick: p.onDone, style: { height: 48, padding: '0 24px', borderRadius: 9999, border: '1.5px solid ' + (count === 0 ? 'rgba(255,255,255,.35)' : '#ffffff'), background: 'transparent', color: count === 0 ? 'rgba(255,255,255,.45)' : '#ffffff', fontFamily: T.font, fontSize: 16, fontWeight: 600, cursor: count === 0 ? 'not-allowed' : 'pointer' } }, p.doneLabel || 'Done');
    return h('div', { style: { width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr)', alignItems: 'center', fontFamily: T.font } },
      h('div', { style: { display: 'flex', justifyContent: 'flex-start' } }, thumb), shutter, h('div', { style: { display: 'flex', justifyContent: 'flex-end' } }, done));
  }

  /* PhotoTile — a captured photo in a review grid: hairline, check badge, status badge, caption. */
  function PhotoTile(p) {
    var I = icons();
    var sel = p.selected !== false;
    var selectable = p.selectable !== false;
    var badge = p.badge;
    var badgeColors = { warning: ['#fffaeb', '#b54708', '#fedf89'], error: ['#fef3f2', '#b42318', '#fecdca'], success: ['#ecfdf3', '#067647', '#abefc6'], gray: ['#fafafa', '#414651', '#e9eaeb'] };
    var bc = badge ? (badgeColors[badge.color] || badgeColors.gray) : null;
    return h('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, fontFamily: T.font } },
      h('button', { type: 'button', 'aria-pressed': selectable ? sel : undefined, 'aria-label': p.ariaLabel || p.caption, onClick: p.onPress, style: { position: 'relative', width: '100%', aspectRatio: '1 / 1', borderRadius: 4, padding: 0, border: 0, overflow: 'hidden', cursor: 'pointer', background: p.background || '#a2805a' } },
        h('div', { style: { position: 'absolute', inset: 0, opacity: selectable && !sel ? 0.4 : 1 } }, p.image || null),
        h('div', { 'aria-hidden': true, style: { position: 'absolute', inset: 0, borderRadius: 4, boxShadow: 'inset 0 0 0 1px rgba(10,13,18,.1)', pointerEvents: 'none' } }),
        selectable ? h('div', { style: { position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: 9999, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', background: sel ? T.brand : 'rgba(10,13,18,.2)', border: '1.5px solid #ffffff', boxShadow: '0 1px 3px rgba(10,13,18,.25)' } }, sel ? icon(I.Check, 16) : null)
          : (p.editable ? h('div', { style: { position: 'absolute', top: 8, right: 8, width: 28, height: 28, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.text2, background: '#ffffff', boxShadow: '0 1px 3px rgba(10,13,18,.2)' } }, icon(I.Edit05, 16)) : null),
        badge ? h('span', { style: { position: 'absolute', left: 8, bottom: 8, display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 8px', borderRadius: 9999, fontSize: 12, fontWeight: 500, background: bc[0], color: bc[1], border: '1px solid ' + bc[2] } }, badge.label) : null
      ),
      p.caption ? h('div', { style: { fontSize: 14, lineHeight: '20px', fontWeight: 500, color: p.captionColor || T.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' } }, p.caption) : null
    );
  }

  /* ActionSheetRow — one 56px row in an action sheet. */
  function ActionSheetRow(p) {
    var color = p.destructive ? 'var(--color-text-error-primary, #d92d20)' : T.text;
    return h('button', { type: 'button', onClick: p.onPress, onMouseEnter: function (e) { e.currentTarget.style.background = T.bgHover; }, onMouseLeave: function (e) { e.currentTarget.style.background = 'transparent'; }, style: { width: '100%', height: 56, display: 'flex', alignItems: 'center', gap: 12, padding: '0 4px', border: 0, borderBottom: p.divider === false ? 0 : '1px solid ' + T.border2, background: 'transparent', fontFamily: T.font, fontSize: 16, lineHeight: '24px', fontWeight: 500, color: color, textAlign: 'left', cursor: 'pointer' } },
      p.icon ? h('span', { style: { color: p.destructive ? color : T.fg4, display: 'flex' } }, icon(p.icon, 20)) : null,
      h('span', { style: { flex: 1 } }, p.label),
      p.trailing ? h('span', { style: { fontSize: 14, color: T.text3, fontWeight: 400 } }, p.trailing) : null
    );
  }

    // Done-pulse keyframes for ScanSheet (injected once).
  if (typeof document !== 'undefined' && !document.getElementById('um-mobile-css')) {
    var st = document.createElement('style'); st.id = 'um-mobile-css';
    st.textContent = '@keyframes um-done-breathe{from{box-shadow:0 0 0 0 rgba(23,178,106,.45)}to{box-shadow:0 0 0 7px rgba(23,178,106,.18)}}.um-done-pulse{animation:um-done-breathe 650ms ease-in-out infinite alternate}.um-fullw button{width:100% !important}@media (prefers-reduced-motion: reduce){.um-done-pulse{animation:none}}';
    document.head.appendChild(st);
  }

  window.UntitledMobile = { BottomSheet: BottomSheet, Toast: Toast, DarkToast: DarkToast, CameraControls: CameraControls, PhotoTile: PhotoTile, ActionSheetRow: ActionSheetRow,
    GroupBand: GroupBand, StepHeader: StepHeader, PersonCard: PersonCard, OptionRow: OptionRow, ScanSheet: ScanSheet, CameraFallback: CameraFallback, PrintAction: PrintAction,
    status: { BottomSheet: 'Draft', Toast: 'Draft', DarkToast: 'Draft', CameraControls: 'Draft', PhotoTile: 'Draft', ActionSheetRow: 'Draft', GroupBand: 'Draft', StepHeader: 'Draft', PersonCard: 'Draft', OptionRow: 'Draft', ScanSheet: 'Draft', CameraFallback: 'Draft', PrintAction: 'Draft' } };
})();
