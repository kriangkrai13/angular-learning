import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatMenuModule,MatToolbarModule, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
