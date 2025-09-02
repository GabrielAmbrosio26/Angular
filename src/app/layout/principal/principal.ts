import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vinculos } from "../../design/vinculos/vinculos";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, Vinculos],
  templateUrl: './principal.html',
  styleUrls: ['./principal.scss']
})
export class Principal {

}
