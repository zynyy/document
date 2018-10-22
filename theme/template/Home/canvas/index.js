import Group from './group';

class Canvas {
  stage: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  num: number;

  groups: Array<Group> = [];

  running: bool = true;

  timer;

  constructor(el: HTMLElement, num: number) {
    this.stage = el;
    this.num = num || 100;
    this.ctx = el.getContext('2d');
    this.stage.height = window.innerHeight - document.getElementById('footer').scrollHeight;
    this.stage.width = window.innerWidth;
    console.warn(window.innerHeight);
    console.warn(document.getElementById('footer').scrollHeight);
  }

  init() {
    const { width, height } = this.stage;
    const { groups } = this;
    groups.push(this.newGroup(width / 2, height / 2));
    this.timer = setInterval(() => {
      const posX = Math.random() * width;
      const posY = Math.random() * height;
      groups.push(this.newGroup(posX, posY));
      if (groups.length > 8) {
        groups.splice(0, 1);
      }
    }, 1500);
  }

  newGroup(x: number, y: number) {
    const { ctx, num, stage } = this;
    const { width } = stage;
    const group = new Group(ctx, x, y, num);
    group.setWidth = width;
    return group;
  }

  destroy = () => {
    this.running = false;
  };

  loop = () => {
    const { ctx, stage } = this;
    const { width, height } = stage;
    if (this.running) {
      requestAnimationFrame(this.loop);
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(0, 0, 0,0.05)';
      ctx.fillRect(0, 0, width, height);
      this.groups.forEach(g => g.update());
    } else {
      clearInterval(this.timer);
    }
  };
}

export default function start(el: HTMLElement) {
  if (el) {
    const c = new Canvas(el);
    c.init();
    c.loop();
    return c;
  }
  return null;
}
