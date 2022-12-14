import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './shared/cabecalho/cabecalho.module';
import { RodapeModule } from './shared/rodape/rodape.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CabecalhoModule, RodapeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
