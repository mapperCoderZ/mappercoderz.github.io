import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComeComponent } from './come.component';

const routes: Routes = [
  { path: '', component: ComeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ComeRoutingModule {
  static components = [ ComeComponent ];
}