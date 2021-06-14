import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: any = [
    { type: 'server', name: 'TestServer1', content: 'just a s' },
  ];
  odd: number[] = [];
  even: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onTick(n: number) {
    console.log('number' + n);
    if (n % 2 === 0) {
      this.even.push(n);
    } else {
      this.odd.push(n);
    }
  }
}
