export class Plant {
  id: string;
  nombre_comun: string;
  tipo: string;
  clima: string;

  public constructor(
    id: string,
    nombre_comun: string,
    tipo: string,
    clima: string
  ) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.tipo = tipo;
    this.clima = clima;
  }
}
