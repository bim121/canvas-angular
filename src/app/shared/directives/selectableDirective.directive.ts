import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {
  @Input('appSelectable') isSelected: boolean = false;

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  public ngOnChanges() {
    if (this.isSelected) {
      this._renderer.setStyle(this._el.nativeElement, 'background-color', 'gray');
    } else {
      this._renderer.setStyle(this._el.nativeElement, 'background-color', '#f0f0f0');
    }
  }
}