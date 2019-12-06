import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IActivity } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  //moduleId: module.id,
  selector: 'cm-activity-details',
  templateUrl: 'activity-details.component.html',
  styleUrls: [ 'activity-details.component.css' ]
})
export class ActivityDetailsComponent implements OnInit {

  activity: IActivity;
  mapEnabled: boolean;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.subscribe((params: Params) => {
        let id = +params['id'];
        this.dataService.getActivity(id)
            .subscribe((activity: IActivity) => {
              this.activity = activity;
              this.mapEnabled = true;
            });
      });
  }


}