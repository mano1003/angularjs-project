import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
})
export class UserNameComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }
  resetUserName() {
    this.username = '';
  }
}
