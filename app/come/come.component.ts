import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IActivity, IPagedResults } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

@Component({
    //moduleId: module.id,
    selector: 'cm-activities-orders',
    templateUrl: 'come.component.html'
})
export class ComeComponent implements OnInit {

    activities: IActivity[];
    totalRecords: number = 0;
    pageSize: number = 5;

    constructor(private dataService: DataService, private trackbyService: TrackByService) { }

    ngOnInit() {
        this.getActivitiesPage(1);
    }

    pageChanged(page: number) {
        this.getActivitiesPage(page);
    }

    getActivitiesPage(page: number) {
        this.dataService.getActivitiesPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<IActivity[]>) => {
                this.totalRecords = response.totalRecords;
                this.activities = response.results;
            });
    }
    ngAfterViewInit(){
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "scripts/momondo.js";
        s1.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(s1);



    }

}