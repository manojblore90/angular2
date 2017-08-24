import {Component} from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  Tabs = {};
  isActive:boolean = false;

  // isActive:boolean = false;

  constructor() {
    this.Tabs = [
      {
        name: "BLOCK 1", color: "#F67381"
      },
      {
        name: "BLOCK 2", color: "#C16C85"
      },
      {
        name: "BLOCK 3", color: "#6D5B7B"
      },
      {
        name: "BLOCK 4", color: "#365D7E"
      }
    ];
  }

  toggle(item) {
    item.isActive = !item.isActive;
    // console.log(item);
  }


  //ToggleClass function functionality
  // toggleClass(item){
  //   this[item].isActive = !this[item].isActive;
  //   console.log(this[item]);
  // }
}
