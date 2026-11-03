// Framer's exported runtime restores the original Framer routes (/about,
// /projects, ...). GitHub Pages serves this site as static HTML, so follow
// the local .html links exactly as written instead.
const staticProjectPages = new Set([
  'adc-calibration-fpga',
  'file-system-fpga',
  'network-packet-inspection',
  'summer-internhip-project',
  'uart-in-fpga'
]);

function repairStaticImages() {
  const avatar = '/Microcraft/assets/images/mCJXHDn1n7Tg6y2ACtnpBhUgXY-c38c31.jpg';
  document.querySelectorAll('img[alt="Portfolio Creator Avatar"]').forEach((image) => {
    image.src = avatar;
    image.srcset = `${avatar} 2816w`;
  });

  const artyfs = '/Microcraft/assets/images/EqpMr8ZNI8ueVqUub4NvrLJabPE-dbceb4.jpg';
  document.querySelectorAll('img[src*="EqpMr8ZNI8ueVqUub4NvrLJabPE"]').forEach((image) => {
    image.src = artyfs;
    image.srcset = `${artyfs} 512w`;
  });
}

document.addEventListener('DOMContentLoaded', repairStaticImages);
new MutationObserver(repairStaticImages).observe(document.documentElement, { childList: true, subtree: true });

function staticUrl(url) {
  const currentPath = window.location.pathname;
  const siteRoot = currentPath.match(/^\/[^/]+(?=\/)/)?.[0] ?? '';

  if (url.pathname.endsWith('/about')) url.pathname = `${siteRoot}/about.html`;
  if (url.pathname.endsWith('/projects')) url.pathname = `${siteRoot}/projects.html`;

  const project = url.pathname.match(/\/projects\/([^/]+)$/)?.[1];
  if (project && staticProjectPages.has(project)) {
    url.pathname = `${siteRoot}/projects/projects_${project}.html`;
  }
  return url;
}

function navigateStatic(event) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest('a[href]');
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

  const url = staticUrl(new URL(anchor.href, window.location.href));
  if (url.origin !== window.location.origin && url.hostname !== 'harsharadh.framer.website') return;

  // The converted URL must remain on this GitHub Pages site.
  url.href = new URL(url.pathname + url.search + url.hash, window.location.origin).href;

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(url.href);
}

window.addEventListener('pointerdown', navigateStatic, true);
window.addEventListener('click', navigateStatic, true);
