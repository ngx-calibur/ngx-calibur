import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class ExcaliburThemeService<T> {

  private readonly theme = new ReplaySubject<T>(1);
  readonly theme$ = this.theme.pipe(
    shareReplay(1),
  );

  setTheme(theme: T): void {
    this.theme.next(theme);
  }

}
