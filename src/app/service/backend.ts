// import { Injectable } from '@angular/core';
// import { Meta } from '../core/models/meta';

// @Injectable({
//     providedIn: 'root'
// })

// export class Backend {

//     private readonly archivoLocalMetas = 'assets/data/metas.json';
//     private readonly archivoLocalMeta = 'assets/data/meta.json';

//     constructor() { }

//     async leerMetas(): Promise<Meta[]> {
//         // const response = await fetch("/api/metas");
//         const response = await fetch(this.archivoLocalMetas);
//         const metas: Meta[] = await response.json();
//         return metas;
//     }
//     async pedirMeta(id: number): Promise<Meta> {
//         const response = await fetch(this.archivoLocalMeta);
//         // const response = await fetch(`/api/metas/${id}`);
//         const meta: Meta = await response.json();
//         return meta;
//     }
//     async crearMeta(meta: Meta): Promise<Meta> {
//         const response = await fetch(this.archivoLocalMeta);
//         // const response = await fetch("/api/metas", {
//         //     method: "POST",
//         //     body: JSON.stringify(meta),
//         //     headers: {
//         //         "content-type": "application/json; charset=UTF-8",
//         //     },
//         // });
//         const metaCreada: Meta = await response.json();
//         console.log("Meta creada!", metaCreada);
//         return metaCreada;
//     }

//     async actualizarMeta(meta: Meta): Promise<Meta> {
//         const response = await fetch(this.archivoLocalMeta);
//         // const response = await fetch(`/api/metas/${meta.id}`, {
//         //     method: "PUT",
//         //     body: JSON.stringify(meta),
//         //     headers: {
//         //         "content-type": "application/json; charset=UTF-8",
//         //     },
//         // });
//         const metaActualizada: Meta = await response.json();
//         console.log("Meta actualizada!", metaActualizada);
//         return metaActualizada;
//     }


//     async borrarMeta(id: number): Promise<Meta> {
//         // const response = await fetch('/meta.json');
//         const response = await fetch(this.archivoLocalMeta);
//         // await fetch(`/api/metas/${id}`, {
//         //     method: "DELETE",
//         // });
//         console.log("Meta borrada!", id);
//         const metaBorrada: Meta = await response.json();
//         return metaBorrada;
//     }


// }


import { Injectable } from '@angular/core';
import { Meta } from '../core/models/meta';

@Injectable({
  providedIn: 'root'
})
export class Backend {

  private readonly archivoLocalMetas = 'assets/data/metas.json';
  private readonly archivoLocalMeta = 'assets/data/meta.json';

  constructor() { }

  async leerMetas(): Promise<Meta[]> {
    const response = await fetch(this.archivoLocalMetas);
    const metas: Meta[] = await response.json();
    return metas;
  }

  async pedirMeta(id: string): Promise<Meta> {
    const response = await fetch(this.archivoLocalMeta);
    const meta: Meta = await response.json();
    return meta;
  }

  async crearMeta(meta: Meta): Promise<Meta> {
    console.log("Meta creada!", meta);
    return meta; // simulamos creación
  }

  async actualizarMeta(meta: Meta): Promise<Meta> {
    console.log("Meta actualizada!", meta);
    return meta; // simulamos actualización
  }

  async borrarMeta(id: string): Promise<string> {
    console.log("Meta borrada!", id);
    return id; // simulamos borrado
  }
}
