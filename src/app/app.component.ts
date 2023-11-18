import { Component } from '@angular/core';
import { faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invision-app';
  faPlus = faPlus;
  down = faChevronDown;
  up = faChevronUp;
  collapse = false;

  onCollpse() {
    this.collapse = !this.collapse;
  }
}
