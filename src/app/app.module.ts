import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';

@NgModule({
  declarations: [AppComponent, ListComponent, DetailsComponent, PriceListComponent, HeadComponent, FootComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
