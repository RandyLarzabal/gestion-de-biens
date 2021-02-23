import {Component, Input, OnInit} from '@angular/core';
import {IPropriete} from "../propriete-list/propriete.interface";
import {ProprieteService} from "../propriete-list/propriete.service"

@Component({
  selector: 'app-propriete',
  templateUrl: './propriete.component.html',
  styleUrls: ['./propriete.component.scss']
})
export class ProprieteComponent implements OnInit {

  constructor(private ProprieteService: ProprieteService) {
  }

  @Input() propriete: IPropriete

  sell() {
    this.ProprieteService.sell(this.propriete)
  }

  ngOnInit()
    :
    void {
  }

}
