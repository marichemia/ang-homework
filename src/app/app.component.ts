import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-success-alert></app-success-alert>
  <app-warning-alert></app-warning-alert>
  <app-fail-alert></app-fail-alert>
  <app-button></app-button>
  <app-animation></app-animation>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-homework';
}
