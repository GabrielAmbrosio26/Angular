import { Component, inject, OnInit } from '@angular/core';
import { Metas } from '../../design/metas/metas';
import { Meta } from '../../core/models/meta';
import { MetasService } from '../../service/metas.service';

@Component({
  selector: 'app-listar-metas',
  standalone: true,
  imports: [Metas],
  templateUrl: './listar-metas.html',
  styleUrls: ['./listar-metas.scss']
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
