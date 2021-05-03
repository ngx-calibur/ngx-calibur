import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ExcaliburCoreService } from '../../core';

@Directive({
  selector: '[xcbDropdownButton]',
})
export class DropdownButtonDirective {

  @HostBinding('attr.aria-expanded')
  @Input()
  isOpen = false;

  @HostBinding('attr.id')
  @Input()
  id = `xcb-dropdown-button-${this.coreService.useId()}`;

  @HostBinding('attr.type')
  @Input()
  type = 'button';

  @HostBinding('attr.aria-haspopup')
  @Input()
  ariaHasPopup = true

  @HostBinding('attr.aria-controls')
  @Input()
  ariaControls = this.id

  @Output()
  toggleDropdown = new EventEmitter()

  @Output()
  openDropdown = new EventEmitter()

  @Output()
  closeDropdown = new EventEmitter()

  @HostBinding('attr.disabled')
  @Input()
  disabled = null

  @HostListener('window:click', ['$event.target'])
  onClick(target: EventTarget) {
    if (!this.el.nativeElement.contains(target) || this.isOpen === true) {
      this.closeDropdown.emit();
    }

    if (this.el.nativeElement.contains(target) && this.isOpen === false) {
      this.openDropdown.emit();
    }
  }

  constructor(
    private readonly coreService: ExcaliburCoreService,
    private readonly el: ElementRef,
  ) {}

  private handleClick = () => {
    window.removeEventListener('click', this.handleClick);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;

    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();
        this.toggleDropdown.emit();
        break;

      case 'Escape':
        event.preventDefault();
        event.stopPropagation();
        this.closeDropdown.emit();
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
