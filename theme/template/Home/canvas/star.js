export default class star {
  ctx: CanvasRenderingContext2D;

  radians: number;

  x: number

  y: number;

  radius: number;

  color: string;

  last: Object;

  alpha: number = 0;

  temp: number = 0;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    size: number,
    color: string,
  ) {
    this.ctx = ctx;
    this.radians = Math.random() * (Math.PI * 2);
    this.x = x + Math.cos(this.radians) * radius;
    this.y = y + Math.cos(this.radians) * radius;
    this.radius = radius;
    this.color = color;
    this.size = size;
    this.last = {
      x,
      y,
    };
  }

  update() {
    const lastPos = {
      x: this.x,
      y: this.y,
    };

    if (this.temp > 1) {
      this.alpha -= 0.008;
    } else {
      this.temp += 0.008;
      this.alpha += 0.008;
    }

    if (this.alpha <= 0) {
      this.alpha = 0;
    }

    this.radians += Math.random() * 0.05;
    this.x = this.last.x + Math.cos(this.radians) * this.radius;
    this.y = this.last.y + Math.sin(this.radians) * this.radius;
    this.draw(lastPos);
  }

  draw(lastPos: Object) {
    const { ctx } = this;
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size; // 线条大小
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(this.x, this.y);
    ctx.globalAlpha = this.alpha;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
