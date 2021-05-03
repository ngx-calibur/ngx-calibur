import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionDirective } from './transition.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TransitionDirective],
  exports: [TransitionDirective],
})
export class ExcaliburAnimationsModule {}
