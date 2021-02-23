import {Injectable} from '@angular/core';
import {IPropriete} from "./propriete.interface";
import {BehaviorSubject} from "rxjs";
import {IUser} from "../auth/user.interface";
import {UserService} from "../auth/user.service";

@Injectable({
  providedIn: 'root'
})
export class ProprieteService {


  allProprietes(): IPropriete[] {
    return this.proprietes$.getValue()
  }

  getProprietesbyUser(ownerId): IPropriete[] {
    return this.proprietes$.getValue().filter(value => value.ownerId === ownerId)
  }

  getPropriete(id): IPropriete {
    return this.proprietes$.getValue()[0]
  }

  addPropriete(propriete) {
    this.proprietes$.next([...this.proprietes$.getValue(), propriete])
  }

  sell(propriete: IPropriete) {
    let index = this.proprietes$.getValue().findIndex(value => value === propriete)
    let tab = this.proprietes$.getValue()
    tab.splice(index, 1)
    this.UserService.addMoney(propriete.price)
    this.proprietes$.next(tab)
  }

  private proprietes: IPropriete[] = [{
    ownerId: 1,
    adresse: "30 boulevard d'arcole",
    price: 3000000,
    postalCode: "31000",
    title: "Appartement de ville"
  }, {
    ownerId: 2,
    adresse: "20 du boucher",
    price: 20000,
    postalCode: "31000",
    title: "Appartement de ville"
  }, {
    ownerId: 3,
    adresse: "40 boulevard dupuis",
    price: 15800,
    postalCode: "31000",
    title: "Appartement de ville"
  }]

  public proprietes$: BehaviorSubject<IPropriete[]> = new BehaviorSubject(this.proprietes);

  constructor(private UserService: UserService) {
  }
}
