// Shared nav + footer injector + reveal + mobile nav
(function(){
  const PAGES = [
    {href:'index.html', label:'About'},
    {href:'research.html', label:'Research'},
    {href:'publications.html', label:'Publications'},
    {href:'teaching.html', label:'Teaching'},
    {href:'group.html', label:'Group'},
    {href:'news.html', label:'News'},
    {href:'service.html', label:'Service'},
    {href:'openings.html', label:'Openings'},
    {href:'media.html', label:'Press'},
    {href:'contact.html', label:'Contact'},
  ];
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  // Inject nav
  const navSlot = document.getElementById('site-nav');
  if (navSlot) {
    navSlot.innerHTML = `
      <nav class="nav">
        <div class="nav-inner">
          <a href="index.html" class="nav-brand" aria-label="Home">
            <span class="nav-brand-name">Prasanna Kumar S Mural</span>
            <span class="nav-brand-sub">IIT Bombay · MCPT Lab</span>
          </a>
          <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav-links').classList.toggle('open')"><span></span></button>
          <ul class="nav-links">
            ${PAGES.map(p => `<li><a href="${p.href}" class="${p.href===current?'active':''}">${p.label}</a></li>`).join('')}
            <li><a href="mailto:prasannamural@iitb.ac.in" class="nav-cta">Email ↗</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  // Inject footer
  const footSlot = document.getElementById('site-footer');
  if (footSlot) {
    footSlot.innerHTML = `
      <footer>
        <div class="wrap">
          <div class="footer-grid">
            <div>
              <div class="footer-brand-name">Prasanna Kumar S Mural</div>
              <div class="footer-brand-sub">Associate Professor · IIT Bombay</div>
              <p class="footer-tag">The MCPT Lab develops multifunctional polymer nanocomposites for sustainable energy harvesting and environmental remediation. Department of Metallurgical Engineering &amp; Materials Science, IIT Bombay.</p>
            </div>
            <div class="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><a href="research.html">Research</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="group.html">Group</a></li>
                <li><a href="teaching.html">Teaching</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Connect</h5>
              <ul>
                <li><a href="mailto:prasannamural@iitb.ac.in">Email</a></li>
                <li><a href="https://scholar.google.com/citations?user=fHYMqZIAAAAJ" target="_blank" rel="noopener">Scholar ↗</a></li>
                <li><a href="https://orcid.org/0000-0001-9908-0490" target="_blank" rel="noopener">ORCID ↗</a></li>
                <li><a href="https://www.scopus.com/authid/detail.uri?authorId=44461843400" target="_blank" rel="noopener">Scopus ↗</a></li>
                <li><a href="https://www.researchgate.net/profile/Prasanna-Kumar-Mural" target="_blank" rel="noopener">ResearchGate ↗</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Visit</h5>
              <ul>
                <li style="color:rgba(244,247,255,0.75);font-size:0.9rem;line-height:1.6">Dept. of MEMS<br>IIT Bombay, Powai<br>Mumbai 400076</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Prasanna Kumar S Mural</span>
            <span>Last updated · April 2026</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
