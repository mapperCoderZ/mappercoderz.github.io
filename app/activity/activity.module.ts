import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
  imports:      [ ActivityRoutingModule, SharedModule ],
  declarations: [ ActivityRoutingModule.components ]
})
export class ActivityModule { }