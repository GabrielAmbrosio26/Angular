import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezamiento } from '../../layout/encabezamiento/encabezamiento';
import { Principal } from '../../layout/principal/principal';
import { Pie } from '../../layout/pie/pie';

@Component({
  selector: 'app-root',
  imports: [Encabezamiento, Principal, Pie],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'app-metas';
}
