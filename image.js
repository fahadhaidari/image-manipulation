class ImageClass {
  constructor(config) {
    const { src, width, height, location, context } = config;

    this.image = new Image();
    this.src = src;
    this.imageData = [];
    this.location = config.location
    this.isLoaded = false;
    this.speed = 1;

    this.image.onload = () => {
      context.drawImage(this.image, 0, 0);
      this.imageData = context.getImageData(0, 0, width, height);
      this.isLoaded = true;
    };
    this.image.src = this.src;

  }
}
