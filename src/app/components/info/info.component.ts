import { Component } from '@angular/core';
import { faArrowLeft, faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  arrowLeft = faArrowLeft;
  rotate = faRotate;
}
