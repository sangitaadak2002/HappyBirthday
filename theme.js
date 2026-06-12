(function() {
  // Apply saved theme immediately to avoid flash
  const saved = localStorage.getItem('sbd_theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');

  function setTheme(t) {
    localStorage.setItem('sbd_theme', t);
    if (t === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    updateBtn(t);
  }

  function updateBtn(t) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    if (t === 'light') {
      btn.innerHTML = '🌙 Dark mode';
      btn.title = 'Switch to dark mode';
    } else {
      btn.innerHTML = '☀️ Light mode';
      btn.title = 'Switch to light mode';
    }
  }

  // Run after DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      updateBtn(localStorage.getItem('sbd_theme') || 'dark');
      btn.addEventListener('click', function() {
        const current = localStorage.getItem('sbd_theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();