const modal = document.querySelector('#myModal');

const hamburger = document.querySelector('#nav-menu');

const close = document.getElementsByClassName('close')[0];

//get device width
//console.log(document.documentElement.clientWidth);
window.addEventListener('resize', () => {
  const deviceWidth = document.documentElement.clientWidth;
  //console.log(deviceWidth);
  const nav = document.getElementsByClassName('nav')[0];
  const elem_nav = nav.getElementsByTagName("li").length; //number of li inside ul

  for (let i = 0; i < elem_nav; i++) {
    const link = document.getElementsByClassName("nav-item")[i];

    if(deviceWidth <= "550") {
      link.addEventListener('click', () => {
        modal.style.display = "none";
      });
    }
  }
})

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

//get the total number of images in gallery
//const image_gallery = document.getElementsByClassName('gallery')[0].getElementsByClassName('image-gallery').length;
//console.log(image_gallery);
//select the image from image_gallery
/*for (let i = 0; i < image_gallery; i++) {
  const image = document.getElementsByClassName('image-gallery-the-picture')[i];
  image.addEventListener('click', () => {

  })
}*/
