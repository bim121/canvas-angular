import { Component } from '@angular/core';
import { CoordinateService } from '../shared/services/coordinate.service';
import { CoordinateType } from '../shared/types/coordinates.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public coordinates: CoordinateType = { x: 0, y: 0 };
  public subscription: Subscription;

  constructor(private _coordinateService: CoordinateService) {
    this.subscription = this._coordinateService.coordinate$.subscribe(coords => {
      this.coordinates = coords;
    });
  }
}
