export abstract class Figure {
  x: number;
  y: number;
  backgroundColor: string;
  borderColor: string;
  
  constructor(x: number, y: number, backgroundColor: string, borderColor: string) {
    this.x = x;
    this.y = y;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
  }

  abstract isPointInside(x: number, y: number): boolean;
  
  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract drawBorder(ctx: CanvasRenderingContext2D): void;
}