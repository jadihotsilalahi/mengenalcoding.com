// Efek parallax pada elemen latar belakang
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  
  // Efek hover pada elemen dengan class "hover-effect"
  const hoverElements = document.querySelectorAll('.hover-effect');
  
  hoverElements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      element.style.transform = 'scale(1.1)';
    });
  
    element.addEventListener('mouseleave', function () {
      element.style.transform = 'scale(1)';
    });
  });
  
  // Efek hover pada tombol dengan class "btn"
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(function (button) {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#3498db';
      button.style.color = '#fff';
    });
  
    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = '';
      button.style.color = '';
    });
  });
  