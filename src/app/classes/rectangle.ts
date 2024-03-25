import { Figure } from "./abstract/figure";

export class Rectangle extends Figure {
  size: number;
  
  constructor(x: number, y: number, size: number, backgroundColor: string, borderColor: string) {
    super(x, y, backgroundColor, borderColor);
    this.size = size;
  }
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.strokeRect(this.x, this.y, this.size, this.size)
  }

  drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.strokeRect(this.x, this.y, this.size, this.size);
  }

  isPointInside(x: number, y: number): boolean {
    return x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size;
  }
}