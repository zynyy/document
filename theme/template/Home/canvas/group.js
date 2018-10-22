import Star from './star';

import { minMax, getRandomColor } from './utils';

export default class group {
  x: number

  y: number;

  num: number;

  moreRand: number;

  stars: Array<Star> = [];

  colors: Array<string> = ['#D9EAF9', '#32B7F4', '#2E49E0', '#182098'];

  width: number = 980;

  update: Function;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, num: number) {
    this.num = num;
    for (let i = 0; i < this.num; i += 1) {
      this.stars.push(new Star(
        ctx,
        x,
        y,
        Math.random() * (minMax(100, this.width)),
        Math.random() * 5,
        getRandomColor(this.colors),
      ));
    }
  }

  setColor(colors: Array<string>) {
    this.colors = colors;
  }

  setWidth(width: number) {
    this.width = width;
  }

  update() {
    this.stars.forEach((star) => {
      star.update();
    });
  }
}
