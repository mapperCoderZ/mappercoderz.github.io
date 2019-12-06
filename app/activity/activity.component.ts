import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  //moduleId: module.id,
  selector: 'cm-orders',
  templateUrl: 'activity.component.html'
})
export class ActivityComponent implements OnInit {
  
    //displayMode: ActivityDisplayModeEnum;
    //displayModeEnum = ActivityDisplayModeEnum;
  
    constructor(private router: Router) { }

    ngOnInit() {

      //No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = ActivityDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = ActivityDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = ActivityDisplayModeEnum.Edit;
      //     break;
      // }
    }

}

// enum ActivityDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
