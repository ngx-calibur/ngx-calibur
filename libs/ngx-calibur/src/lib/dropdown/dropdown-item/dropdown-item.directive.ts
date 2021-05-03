import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[xcbDropdownItem]',
})
export class DropdownItemDirective {

  @Input()
  isOpen = false;

  @Output()
  openDropdown = new EventEmitter();

  @Output()
  closeDropdown = new EventEmitter();

}
