import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';


@Directive({
  selector: '[appCommoninside]'
})
export class CommoninsideDirective {

  constructor(private elementRef:ElementRef, private render:Renderer2) {
  }

@HostBinding('style.backgroundColor') bgColor:string= 'red';


@HostListener('mousedown') SukienHover(eventData:Event)
{
  // this.render.setStyle(this.elementRef.nativeElement, 'color', "blue");
  this.bgColor = 'green';
}

@HostListener('mouseleave') SukienMouseLeave(eventData:Event)
{
  // this.render.setStyle(this.elementRef.nativeElement, 'color', "pink");
  this.bgColor = 'pink';
}

ngOnInit(){
  // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  // this.render.addClass(this.elementRef.nativeElement,'testmutilestyle');
  }
}
