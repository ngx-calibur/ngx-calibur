import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ExcaliburCoreService } from '../../core';

@Directive({
  selector: '[xcbDisclosureButton]',
})
export class DisclosureButtonDirective implements OnChanges {

  @Input()
  isOpen = false;

  @HostBinding('attr.aria-controls')
  @Input()
  ariaControls = 'mobile-menu'

  @HostBinding('attr.aria-expanded')
  @Input()
  ariaExpanded = false

  @HostBinding('attr.id')
  @Input()
  id = `xcb-disclosure-button-${this.coreService.useId()}`;

  @HostBinding('attr.disabled')
  @Input()
  disabled = null

  @Output()
  toggleDisclosure = new EventEmitter()

  constructor(
    private readonly coreService: ExcaliburCoreService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.isOpen?.currentValue === true) {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
    }

    if (changes?.isOpen?.currentValue === false) {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;

    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();
        this.toggleDisclosure.emit();
        break;
    }
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case ' ':
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault();
        break;
    }
  }

}
