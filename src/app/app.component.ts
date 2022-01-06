import { Component, Input } from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('slide', [
      state('left', style({transform: 'translateX(0)'})),
      state('right', style({transform: 'translateX(-50%'})),
      transition('* => *', animate(300))
    ])
  ]
})
export class AppComponent  {

  public activePane: PaneType = 'left';
  public isLeftVisible = true;

  name = 'Angular';
}

type PaneType = 'left' | 'right';