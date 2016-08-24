import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <p>
      Native data with Elvis operator: {{ data?.value }}<br/>
      Raw data from JSON : <span [innerHTML]="data | json"></span>
    </p>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: MessageService) {}

  ngOnInit() {
    this.service.getData().subscribe(
      (x: any) => { console.log(x); this.data = x; });
  }
  title = 'app works!';
  data: any;
}
