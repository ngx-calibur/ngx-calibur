import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownButtonDirective } from './dropdown-button/dropdown-button.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DropdownButtonDirective,
    DropdownItemDirective,
  ],
  exports: [
    DropdownButtonDirective,
    DropdownItemDirective,
  ],
})
export class ExcaliburDropdownModule {}
