import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test1Component} from "./components/test1.component";
import {Test2Component} from "./components/test2.component";

export const APP_ROUTES: Routes = [].concat(
  [
    { path: '', component: Test1Component },
    { path: 'test', component: Test2Component }
  ]
);

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
