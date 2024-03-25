import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectedFigureSubject = new BehaviorSubject<string | null>(null);
  selectedFigure$ = this.selectedFigureSubject.asObservable();

  constructor() { }

  public setSelectedFigure(figure: string | null): void {
    this.selectedFigureSubject.next(figure);
  }
}