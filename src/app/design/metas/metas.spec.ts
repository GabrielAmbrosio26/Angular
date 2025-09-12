import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Metas } from './metas';

// fdescribe para enfocar solo estas pruebas

fdescribe('pruebas relacionadas a metas', () => {
  let component: Metas;
  let fixture: ComponentFixture<Metas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metas] // ✅ componentes standalone van en imports
    }).compileComponents();

    fixture = TestBed.createComponent(Metas);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería calcular de forma adecuada el % alcanzado', () => {
    // arrange: mockMeta con strings
    const mockMeta = {
      id: "2",
      detalles: "Backend",
      periodo: "año",
      eventos: "6",        // string, solo para mostrar
      icono: "📚",
      meta: "12",          // string
      plazo: "2030-01-01",
      completado: "6"      // string
    };
    const alcanzadoEsperado = 50;

    // act: asignamos meta y luego llamamos ngOnInit()
    component.meta = mockMeta;
    component.ngOnInit(); // convierte strings a número y calcula porcentaje

    // assert: verificamos el porcentaje
    expect(component.alcanzado).toEqual(alcanzadoEsperado);
  });
  it('debería dibujar en pantalla el detalle de la meta ingresada', () => {
  const mockMeta = {
    id: "2",
    detalles: "Backend",
    periodo: "año",
    eventos: "6",
    icono: "📚",
    meta: "12",
    plazo: "2030-01-01",
    completado: "6"
  };

  component.meta = mockMeta;
  component.ngOnInit();
  fixture.detectChanges();

  // buscamos todos los p
  const parrafos = fixture.nativeElement.querySelectorAll('p');
  const parrafoDetalles = parrafos[1]; // el que tiene {{meta.detalles}}
  expect(parrafoDetalles.textContent).toContain(mockMeta.detalles);
});
});
