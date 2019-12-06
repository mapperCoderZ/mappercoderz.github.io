import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { ActivitiesRoutingModule } from './activities-routing.module';

@NgModule({
  imports:      [ ActivitiesRoutingModule, SharedModule ],
  declarations: [ ActivitiesRoutingModule.components ]
})
export class ActivitiesModule { }
