import {Component, OnInit} from '@angular/core';
import {IUser} from '../auth/user.interface';
import {UserService} from "../auth/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private UserService: UserService) {
  }

  currentUser: IUser
  private subscription: Subscription;

  logout(): void {
    console.log(this.currentUser);
    this.UserService.logout(this.currentUser)
  }

  ngOnInit(): void {
    this.subscription = this.UserService.user$.subscribe(() => {
      this.currentUser = this.UserService.user$.getValue()
    })
  }

}
