import { Component, OnInit } from '@angular/core';

import { BandMember } from '../bandMember';
import { MEMBERS } from '../mock-band';

@Component({
  selector: 'app-band-members',
  templateUrl: './band-members.component.html',
  styleUrls: ['./band-members.component.css']
})
export class BandMembersComponent implements OnInit {

  bandMembers = MEMBERS

  

  bandMember:BandMember = {
    id:1,
    name: 'Jmilly'
  }

  selectedMember: BandMember

  onSelect(bandMember:BandMember):void{
    this.selectedMember = bandMember
  }

  constructor() { }

  ngOnInit() {

  }

}
