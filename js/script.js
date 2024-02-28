document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('darkmode-toggle');
    const logoImg = document.getElementById('logoImg');
    
    checkbox.addEventListener('change', function() {
      const body = document.body;
    
      if (this.checked) {
        body.dataset.bsTheme = 'dark';
        logoImg.src = 'logo2.png';
      } else {
        body.dataset.bsTheme = 'light';
        logoImg.src = 'logo.png';
      }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('darkmode-toggle');
    const logoImg = document.querySelector('.navbar-brand img');
    
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        logoImg.src = 'logo2.png';
      } else {
        logoImg.src = 'logo.png';
      }
    });
});