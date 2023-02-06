export const PRELOADED_IMAGES: HTMLImageElement[] = [];

export const preloadImage = (images: string[]) => {
  images.forEach((el) => {
    // image태그생성.
    const img = new Image();
    img.src = el;
    img.onload = () => PRELOADED_IMAGES.push(img);
  });
};
