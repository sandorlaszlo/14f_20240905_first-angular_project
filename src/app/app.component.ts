import { Component } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './app.component.html',
  // template : `<p>Inline template</p>
  //             <p>Második sor</p>`,
  styleUrl: './app.component.css'
  // styles : `p {color: green;
  //              font-weight: bold}`
})
export class AppComponent {
}
