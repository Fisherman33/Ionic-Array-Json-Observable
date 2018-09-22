import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//  import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/observable';

import { Observable } from 'rxjs/Observable';
  import { map, catchError } from 'rxjs/operators';


@Injectable()
export class DataServiceProvider {
public dataM: any;
public dataTime: any;
private apiurl =  "././../assets/data/listTime.json";

  constructor(private Http: HttpClient) {

    console.log('Hello DataServiceProvider Provider');
  }

  public getDataT(): Observable<any[]> {
     return  this.Http.get(this.apiurl).pipe(map(this.extractDataT),
    catchError(this.handleError));

  }
  
  private extractDataT(res: Response) {
    let body = res;
    return body || {};
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
