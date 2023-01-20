const modal = document.querySelector('#myModal');

const hamburger = document.querySelector('#nav-menu');

const close = document.getElementsByClassName('close')[0];



const nav = document.getElementsByClassName('nav')[0];
const elem_nav = nav.getElementsByTagName("li").length;

for (let i = 0; i < elem_nav; i++) {
  const link = document.getElementsByClassName("nav-item")[i];

  link.addEventListener('click', () => {
    modal.style.display = "none";
  });
}
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
