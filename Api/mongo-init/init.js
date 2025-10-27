db = db.getSiblingDB('restaurante');

db.createCollection('mesa');
db.mesa.insertOne({
  capacidad: 4,
  estado: 'disponible'
});

db.createCollection('producto');
db.producto.insertOne({
  nombre: 'Pizza Margarita',
  descripcion: 'Pizza con tomate, mozzarella y albahaca',
  precio: 10.5,
  categoria: 'Comida',
  disponibilidad: true
});

db.createCollection('menu');
db.menu.insertOne({
  nombre: 'Menú del Día',
  productos: ['Pizza Margarita'],
  precio: 12.5,
  disponibilidad: true
});

db.createCollection('cuenta');
db.cuenta.insertOne({
  titular: 'Cliente 1',
  mesa: 1,
  productos: ['Pizza Margarita'],
  pagada: false,
  total: 10.5
});

db.createCollection('usuario');
db.usuario.insertOne({
  nombre: 'Admin',
  rol: 'Administrador'
});

