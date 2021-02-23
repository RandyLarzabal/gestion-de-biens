import {Component, OnInit} from '@angular/core';
import {IUser} from '../auth/user.interface';
import {UserService} from "../auth/user.service";
import {Subscription} from "rxjs";
import {ProprieteService} from "../propriete-list/propriete.service"
import {IPropriete} from "../propriete-list/propriete.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private UserService: UserService) {
  }

  private subscriptionUser: Subscription;
  currentUser: IUser | undefined

  ngOnInit(): void {
    this.subscriptionUser = this.UserService.user$.subscribe(() => {
      this.currentUser = this.UserService.user$.getValue()
    })
  }

}
