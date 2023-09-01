const banner = document.querySelector('.charities');
let images = [...banner.querySelectorAll('a')];

let rects = (function compute_images_positions() {
  let total_width = 0
  let real_images = [...banner.querySelectorAll('img')];

  return real_images.map((img) => {
    const rect = {
      left: total_width,
      width: img.width + 64,
    };

    total_width += rect.width

    return rect;
  });
})();

scrolling_banner_animate();

function scrolling_banner_animate() {
  const l = images.length;
  const speed = 1; // 1 pixel per frame at 60 frames per second
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
  banner.style.display = "flex";


  requestAnimationFrame(scrolling_banner_animate);
}
