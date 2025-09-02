import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMetas } from './listar-metas';

describe('ListarMetas', () => {
  let component: ListarMetas;
  let fixture: ComponentFixture<ListarMetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
