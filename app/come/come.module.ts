import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { ComeRoutingModule } from './come-routing.module';

@NgModule({
  imports:      [ SharedModule, ComeRoutingModule ],
  declarations: [ ComeRoutingModule.components ]
})
export class ComeModule { }