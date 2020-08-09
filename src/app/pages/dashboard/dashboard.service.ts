import { Injectable } from '@angular/core';
import {CommonHttpService} from '../../@common/common-http.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(public commonHttpService: CommonHttpService) { }

  getAllPersons() {
    return this.commonHttpService.getAll('/persons').pipe(
      map(data => {
        return data;
      }));
  }
}
