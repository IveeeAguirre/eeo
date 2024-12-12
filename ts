import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'cynthia'
  // @ts-ignore
  edad = 18
  peso = 44
  vivio = true
  AumentarAños = "18"

  CambiarNombre() {
    this.title = "iveth"
  }

  aumentaredad() {
    if (this.edad < 105) {
      this.edad += 1

    }
  }

  reduciredad() {
    if (this.edad > 0) {
      this.edad -= 1
    }
  }
}
