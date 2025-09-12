import { Routes } from '@angular/router';
import { ListarMetas } from '../../components/listar-metas/listar-metas';
import { Nuevo } from '../../components/nuevo/nuevo';
import { Modal } from '../../components/modal/modal';

export const routes: Routes = [
  {
    path: '',
    component: ListarMetas
  },
  {
    path: 'crear',
    component: Nuevo
  },
  {
    path: 'editar',
    component: Modal
  },
];
