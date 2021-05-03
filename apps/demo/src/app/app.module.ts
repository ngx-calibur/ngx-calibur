import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ExcaliburModule } from '@ngx-calibur';
import { ExcaliburAnimationsModule } from '@ngx-calibur/animations';
import { ExcaliburDisclosureModule } from '@ngx-calibur/disclosure';
import { ExcaliburDropdownModule } from '@ngx-calibur/dropdown';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,

    /* -------------------------------------------------------------------------- */
    /*                                  Excalibur                                 */
    /* -------------------------------------------------------------------------- */
    ExcaliburModule.forRoot(),
    ExcaliburAnimationsModule,
    ExcaliburDisclosureModule,
    ExcaliburDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
