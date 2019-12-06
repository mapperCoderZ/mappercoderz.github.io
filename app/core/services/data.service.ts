import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import {IActivity, IOrder, IPagedResults} from '../../shared/interfaces';

@Injectable()
export class DataService {
  
    activitiesBaseUrl: string = '/api/activities';
    ordersBaseUrl: string = '/api/orders';
    orders: IOrder[];

    constructor(private http: Http) { }
    
    getActivities() : Observable<IActivity[]> {
        return this.http.get(this.activitiesBaseUrl)
                    .map((res: Response) => {
                        let activities = res.json();
                        this.calculateActivitiesOrderTotal(activities);
                        return activities;
                    })
                    .catch(this.handleError);
    }

    getActivitiesPage(page: number, pageSize: number) : Observable<IPagedResults<IActivity[]>> {
        return this.http.get(`${this.activitiesBaseUrl}/page/${page}/${pageSize}`)
                   .map((res: Response) => {
                       const totalRecords = +res.headers.get('X-InlineCount');
                       let activities = res.json();
                       this.calculateActivitiesOrderTotal(activities);
                       return {
                           results: activities,
                           totalRecords: totalRecords
                       };
                   })
                   .catch(this.handleError);
    }
    
    getActivity(id: number) : Observable<IActivity> {
        return this.http.get(this.activitiesBaseUrl + '/' + id)
                   .map((res: Response) => {
                       let activity = res.json();
                       this.calculateActivitiesOrderTotal([activity]);
                       return activity;
                   })
                   .catch(this.handleError);
    }

    insertActivity(activity: IActivity) : Observable<IActivity> {
        return this.http.post(this.activitiesBaseUrl, activity)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }
    
    updateActivity(activity: IActivity) : Observable<boolean> {
        return this.http.put(this.activitiesBaseUrl + '/' + activity.id, activity)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);  
    }

    deleteActivity(id: number) : Observable<boolean> {
        return this.http.delete(this.activitiesBaseUrl + '/' + id)
                   .map((res: Response) => res.json().status)
                   .catch(this.handleError);
    }

    
    handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    //Not using now but leaving since they show how to create
    //and work with custom observables
       
    createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    calculateActivitiesOrderTotal(activities: IActivity[]) {
        for (let activity of activities) {
            if (activity && activity.orders) {
                let total = 0;
                for (let order of activity.orders) {
                    total += order.itemCost;
                }
                activity.orderTotal = total;
            }
        }
    }

}
