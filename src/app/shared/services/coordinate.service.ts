import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinateType } from '../types/coordinates.type';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  private coordinateSubject = new BehaviorSubject<CoordinateType>({ x: 0, y: 0 });
  coordinate$: Observable<CoordinateType> = this.coordinateSubject.asObservable();

  public updateCoordinates(coordinates: CoordinateType) {
    this.coordinateSubject.next(coordinates);
  }
}