import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  addedServerName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  onAddNewServer() {
    return this.serverName = 'New Server Name';
  }
  /*
  onUpdateServer(event: any) {
    this.addedServerName = event.target.value;
  }
  */
  onUpdateServer(event: Event) {
    this.addedServerName = (event.target as HTMLInputElement).value;
  }
}
