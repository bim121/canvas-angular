import { Figure } from "./abstract/figure";

export class TextFigure extends Figure {
  text: string;
  fontSize: number;
  textWidth: number = 0;
  textHeight: number = 0;
  
  constructor(x: number, y: number, text: string, fontSize: number, backgroundColor: string, borderColor: string) {
    super(x, y, backgroundColor, borderColor);
    this.text = text;
    this.fontSize = fontSize;
  }
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.backgroundColor;
    ctx.strokeStyle = this.borderColor;
    ctx.font = this.fontSize + "px serif";
    this.textWidth = ctx.measureText(this.text).width;
    this.textHeight = this.fontSize;
    ctx.fillText(this.text, this.x, this.y);
  }

  drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.strokeRect(this.x, this.y - this.textHeight, this.textWidth, this.textHeight);
  }

  isPointInside(x: number, y: number): boolean {
    return x >= this.x && x <= this.x + this.textWidth && y >= this.y - this.textHeight && y <= this.y;
  }
}