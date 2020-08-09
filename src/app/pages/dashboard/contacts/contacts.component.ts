import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  persons = [];
  loading = false;

  ngOnInit(): void {
    this.getPersons();
  }

  constructor(public dashboardService: DashboardService) {
  }

  getPersons() {
    this.loading = true;
    this.dashboardService.getAllPersons().subscribe(response => {
      this.loading = false;
      if (response.statusCode === 200) {
        this.persons = response.data;
      }
    }, error => {
      this.loading = false;
    });
  }
}
