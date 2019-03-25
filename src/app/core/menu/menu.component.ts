import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: any[] = [{
          text: 'Item1',
          items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
      }, {
          text: 'Item2',
          items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
      }, {
          text: 'Item3'
      }];
  constructor() { }

  ngOnInit() {
  }

}
