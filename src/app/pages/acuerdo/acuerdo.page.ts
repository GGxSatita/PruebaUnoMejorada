import { Component, OnInit } from '@angular/core';
import { AcuerdoService } from "./../../services/acuerdo.service";

@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.page.html',
  styleUrls: ['./acuerdo.page.scss'],
})
export class AcuerdoPage implements OnInit {

  constructor(
    public acuerdo : AcuerdoService
  ) {}

  ngOnInit() {
  }


}
