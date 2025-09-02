import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encabezamiento } from './encabezamiento';

describe('Encabezamiento', () => {
  let component: Encabezamiento;
  let fixture: ComponentFixture<Encabezamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encabezamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encabezamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
