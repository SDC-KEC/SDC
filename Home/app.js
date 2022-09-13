VANTA.BIRDS({
    el: "#back_bird",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xffffff,
    color1: 0x423ac3,
    color2: 0x35f700,
    birdSize: 1.0,
    quantity: 3.0,
    backgroundAlpha: 0.0,
  });
  
  document.querySelector("#home-btn").addEventListener('click',()=>{
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
  });

