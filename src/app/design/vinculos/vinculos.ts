import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vinculos',
  standalone: true,
  imports: [],
  templateUrl: './vinculos.html',
  styleUrls: ['./vinculos.scss']
})
export class Vinculos {
  @Input()
  href: string = '';

  @Input()
  src: string = '';

  @Input()
  alt: string = 'descripcion del icono';

  @Input()
  texto: string = 'texto no ingresado';
}

