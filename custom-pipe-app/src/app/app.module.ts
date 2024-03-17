import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquarePipe } from './square.pipe';
import { AadhaarnoPipe } from './aadhaarno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    AadhaarnoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
