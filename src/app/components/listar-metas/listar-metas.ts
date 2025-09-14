import { Component, inject, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Metas } from '../../design/metas/metas';
import { Meta } from '../../core/models/meta';
import { MetasService } from '../../service/metas.service';

@Component({
  selector: 'app-listar-metas',
  standalone: true,
  imports: [Metas],
  templateUrl: './listar-metas.html',
  styleUrls: ['./listar-metas.scss'],
  // animations: [
  //   trigger('animarLista', [
  //     state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
  //     transition(':enter', [
  //       animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //     ])
  //   ])
  // ]
})
export class ListarMetas implements OnInit {

  metasService = inject(MetasService);
  listaDeMetas: Meta[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cargarMetas();
  }

  async cargarMetas() {
    this.listaDeMetas = await this.metasService.listarMetas();
  }
}
