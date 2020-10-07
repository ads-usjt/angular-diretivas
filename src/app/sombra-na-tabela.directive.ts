import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela, table]'
})
export class SombraNaTabelaDirective {

  constructor(private elementRef: ElementRef, private renderer : Renderer2) {

  }

  @HostListener('mouseover')
  isCursorOver(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '10px 10px'
    )
  }

  @HostListener('mouseleave')
  isCursorLeft(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      'none'
    )
  }

}
