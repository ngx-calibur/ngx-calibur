import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ExcaliburThemeService } from './core';
import { ExcaliburCoreService } from './core/core.service';


@NgModule({
  imports: [
    CommonModule,
  ],
})
export class ExcaliburModule {

  static forRoot<T>({
    themeConfig,
  }: {
    themeConfig: T,
  }): ModuleWithProviders<ExcaliburModule> {
    return {
      ngModule: ExcaliburModule,
      providers: [
        ExcaliburCoreService,
        {
          provide: ExcaliburThemeService,
          useFactory: () => {
            const service = new ExcaliburThemeService();
            service.setTheme(themeConfig);
            return service;
          },
        },
      ],
    };
  }

}
