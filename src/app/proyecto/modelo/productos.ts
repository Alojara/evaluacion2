export interface Producto {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  stock: number;
  calificacion: number;
}

export interface ProductoConID extends Producto {
  id: number;
}

export interface ProductoParcial extends Partial<Producto>{}
