import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent], // Combinez les imports correctement
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ajoutez le 's' à styleUrls
})
export class AppComponent {
  title = 'angular pack';
}
