import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sombra]'
})
export class SombraNaTabelaDirective {
  @HostBinding('style.boxShadow')
  sombra: string;
  @Input('sombra')
  entrada: string;

  // constructor(private elementRef: ElementRef, private renderer : Renderer2) {}

  @HostListener('mouseover')
  isCursorOver(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow',
    //   '10px 10px'
    // )
    this.sombra = this.entrada;
  }

  @HostListener('mouseleave')
  isCursorLeft(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow',
    //   'none'
    // )
    this.sombra = 'none';
  }
}
