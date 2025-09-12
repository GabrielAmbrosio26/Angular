import { Component } from '@angular/core';
import { Nuevo } from '../nuevo/nuevo';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '../../core/models/meta';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [Nuevo],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class Modal {
  metas:Meta;
  constructor(private activeRouter:ActivatedRoute){
    const queryParams = this.activeRouter.snapshot.queryParams;
    this.metas = JSON.parse(queryParams['meta']) as Meta
  }
}
