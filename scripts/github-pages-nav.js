// Framer's exported runtime restores the original Framer routes (/about,
// /projects, ...). GitHub Pages serves this site as static HTML, so follow
// the local .html links exactly as written instead.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest('a[href]');
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;

  event.preventDefault();
  event.stopPropagation();
  window.location.assign(url.href);
}, true);
