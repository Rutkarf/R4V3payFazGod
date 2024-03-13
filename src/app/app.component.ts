import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition,
  state,
} from '@angular/animations';
import { AppService } from './services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
          ]),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate(
              '0.5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            ),
          ]),
        ]),
      ]),
    ]),
    
  ],
})
export class AppComponent {
  message = '';
  name = '';

  constructor(private appService: AppService) {}

  getState(outlet: any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }

}
