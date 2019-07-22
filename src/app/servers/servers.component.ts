import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  addedServerName = '';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  onAddNewServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServer(event: Event) {
    this.addedServerName = (event.target as HTMLInputElement).value;
  }
}
