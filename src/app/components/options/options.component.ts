import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectionService } from '../../shared/services/selection.service';
import { FigureService } from '../../shared/services/figure.service';
import { Options } from '../../shared/interface/option.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  selectedFigure: string | null = null;

  public backgroundColor: string = '';
  public borderColor: string = '';
  public width: number = 100;
  public height: number = 100;
  public file: File | null = null;
  public text: string = "text";
  public textColor: string = "black";

  constructor(
    private _selectionService: SelectionService,
    private _figureService: FigureService  
  ) { }

  ngOnInit(): void {
    this._selectionService.selectedFigure$.subscribe(figure => {
      this.selectedFigure = figure;
    });
  }

  public onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.onPropertiesChanged();
    }
  }

  public onPropertiesChanged() {
    const properties: Options = {
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      width: this.width,
      height: this.height,
      file: this.file,
      text: this.text,
      textColor: this.textColor,
    };
    this._figureService.updateOptions(properties);
  }
}
