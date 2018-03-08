$(document).ready( () => {
  console.log('this is working!');

  const colors = ['ea756f', 'ff9857', 'eac742', 'a5d98c', '76c0e3' ];


  setInterval( () => {
    const random = Math.floor(Math.random() * colors.length);

    $('#footer-heart').attr('style', `color: #${colors[random]}`);
  }, 100);
});
