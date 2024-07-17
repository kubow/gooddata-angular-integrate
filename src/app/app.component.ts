import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [
           CUSTOM_ELEMENTS_SCHEMA,
         ]
})
export class AppComponent {
  title = 'gooddata-angular';
  dashboardId = '092929af-375a-4e9c-964f-2add8cdbd259';
}
