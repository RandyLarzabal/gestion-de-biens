import {Component, OnInit} from '@angular/core';
import {IPropriete} from "./propriete.interface";
import {Subscription} from "rxjs";
import {ProprieteService} from "./propriete.service";
import {UserService} from "../auth/user.service";
import {IUser} from '../auth/user.interface';

@Component({
  selector: 'app-propriete-list',
  templateUrl: './propriete-list.component.html',
  styleUrls: ['./propriete-list.component.scss']
})
export class ProprieteListComponent implements OnInit {

  constructor(private ProprieteService: ProprieteService, private UserService: UserService) {
  }

  private subscriptionPropriete: Subscription;
  private subscriptionUser: Subscription;
  proprietes: IPropriete[]
  currentUser: IUser


  proprieteForm: IPropriete = {adresse: "", ownerId: 0, postalCode: "", price: 0, title: ""}

  addPropriete() {
    console.log(this.proprieteForm)
    this.ProprieteService.addPropriete(this.proprieteForm)
    this.proprieteForm = {adresse: "", ownerId: this.currentUser.id, postalCode: "", price: 0, title: ""}
  }

  ngOnInit(): void {
    this.subscriptionUser = this.UserService.user$.subscribe(() => {
      this.currentUser = this.UserService.user$.getValue()
      this.proprieteForm.ownerId = this.currentUser?.id || 0
    })
    this.subscriptionPropriete = this.ProprieteService.proprietes$.subscribe(() => {
      this.proprietes = this.ProprieteService.getProprietesbyUser(this.currentUser.id)
    })

  }

}
