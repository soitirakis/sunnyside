const modal = document.querySelector('#myModal');

const hamburger = document.querySelector('#nav-menu');

const close = document.getElementsByClassName('close')[0];

hamburger.addEventListener('click', () => {
  modal.style.display = "block";
});

close.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.display = "none";
  }
})
