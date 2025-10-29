db = db.getSiblingDB('restaurante');

db.createCollection('mesa');
db.mesa.insertMany([
  { _id: 1, pax: 4, estado: 'libre' },
  { _id: 2, pax: 2, estado: 'ocupada' },
  { _id: 3, pax: 6, estado: 'libre' }
]);

db.createCollection('producto');
db.producto.insertMany([
  {
    nombre: 'Pizza Margarita',
    descripcion: 'Pizza con tomate, mozzarella y albahaca',
    precio: 10.5,
    estado: 'disponible'
  },
  {
    nombre: 'Coca Cola',
    descripcion: 'Bebida gaseosa 500ml',
    precio: 2.5,
    estado: 'disponible'
  },
  {
    nombre: 'Ensalada César',
    descripcion: 'Lechuga, pollo, parmesano y aderezo césar',
    precio: 8.0,
    estado: 'disponible'
  },
  {
    nombre: 'Hamburguesa Clásica',
    descripcion: 'Con queso, tomate y lechuga',
    precio: 9.0,
    estado: 'disponible'
  }
]);

db.createCollection('menu');
db.menu.insertMany([
  {
    nombre: 'Menú del Día',
    productos: ['Pizza Margarita', 'Coca Cola'],
    precio: 12.5,
    estado: 'disponible'
  },
  {
    nombre: 'Menú Saludable',
    productos: ['Ensalada César', 'Coca Cola'],
    precio: 10.0,
    estado: 'disponible'
  },
  {
    nombre: 'Menú Clásico',
    productos: ['Hamburguesa Clásica', 'Coca Cola'],
    precio: 11.5,
    estado: 'disponible'
  }
]);

db.createCollection('usuario');
db.usuario.insertMany([
  { nombre: 'Admin', rol: 'Administrador' },
  { nombre: 'Carlos', rol: 'Mesero' },
  { nombre: 'Lucía', rol: 'Cajera' }
]);

db.createCollection('pedido');
db.pedido.insertMany([
  {
    mesa: 2,
    fecha: new Date(),
    productos: ['Pizza Margarita', 'Coca Cola'],
    usuario: 'Carlos'
  },
  {
    mesa: 1,
    fecha: new Date(),
    productos: ['Hamburguesa Clásica', 'Coca Cola'],
    usuario: 'Carlos'
  },
  {
    mesa: 3,
    fecha: new Date(),
    productos: ['Ensalada César'],
    usuario: 'Carlos'
  }
]);

db.createCollection('cuenta');
db.cuenta.insertMany([
  {
    fecha: new Date(),
    estado: 'abierta',
    pedidos: [1],
    usuario: 'Lucía'
  },
  {
    fecha: new Date(),
    estado: 'cerrada',
    pedidos: [2],
    usuario: 'Lucía'
  },
  {
    fecha: new Date(),
    estado: 'abierta',
    pedidos: [3],
    usuario: 'Lucía'
  }
]);
