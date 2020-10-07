import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]'
})
export class SombraNaTabelaDirective {
  @HostBinding('style.boxShadow')
  sombra: string;

  // constructor(private elementRef: ElementRef, private renderer : Renderer2) {}

  @HostListener('mouseover')
  isCursorOver(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow',
    //   '10px 10px'
    // )
    this.sombra = '10px 10px';
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
