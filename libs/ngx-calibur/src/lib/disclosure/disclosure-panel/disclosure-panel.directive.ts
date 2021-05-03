import { Directive, HostBinding, Input } from '@angular/core';
import { ExcaliburCoreService } from '../../core';

@Directive({
  selector: '[xcbDisclosurePanel]',
})
export class DisclosurePanelDirective {

  @HostBinding('attr.id')
  @Input()
  id = `xcb-disclosure-button-${this.coreService.useId()}`;

  constructor(
    private readonly coreService: ExcaliburCoreService,
  ) {}

}
