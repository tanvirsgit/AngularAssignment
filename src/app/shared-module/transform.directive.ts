import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class TransformDirective {

  constructor(private elRef: ElementRef, private rendered: Renderer2) { }
  @HostListener('mouseenter') mouseenter(event:Event){
    this.rendered.setStyle(this.elRef.nativeElement, 'font-style','italic');
    this.rendered.setStyle(this.elRef.nativeElement,'background-color','cyan');
  }

  @HostListener('mouseleave') mouseleave(event:Event){
    this.rendered.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.rendered.setStyle(this.elRef.nativeElement, 'font-style','normal');
  }
}
