import { Figure } from "./abstract/figure";

export class ImageFigure extends Figure {
  size: number;
  image: HTMLImageElement;
  
  constructor(x: number, y: number, size: number, image: HTMLImageElement, backgroundColor: string, borderColor: string) {
    super(x, y, backgroundColor, borderColor);
    this.size = size;
    this.image = image;
  }

  drawBorder(ctx: CanvasRenderingContext2D): void {
    ctx.strokeRect(this.x, this.y, this.size, this.size);
  }

  isPointInside(x: number, y: number): boolean {
    return x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size;
  }
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }
}