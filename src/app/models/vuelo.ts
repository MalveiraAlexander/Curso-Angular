export class Vuelo {
  id: string;
  code: string;
  origen: string;
  destino: string;
  fecha: Date;
  acientos: number;
}

export class Client {
  id: number;
  name: string;
  vuelos: Vuelo[];
}
