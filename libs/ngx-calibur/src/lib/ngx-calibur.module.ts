import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ExcaliburCoreService } from './core/core.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class ExcaliburModule {

  static forRoot(): ModuleWithProviders<ExcaliburModule> {
    return {
      ngModule: ExcaliburModule,
      providers: [
        ExcaliburCoreService,
      ],
    };
  }

}
