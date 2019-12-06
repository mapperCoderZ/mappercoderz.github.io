import { Injectable } from '@angular/core';

import { IActivity, IOrder } from '../../shared/interfaces';

@Injectable()
export class TrackByService {
  
  activity(index:number, activity: IActivity) {
    return activity.id;
  }

  order(index:number, order: IOrder) {
    return index;
  }


  
}