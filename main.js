
/* Simple JS: theme toggle, gallery modal, and active nav */
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const current = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if(current === 'dark') document.documentElement.setAttribute('data-theme','dark');
  if(themeToggle) themeToggle.addEventListener('click', ()=>{
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if(now==='dark') document.documentElement.setAttribute('data-theme','dark'); else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', now);
  });

  // gallery modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', ()=>{
      if(modal && modalImg){ modal.style.display='flex'; modalImg.src = img.src; document.body.style.overflow='hidden'; }
    });
  });
  if(modal){ modal.addEventListener('click', (e)=>{ if(e.target===modal){ modal.style.display='none'; document.body.style.overflow='auto'; }}); }

  // set active nav link based on pathname
  const links = document.querySelectorAll('.navlinks a');
  links.forEach(a=>{ if(location.pathname.endsWith(a.getAttribute('href')) || (location.pathname.endsWith('/') && a.getAttribute('href')=='index.html')) a.classList.add('active'); });
})();
