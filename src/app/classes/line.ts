import { Figure } from "./abstract/figure";

export class Line extends Figure {
  endX: number;
  endY: number;
  
  constructor(x: number, y: number, endX: number, endY: number, backgroundColor: string, borderColor: string) {
    super(x, y, backgroundColor, borderColor);
    this.endX = endX;
    this.endY = endY;
  }
  
  isPointInside(x: number, y: number): boolean {
    const minX = Math.min(this.x, this.endX);
    const maxX = Math.max(this.x, this.endX);
    const minY = Math.min(this.y, this.endY);
    const maxY = Math.max(this.y, this.endY);
    const epsilon = 0.5; 
    if (x >= minX - epsilon && x <= maxX + epsilon && y >= minY - epsilon && y <= maxY + epsilon) {
      const slope = (this.endY - this.y) / (this.endX - this.x);
      const intercept = this.y - slope * this.x;

      return Math.abs(y - (slope * x + intercept)) <= epsilon;
    }

    return false;
  }

  drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
    ctx.closePath();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.backgroundColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
    ctx.closePath();
  }
}