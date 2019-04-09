window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const WINDOW_COLOR = '#111111';
  const canvasWidth = canvas.width = window.innerWidth;
  const canvasHeight = canvas.height = window.innerHeight * 0.97;
  const random = (min, max) => Math.random() * (max - min) + min;

  canvas.style.backgroundColor = WINDOW_COLOR;
  document.body.style.backgroundColor = WINDOW_COLOR;

  const draw = () => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    if (image.isLoaded) {
      for (let i = 0; i < image.imageData.data.length; i += 4) {
        const pixels = image.imageData.data;
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // const r = pixels[i + 1]; get RED value
        // const g = pixels[i + 2]; get GREEN value
        // const b = pixels[i + 3]; get BLUE value
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // Comment/uncomment some of these code snippets for different effects

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // pixels[i + 1] += Math.cos(image.speed) * 100;
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        pixels[i + 1] = random(255, 0);
        pixels[i + 2] = random(255, 0);
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // pixels[i + 1] -= 1;
        // pixels[i + 2] += 1;
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      }
      image.speed += 0.05;
      // image.location.x += Math.cos(image.speed);
      image.location.y += Math.cos(image.speed);
      context.putImageData(image.imageData, image.location.x, image.location.y);
    }
  };

  const frame = () => {
    draw();
    requestAnimationFrame(frame);
  };

  const image = new ImageClass({
    src: './images/img2.png',
    width: canvasWidth,
    height: canvasHeight,
    context,
    location: {
      x: 0,
      y: 40,
    }
  });
  frame();
}
