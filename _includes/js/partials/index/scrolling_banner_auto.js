const speed = 1; // 2 pixels per frame at 60 frames per second
const banner = document.getElementsByClassName('charities')[0];

// build images array
let images = [...banner.getElementsByTagName('a')];
let real_images = [...banner.querySelectorAll('img')];

// initialize images positions
let total_width = 0
let rects = real_images.map((img, index) => {
  const rect = {
    left: total_width,
    width: img.width + 64,
  };

  total_width += rect.width

  return rect;
});

function scrolling_banner_animate() {
  const l = images.length;
  for (let i = 0; i < l; i++) {
    const img = images[i];
    const rect = rects[i];
    rect.left -= speed;
    if (rect.left + rect.width < 0) { // this image if fully overflowing left, put it at the end of the image list both in position and in images and rects
      const lastRect = rects[rects.length - 1];
      rect.left = lastRect.left + lastRect.width;
      images = images.slice(1, l);
      images.push(img);
      rects = rects.slice(1, l);
      rects.push(rect);
      i--;
    }

    // change the actual image style according to new rect value
    img.style.left = rect.left + 'px';
  };


  requestAnimationFrame(scrolling_banner_animate);
}
scrolling_banner_animate();
