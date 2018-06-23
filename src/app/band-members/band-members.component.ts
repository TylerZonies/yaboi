import { Component, OnInit } from '@angular/core';

import { BandMember } from '../bandMember';

@Component({
  selector: 'app-band-members',
  templateUrl: './band-members.component.html',
  styleUrls: ['./band-members.component.css']
})
export class BandMembersComponent implements OnInit {

  bandMember:BandMember = {
    id:1,
    name: 'Jmilly'
  };

  constructor() { }

  ngOnInit() {

  }

}
