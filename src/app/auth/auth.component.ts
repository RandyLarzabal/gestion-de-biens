import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private UserService: UserService) {
  }

  currentUsername;
  currentPassword;

  ngOnInit(): void {
  }

  login(): void {
    this.UserService.login(this.currentUsername, this.currentPassword)
  }

}
