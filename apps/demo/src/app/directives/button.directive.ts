import { Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { ExcaliburThemeService } from '@ngx-calibur';
import { Subject } from 'rxjs';
import { pairwise, take, takeUntil, tap } from 'rxjs/operators';
import { Theme } from '../theme';

@Directive({
  selector: '[xcbButton]',
})
export class ButtonDirective implements OnChanges, OnDestroy {

  @Input()
  variant = 'primary';

  private destroyed = new Subject();

  constructor(
    private readonly el: ElementRef<HTMLButtonElement>,
    private readonly themeService: ExcaliburThemeService<Theme>,
    private readonly renderer: Renderer2,
  ) {
    this.themeService.theme$.pipe(
      takeUntil(this.destroyed),
      pairwise<Theme>(),
      tap(([previousValue, currentValue]) => {
        previousValue.buttons[this.variant].split(/\s+/g).forEach(className => {
          this.renderer.removeClass(this.el.nativeElement, className);
        });

        currentValue.buttons[this.variant].split(/\s+/g).forEach(className => {
          this.renderer.addClass(this.el.nativeElement, className);
        });
      }),
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.themeService.theme$.pipe(
      take(1),
      tap(({ buttons }) => {
        buttons[changes.variant.previousValue]?.split(/\s+/g).forEach(className => {
          this.renderer.removeClass(this.el.nativeElement, className);
        });

        buttons[changes.variant.currentValue].split(/\s+/g).forEach(className => {
          this.renderer.addClass(this.el.nativeElement, className);
        });
      }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

};
