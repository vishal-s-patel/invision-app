import { Component } from '@angular/core';
import { faChevronLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faChevronLeft = faChevronLeft;
  faEllipsisVertical = faEllipsisVertical;
}
