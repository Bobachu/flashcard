import { Component, OnInit } from '@angular/core';

import { CreateData } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // add link to create.service
  constructor(private cardService: CreateData) { }

  ngOnInit() {
  }

  createCard() {

  }

  clearCard() {

  }

}
