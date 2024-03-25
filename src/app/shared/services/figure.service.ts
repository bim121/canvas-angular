import { Injectable } from '@angular/core';
import { Figure } from '../../classes/abstract/figure';
import { Rectangle } from '../../classes/rectangle';
import { Triangle } from '../../classes/triangle';
import { Ellipse } from '../../classes/ellipse';
import { ImageFigure } from '../../classes/image';
import { TextFigure } from '../../classes/text';
import { Line } from '../../classes/line';
import { Options } from '../interface/option.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  public figures: Figure[] = [];
  public options: Options = {
    backgroundColor: 'black',
    borderColor: 'black',
    width: 100,
    height: 100,
    file: null,
    text: "text",
    textColor: "black",
  };
  private optionsSubject = new BehaviorSubject<Options>(this.options);
  options$ = this.optionsSubject.asObservable();

  constructor() {
    this.options$.subscribe(options => {
      this.options = options || this.options; 
    });
  }

  public updateOptions(options: Options): void {
    this.optionsSubject.next(options);
  }

  public addRectangle(startX: number, startY: number, size: number): void {
    const newFigure = new Rectangle(startX, startY, size, this.options.backgroundColor, this.options.borderColor);
    this.figures.push(newFigure);
  }

  public addTriangle(x: number, y: number, endX: number, endY: number): void {
    const newFigure = new Triangle(x, y, endX, endY, this.options.backgroundColor, this.options.borderColor);
    this.figures.push(newFigure);
  }

  public addEllipse(x: number, y:number, radiusX: number, radiusY: number){
    const newFigure = new Ellipse(x, y, radiusX, radiusY, this.options.backgroundColor, this.options.borderColor);
    this.figures.push(newFigure);
  }

  public addImage(x: number, y: number, size: number, image: HTMLImageElement){
    const newFigure = new ImageFigure(x, y, size, image, this.options.backgroundColor, this.options.borderColor);
    this.figures.push(newFigure);
  }

  public addText(x: number, y: number, text: string, fontSize: number){
    const newFigure = new TextFigure(x, y, text, fontSize, this.options.textColor, this.options.textColor);
    this.figures.push(newFigure);
  }

  public addLine(x: number, y: number, endX: number, endY: number){
    const newFigure = new Line(x, y, endX, endY, this.options.backgroundColor, this.options.borderColor);
    this.figures.push(newFigure);
  }

  public drawRectangle(startX: number, startY: number, size: number, ctx: CanvasRenderingContext2D): void{
    const newRectangle = new Rectangle(startX, startY, size, this.options.backgroundColor, this.options.borderColor);
    newRectangle.draw(ctx);
  }

  public drawTriangle(x: number, y: number, endX: number, endY: number, ctx: CanvasRenderingContext2D): void {
    const newTriangle = new Triangle(x, y, endX, endY, this.options.backgroundColor, this.options.borderColor);
    newTriangle.draw(ctx);
  }

  public drawEllipse(x: number, y:number, radiusX: number, radiusY: number, ctx: CanvasRenderingContext2D){
    const newEllipse = new Ellipse(x, y, radiusX, radiusY, this.options.backgroundColor, this.options.borderColor);
    newEllipse.draw(ctx);
  }

  public drawImage(x: number, y: number, size: number, image: HTMLImageElement, ctx: CanvasRenderingContext2D){
    const newImageFigure = new ImageFigure(x, y, size, image, this.options.backgroundColor, this.options.borderColor);
    newImageFigure.draw(ctx);
  }

  public drawText(x: number, y: number, text: string, fontSize: number, ctx: CanvasRenderingContext2D){
    const newTextFigure = new TextFigure(x, y, text, fontSize, this.options.textColor, this.options.textColor);
    newTextFigure.draw(ctx);
  }

  public drawLine(x: number, y: number, endX: number, endY: number, ctx: CanvasRenderingContext2D){
    const newLine = new Line(x, y, endX, endY, this.options.backgroundColor, this.options.borderColor);
    newLine.draw(ctx);
  }

  public clearCanvas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  public drawAllFigures(ctx: CanvasRenderingContext2D): void {
    this.figures.forEach(figure => {
      figure.draw(ctx);
    });
  }

  public clearAndDraw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    this.clearCanvas(ctx, canvas);
    this.drawAllFigures(ctx);
  }
}
