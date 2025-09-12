import { Injectable } from "@angular/core";
import { Meta } from "../core/models/meta";
import { Backend } from "./backend";

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  metasMock: Meta[] = [
    {
      "id": "1",
      "detalles": "Correr por 30 minutos",
      "periodo": "día",
      "eventos": "1",
      "icono": "🏃‍♂️",
      "meta": "365",
      "plazo": "2030-01-01",
      "completado": "5"
    },
    {
      "id": "2",
      "detalles": "Leer libros",
      "periodo": "año",
      "eventos": "6",
      "icono": "📚",
      "meta": "12",
      "plazo": "2030-01-01",
      "completado": "0"
    },
    {
      "id": "3",
      "detalles": "Viajar a parques nacionales",
      "periodo": "mes",
      "eventos": "1",
      "icono": "✈️",
      "meta": "60",
      "plazo": "2030-01-01",
      "completado": "40"
    }
  ];

  metasEstado: Meta[] = [];

  constructor(private servicioBackend: Backend) {
    // 🔹 Primero intento cargar del localStorage
    const datos = localStorage.getItem('metas');
    if (datos) {
      this.metasEstado = JSON.parse(datos);
    } else {
      this.metasEstado = [...this.metasMock]; // uso un clon para no modificar el original
      this.actualizarLocalStorage();
    }
  }

  actualizarLocalStorage() {
    localStorage.setItem('metas', JSON.stringify(this.metasEstado));
  }

  async listarMetas(): Promise<Meta[]> {
    return this.metasEstado;
  }

  async crearMetas(nuevaMeta: Meta) {
    const meta = await this.servicioBackend.crearMeta(nuevaMeta);
    this.metasEstado.push(meta);
    this.actualizarLocalStorage();
  }

  async actualizarMetas(metaActualizada: Meta) {
    const metaEnt = await this.servicioBackend.actualizarMeta(metaActualizada);
    const indice = this.metasEstado.findIndex(m => m.id === metaEnt.id);
    if (indice !== -1) {
      this.metasEstado[indice] = metaEnt;
      this.actualizarLocalStorage();
    }
  }

  async eliminarMetas(meta: Meta) {
    await this.servicioBackend.borrarMeta(meta.id);
    const indice = this.metasEstado.findIndex(m => m.id === meta.id);
    if (indice !== -1) {
      this.metasEstado.splice(indice, 1);
      this.actualizarLocalStorage();
    }
  }
}
