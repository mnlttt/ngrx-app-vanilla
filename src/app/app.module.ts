import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideLib } from 'mnlttt-ngrx-lib-vanilla';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [provideStore(), provideEffects(), provideLib()],
  bootstrap: [AppComponent],
})
export class AppModule {}
