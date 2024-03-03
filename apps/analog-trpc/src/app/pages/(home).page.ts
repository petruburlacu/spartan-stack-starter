import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-trpc-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <analog-trpc-analog-welcome /> `,
})
export default class HomeComponent {}
