import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { UsersComponent } from './admin/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, UsersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoomBookingClient';
}
