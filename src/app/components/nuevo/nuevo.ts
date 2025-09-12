import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Meta } from '../../core/models/meta';
import { MetasService } from '../../service/metas.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nuevo',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './nuevo.html',
    styleUrls: ['./nuevo.scss']
})
export class Nuevo implements OnChanges{
    @Input()
    metasIng? : Meta
    metaEnviar!: Meta;

    metasService = inject(MetasService)
    formularioDeMetas = new FormGroup({
        id: new FormControl(''),
        detalles: new FormControl(''),
        periodo: new FormControl(''),
        eventos: new FormControl(''),
        icono: new FormControl(''),
        meta: new FormControl(''),
        plazo: new FormControl(''),
        completado: new FormControl('')
    });
    frecuencias = ["día", "semana", "mes", "año"];
    iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];


    constructor(private servicioCursos: MetasService, private router: Router) { }
    ngOnChanges(changes: SimpleChanges): void {
        if (this.metasIng) {
            this.formularioDeMetas.setValue({
                id: this.metasIng.id,
                detalles: this.metasIng.detalles,
                periodo: this.metasIng.periodo,
                eventos: this.metasIng.eventos,
                icono: this.metasIng.icono,
                meta: this.metasIng.meta,
                plazo: this.metasIng.plazo,
                completado: this.metasIng.completado,
            });
        }
    }
    llenarMetaAEnviar(): Meta {
        this.metaEnviar = {
            "id": this.metasIng ? this.metasIng!.id : Math.random().toString(),
            "detalles": this.formularioDeMetas.value.detalles!,
            "periodo": this.formularioDeMetas.value.periodo!,
            "eventos": this.formularioDeMetas.value.eventos!,
            "icono": this.formularioDeMetas.value.icono!,
            "meta": this.formularioDeMetas.value.meta!,
            "plazo": this.formularioDeMetas.value.plazo!,
            "completado": this.formularioDeMetas.value.completado!
        };
        return this.metaEnviar;
    }

    subirFormulario() {
      this.llenarMetaAEnviar()
      this.metasService.crearMetas(this.metaEnviar);
      this.router.navigate(['./'])
    }

    crearMeta() {
        this.servicioCursos.crearMetas(this.llenarMetaAEnviar());
        console.log(this.metaEnviar);
        this.router.navigate(['/lista']);
    }

    actualizarMeta() {
      if (!this.metasIng) return;
      const metaActualizada = this.llenarMetaAEnviar();
      this.servicioCursos.actualizarMetas(metaActualizada); // solo pasamos el objeto
      this.router.navigate(['/']);
    }

    eliminarMeta() {
      if (!this.metasIng) return;
      this.servicioCursos.eliminarMetas(this.llenarMetaAEnviar()); // solo pasamos el objeto
      this.router.navigate(['/']);
    }
 }
