import { TestBed } from '@angular/core/testing';
import { MetasService } from './metas.service';
import { Backend } from './backend';
import { Meta } from '../core/models/meta';

// ng test --include src/app/service/metas.service.spec.ts

describe('MetasService', () => {
  let service: MetasService;
  let backendSpy: jasmine.SpyObj<Backend>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Backend', ['leerMetas', 'crearMeta', 'actualizarMeta', 'borrarMeta']);

    TestBed.configureTestingModule({
      providers: [
        MetasService,
        { provide: Backend, useValue: spy }
      ]
    });

    service = TestBed.inject(MetasService);
    backendSpy = TestBed.inject(Backend) as jasmine.SpyObj<Backend>;

    // Configurar spies
    backendSpy.leerMetas.and.returnValue(Promise.resolve(service.metasMock));
    backendSpy.crearMeta.and.callFake((meta: Meta) => Promise.resolve(meta));
    backendSpy.actualizarMeta.and.callFake((meta: Meta) => Promise.resolve(meta));
    backendSpy.borrarMeta.and.returnValue(Promise.resolve('1'));

    // Inicializar metasEstado para los tests
    service.metasEstado = [...service.metasMock];
  });

  it('debería listar metas', async () => {
    const metas = await service.listarMetas();
    expect(metas.length).toBe(3);
  });

  it('debería crear una meta', async () => {
    const nuevaMeta: Meta = {
      id: '4',
      detalles: 'Nueva meta',
      periodo: 'día',
      eventos: '1',
      icono: '🔥',
      meta: '10',
      plazo: '2030-01-01',
      completado: '0'
    };

    await service.crearMetas(nuevaMeta);
    expect(service.metasEstado!.length).toBe(4);
    expect(service.metasEstado!.some(m => m.id === '4')).toBeTrue();
  });

  it('debería actualizar una meta', async () => {
    const metaActualizada: Meta = { ...service.metasEstado![0], detalles: 'Correr 1 hora' };
    await service.actualizarMetas(metaActualizada);
    expect(service.metasEstado![0].detalles).toBe('Correr 1 hora');
  });

  it('debería eliminar una meta', async () => {
    const metaEliminar = service.metasEstado![0];
    await service.eliminarMetas(metaEliminar);
    expect(service.metasEstado!.some(m => m.id === metaEliminar.id)).toBeFalse();
  });
});
