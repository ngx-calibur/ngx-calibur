import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisclosureButtonDirective } from './disclosure-button/disclosure-button.directive';
import { DisclosurePanelDirective } from './disclosure-panel/disclosure-panel.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    DisclosureButtonDirective,
    DisclosurePanelDirective,
  ],
  declarations: [
    DisclosureButtonDirective,
    DisclosurePanelDirective,
  ],
})
export class ExcaliburDisclosureModule {}
