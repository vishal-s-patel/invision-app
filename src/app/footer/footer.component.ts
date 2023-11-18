import { Component } from '@angular/core';
import { faBox, faDollarSign, faEllipsis, faFile, faSignature, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faBox = faBox;
  faSignature = faFile;
  faUsers = faUsers;
  fadollarSign = faDollarSign;
  faEllipsis = faEllipsis;
  activeIndex = 2;

  onClick(index: number): void {
    this.activeIndex = index;
  }
}
