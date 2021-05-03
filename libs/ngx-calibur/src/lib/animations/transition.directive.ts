import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { transition } from './utils/transition';

@Directive({
  selector: '[xcbTransition]',
})
export class TransitionDirective implements OnChanges {

  @Input()
  isOpen = false

  @Input()
  enter = ''

  @Input()
  enterFrom = ''

  @Input()
  enterTo = ''

  @Input()
  leave = ''

  @Input()
  leaveFrom = ''

  @Input()
  leaveTo = ''

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen?.currentValue === true) {
      this.renderer.removeClass(this.el.nativeElement, 'hidden');

      transition(
        this.el.nativeElement,
        this.splitClasses(this.enter),
        this.splitClasses(this.enterFrom),
        this.splitClasses(this.enterTo),
        reason => {
          if (reason !== 'finished') return;
        },
      );
    }

    if (changes.isOpen?.currentValue === false) {
      transition(
        this.el.nativeElement,
        this.splitClasses(this.leave),
        this.splitClasses(this.leaveFrom),
        this.splitClasses(this.leaveTo),
        reason => {
          if (reason !== 'finished') return;
          this.renderer.addClass(this.el.nativeElement, 'hidden');
        },
      );
    }
  }

  private splitClasses(classes: string = '') {
    return classes.split(' ').filter(className => className.trim().length > 1);
  }

}
