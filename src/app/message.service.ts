import {Http, RequestOptionsArgs} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class MessageService {

  constructor(private http: Http) {}

  getData(): Observable<any>{
    return this.http.get('/data.json')
               .map((data) => data.json());
  }
}
