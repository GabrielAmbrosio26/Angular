import { Component, Input ,OnInit } from '@angular/core';
import { Meta } from '../../core/models/meta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [],
  templateUrl: './metas.html',
  styleUrl: './metas.scss'
})
export class Metas implements OnInit{
  @Input()
  meta! : Meta
  alcanzado!: number
  constructor(private router:Router){}
  ngOnInit(): void {
    this.alcanzado = Number(this.meta.completado) / Number(this.meta.meta) * 100;
  }
  editarMeta(meta: Meta){
    const queryParams = JSON.stringify(meta);
    this.router.navigate(['/editar'], { queryParams: { meta: queryParams } });
  }
}
