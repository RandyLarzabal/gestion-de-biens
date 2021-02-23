import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {IUser} from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {
      "name": "Larzabal",
      "first_name": "Randy",
      "login": "Randy1",
      "password": "AzertyV8",
      "age": 21,
      "id": 1,
      "money": 25000,
    },
    {
      "name": "Lator",
      "first_name": "Steven",
      "login": "Steven1",
      "password": "AzertyV8",
      "age": 50,
      "id": 2,
      "money": 1000,
    },
    {
      "name": "Faure",
      "first_name": "Thomas",
      "login": "Thomas1",
      "password": "AzertyV8",
      "age": 18,
      "id": 3,
      "money": 3000,
    }
  ]

  private userLoggedIn: IUser | undefined = undefined

  public user$: BehaviorSubject<IUser | undefined> = new BehaviorSubject(this.userLoggedIn);

  logout(user: IUser): void {
    this.userLoggedIn = undefined
    this.user$.next(undefined)
  }

  login(username: string, password: string): void {
    let index = this.users.findIndex(value => value.login === username && value.password === password)
    this.userLoggedIn = this.users[index]
    this.user$.next(this.users[index])
    console.log(this.user$.getValue())
  }

  addMoney(value: number): void {

    let newMoney = this.user$.getValue().money + value
    this.user$.next({...this.user$.getValue(), money: newMoney})
  }

  constructor() {
  }
}
