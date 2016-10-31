import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app/app.component';
import { routing } from './app/app-routes';
import {Test2Component} from "./app/components/test2.component";
import {Test1Component} from "./app/components/test1.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    UniversalModule,
    FormsModule,
    routing
  ],
  providers: []
})
export class MainModule { }
