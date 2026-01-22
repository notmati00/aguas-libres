import { db } from './src/lib/db.ts'

async function seedDatabase() {
  console.log('🌱 Inicializando base de datos...\n')

  // Crear categorías
  console.log('Creando categorías...')
  const botellonesCategory = await db.category.upsert({
    where: { slug: 'botellones' },
    update: {},
    create: {
      name: 'Botellones',
      slug: 'botellones',
      description: 'Agua purificada en diferentes presentaciones',
    },
  })

  const dispensadoresCategory = await db.category.upsert({
    where: { slug: 'dispensadores' },
    update: {},
    create: {
      name: 'Dispensadores',
      slug: 'dispensadores',
      description: 'Dispensadores para agua purificada',
    },
  })

  const purificadoresCategory = await db.category.upsert({
    where: { slug: 'purificadores' },
    update: {},
    create: {
      name: 'Purificadores',
      slug: 'purificadores',
      description: 'Sistemas de purificación de agua',
    },
  })

  const accesoriosCategory = await db.category.upsert({
    where: { slug: 'accesorios' },
    update: {},
    create: {
      name: 'Accesorios',
      slug: 'accesorios',
      description: 'Accesorios y complementos',
    },
  })

  console.log('✅ Categorías creadas\n')

  // Crear productos
  console.log('Creando productos...')

  const products = [
    {
      name: 'Botellón 20L - Agua Purificada',
      slug: 'botellon-20l',
      description: 'Agua purificada por ósmosis inversa. Bidón de 20 litros reutilizable.',
      price: 850,
      comparePrice: 1000,
      stock: 50,
      image: '/images/botellon-20l.jpg',
      categoryId: botellonesCategory.id,
      featured: true,
      active: true,
    },
    {
      name: 'Dispensador Eléctrico Frío/Caliente',
      slug: 'dispensador-electrico',
      description: 'Dispensador moderno con funciones de agua fría y caliente. Diseño ergonómico.',
      price: 35000,
      comparePrice: 42000,
      stock: 15,
      image: '/images/dispensador-electrico.jpg',
      categoryId: dispensadoresCategory.id,
      featured: true,
      active: true,
    },
    {
      name: 'Dispensador Manual Mesa',
      slug: 'dispensador-manual',
      description: 'Dispensador compacto ideal para mesas de oficina o hogar. No requiere electricidad.',
      price: 12000,
      comparePrice: 15000,
      stock: 30,
      image: '/images/dispensador-manual.jpg',
      categoryId: dispensadoresCategory.id,
      featured: false,
      active: true,
    },
    {
      name: 'Botellón 8L - Agua Purificada',
      slug: 'botellon-8l',
      description: 'Botellón de 8 litros ideal para uso personal o pequeño grupo.',
      price: 450,
      comparePrice: 550,
      stock: 80,
      image: '/images/botellon-8l.jpg',
      categoryId: botellonesCategory.id,
      featured: false,
      active: true,
    },
    {
      name: 'Purificador Ósmosis Inversa',
      slug: 'purificador-osmosis',
      description: 'Sistema de purificación completo con ósmosis inversa para el hogar.',
      price: 85000,
      comparePrice: 100000,
      stock: 8,
      image: '/images/purificador.jpg',
      categoryId: purificadoresCategory.id,
      featured: true,
      active: true,
    },
    {
      name: 'Set Vasos Reutilizables',
      slug: 'set-vasos',
      description: 'Set de 12 vasos de plástico reutilizables ideales para oficina.',
      price: 2500,
      comparePrice: 3000,
      stock: 100,
      image: '/images/vasos.jpg',
      categoryId: accesoriosCategory.id,
      featured: false,
      active: true,
    },
    {
      name: 'Filtro de Repuesto',
      slug: 'filtro-repuesto',
      description: 'Filtro de repuesto para sistemas de purificación. Alta durabilidad.',
      price: 3200,
      stock: 45,
      image: '/images/filtro.jpg',
      categoryId: accesoriosCategory.id,
      featured: false,
      active: true,
    },
    {
      name: 'Botellón 3L - Agua Purificada',
      slug: 'botellon-3l',
      description: 'Botellón de 3 litros portátil. Ideal para llevar al trabajo o actividades.',
      price: 220,
      stock: 120,
      image: '/images/botellon-3l.jpg',
      categoryId: botellonesCategory.id,
      featured: false,
      active: true,
    },
  ]

  for (const product of products) {
    await db.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    })
  }

  console.log('✅ Productos creados\n')

  console.log('🎉 Base de datos inicializada correctamente!')
}

seedDatabase()
  .catch((e) => {
    console.error('❌ Error al inicializar la base de datos:', e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
