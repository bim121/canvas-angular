import { Figure } from "./abstract/figure";

export class Triangle extends Figure {
  endX: number;
  endY: number;
  
  constructor(x: number, y: number, endX: number, endY: number, backgroundColor: string, borderColor: string) {
    super(x, y, backgroundColor, borderColor);
    this.endX = endX;
    this.endY = endY;
  }

  isPointInside(pointX: number, pointY: number): boolean {
    const dX = pointX - this.x;
    const dY = pointY - this.y;
    const dX2 = pointX - this.endX;
    const dY2 = pointY - this.endY;
    const dX3 = pointX - (this.x + (this.endX - this.x) / 2);
    const dY3 = pointY - (this.y - (this.endY - this.y));
  
    const sign1 = (dX * (this.endY - this.y) - (this.endX - this.x) * dY) >= 0;
    const sign2 = (dX2 * dY2 - dX * dY) >= 0;
    const sign3 = (dX * (this.y - this.endY) - (this.x - this.endX) * dY3) >= 0;
  
    return (sign1 === sign2) && (sign2 === sign3);
  }
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.fillStyle = this.backgroundColor;
    ctx.strokeStyle = this.borderColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endX, this.endY);
    ctx.lineTo(this.x + (this.endX - this.x) / 2, this.y - (this.endY - this.y));
    ctx.lineTo(this.x, this.y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endX, this.endY);
    ctx.lineTo(this.x + (this.endX - this.x) / 2, this.y - (this.endY - this.y));
    ctx.lineTo(this.x, this.y);
    ctx.closePath();
    ctx.stroke();
  }
}