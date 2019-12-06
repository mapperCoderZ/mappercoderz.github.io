import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IActivity, IPagedResults } from '../shared/interfaces';
import { FilterService } from '../core/services/filter.service';

@Component({ 
  //moduleId: module.id,
  selector: 'cm-activities',
  templateUrl: 'activities.component.html'
})
export class ActivitiesComponent implements OnInit {

  title: string;
  filterText: string;
  activities: IActivity[] = [];
  filteredActivities: IActivity[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private dataService: DataService, private filterService: FilterService) { }
  
  ngOnInit() {
    this.title = 'Activities';
    this.filterText = 'Filter Activities:';
    this.displayMode = DisplayModeEnum.Card;

    this.getActivitiesPage(1);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getActivitiesPage(page);
  }

  getActivitiesPage(page: number) {
    this.dataService.getActivitiesPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<IActivity[]>) => {
          this.activities = this.filteredActivities = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getActivitiesPage() retrieved activities for page: ' + page));
  }

  filterChanged(data: string) {
    if (data && this.activities) {
        data = data.toUpperCase();
        const props = ['name', 'description', 'date', 'address','organizerName'];
        this.filteredActivities = this.filterService.filter<IActivity>(this.activities, data, props);
    }
    else {
      this.filteredActivities = this.activities;
    }
  }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
