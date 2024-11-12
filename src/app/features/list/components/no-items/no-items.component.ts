import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';

@Component({
  selector: 'app-no-items',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-items.component.html',
  styleUrl: './no-items.component.scss'
})
export class NoItemsComponent {

}