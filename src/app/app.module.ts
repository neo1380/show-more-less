import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { UiReadMoreComponent } from './uireadmore/uireadmore.component';

@NgModule({
  declarations: [AppComponent, ReadMoreComponent, UiReadMoreComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
