import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WgtContainerComponent } from './wgt-container/wgt-container.component';
import { WidgetComponent } from './widget/widget.component';

import { FixturesService } from './fixtures.service';

@NgModule({
  declarations: [
    AppComponent,
    WgtContainerComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FixturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
