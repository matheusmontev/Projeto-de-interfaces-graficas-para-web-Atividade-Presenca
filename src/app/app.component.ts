import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador: number = 0;

  incrementar(): void {
    this.contador++;
  }

  decrementar(): void {
    this.contador--;
  }
}
