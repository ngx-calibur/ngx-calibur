import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExcaliburThemeService } from '@ngx-calibur';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DemoTheme, DemoTheme2, Theme } from './theme';

@Component({
  selector: 'xcb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  title = 'demo';

  navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  private readonly isDisclosureOpen = new BehaviorSubject(false);
  readonly isDisclosureOpen$ = this.isDisclosureOpen.pipe(distinctUntilChanged());

  private readonly isDropdownOpen = new BehaviorSubject(false);
  readonly isDropdownOpen$ = this.isDropdownOpen.pipe(distinctUntilChanged());

  private readonly isDropdownHidden = new BehaviorSubject(true);
  readonly isDropdownHidden$ = this.isDropdownHidden.pipe(distinctUntilChanged());

  constructor(
    private readonly themeService: ExcaliburThemeService<Theme>,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.themeService.setTheme(new DemoTheme2());
    }, 1000);
  }

  toggleDisclosure() {
    this.isDisclosureOpen.next(!this.isDisclosureOpen.value);
  }

  toggleDropdown() {
    this.isDropdownOpen.next(!this.isDropdownOpen.value);
  }

  openDropdown() {
    this.isDropdownOpen.next(true);
  }

  closeDropdown() {
    this.isDropdownOpen.next(false);
  }

  onDropdownShow() {
    this.isDropdownHidden.next(false);
  }

  onDropdownHide() {
    this.isDropdownHidden.next(true);
  }

}
