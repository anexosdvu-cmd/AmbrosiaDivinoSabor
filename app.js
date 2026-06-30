/* ==========================================================================
   PRODUCT DATABASE (Ambrosia Divino Sabor)
   ========================================================================== */
const PRODUCTS = [
  // Breads (Panes)

  {
    id: "pan-semiintegral-aceitunas",
    name: "Pan Semiintegral Aceitunas & Tomate",
    category: "breads",
    price: 6500,
    priceStr: "$6.500",
    badge: "Nutritivo",
    desc: "Un pan artesanal, nutritivo y lleno de sabor. Elaborado con harina semiintegral, que aporta fibra y minerales, y fermentación lenta para una miga esponjosa y sabor profundo. Decorado con jugosos trozos de tomate asado, aceitunas negras, orégano aromático y un mix de semillas (sésamo, lino, girasol y chía).",
    ingredients: "Harina semiintegral de trigo, agua filtrada, masa madre, aceitunas negras, tomates deshidratados, orégano aromático, mix de semillas (sésamo, lino, girasol, chía), sal de mar.",
    allergens: ["Gluten", "Sésamo"],
    image: "assets/pan_semiintegral.jpg"
  },
  {
    id: "pan-semiintegral-cebolla",
    name: "Pan Semiintegral Cebolla & Tomate",
    category: "breads",
    price: 6500,
    priceStr: "$6.500",
    badge: "Nutritivo",
    desc: "Un pan artesanal, nutritivo y lleno de sabor. Elaborado con harina semiintegral, que aporta fibra y minerales, y fermentación lenta para una miga esponjosa y sabor profundo. Decorado con jugosos trozos de tomate asado, cebolla y un mix de semillas (sésamo, lino, girasol y chía) que le brindan textura crujiente, aroma irresistible y un toque saludable.",
    ingredients: "Harina semiintegral de trigo, agua filtrada, masa madre, cebolla caramelizada, tomates deshidratados asados, mix de semillas (sésamo, lino, girasol, chía), sal de mar.",
    allergens: ["Gluten", "Sésamo"],
    image: "assets/pan_semiintegral_cebolla.jpg"
  },
  {
    id: "focaccia-olivas",
    name: "Focaccia Rústica de Aceitunas & Sésamo",
    category: "breads",
    price: 6000,
    priceStr: "$6.000",
    badge: "Especialidad",
    desc: "Focaccia artesanal de estilo italiano, de masa suave y esponjosa con aceite de oliva extra virgen. Decorada con rodajas de aceitunas negras, tomates deshidratados, romero y una crujiente capa de semillas de sésamo tostado.",
    ingredients: "Harina de trigo, agua filtrada, aceite de oliva extra virgen, levadura de masa madre, aceitunas negras, tomates deshidratados, romero, semillas de sésamo, sal de mar.",
    allergens: ["Gluten", "Sésamo"],
    image: "assets/focaccia.jpg"
  },
  {
    id: "focaccia-champinon",
    name: "Focaccia de Champiñón, Aceitunas & Romero",
    category: "breads",
    price: 6000,
    priceStr: "$6.000",
    badge: "Especialidad",
    desc: "Deliciosa focaccia artesanal de masa esponjosa y alveolada, elaborada con aceite de oliva extra virgen. Cubierta con finas láminas de champiñones seleccionados, aceitunas negras, cebolla caramelizada, tomates frescos y agujas de romero fresco aromático.",
    ingredients: "Harina de trigo, agua filtrada, aceite de oliva extra virgen, levadura de masa madre, champiñones, aceitunas negras, cebolla, tomate, romero fresco, sal de mar.",
    allergens: ["Gluten"],
    image: "assets/focaccia_champinon.png"
  },
  {
    id: "focaccia-huerto",
    name: "Focaccia de Zapallo Italiano, Tomate & Romero",
    category: "breads",
    price: 6000,
    priceStr: "$6.000",
    badge: "Especialidad",
    desc: "Deliciosa focaccia artesanal de masa esponjosa y alveolada, elaborada con aceite de oliva extra virgen. Cubierta con finas rodajas de zapallo italiano, tomates frescos jugosos, aceitunas negras y agujas de romero fresco aromático.",
    ingredients: "Harina de trigo, agua filtrada, aceite de oliva extra virgen, levadura de masa madre, zapallo italiano (calabacín), tomates frescos, aceitunas negras, romero fresco, sal de mar.",
    allergens: ["Gluten"],
    image: "assets/focaccia_huerto.png"
  },
  {
    id: "pan-semiintegral-multisemilla",
    name: "Pan Semiintegral Multisemilla",
    category: "breads",
    price: 6000,
    priceStr: "$6.000",
    badge: "Multisemilla",
    desc: "Pan semiintegral multisemilla elaborado con semillas de linaza, chía, sésamo y avena.",
    ingredients: "Harina de trigo semiintegral, levadura, semillas de linaza, semillas de chía, semillas de sésamo, avena machacada, agua purificada, sal de mar.",
    allergens: ["Gluten", "Sésamo"],
    image: "assets/pan_multisemilla.png"
  },
  
  // Pastries (Pastelería)
  {
    id: "mini-pastelitos-surtidos",
    name: "Mini Pastelitos Surtidos (Caja x25)",
    category: "pastries",
    price: 18000,
    priceStr: "$18.000",
    badge: "Surtido",
    desc: "Caja de 25 pastelitos dulces surtidos: mini tartaletas de fruta, mini pies de limón, alfajores de maicena, brownies y repollitos de manjar.",
    ingredients: "Harina de trigo, manjar casero, limón, frutas de la estación, chocolate amargo, mantequilla, claras de huevo, azúcar flor.",
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image: "assets/pastry_selection.png"
  },
  {
    id: "tarta-manzana-nuez",
    name: "Tarta de Manzana & Nuez (15 pers.)",
    category: "pastries",
    price: 13000,
    priceStr: "$13.000",
    badge: "15 pers.",
    desc: "Exquisita tarta tradicional de manzana con nueces crujientes, horneada en masa quebrada dulce y cubierta con un delicado enrejado de masa dorada. Ideal para compartir en reuniones o celebraciones familiares.",
    ingredients: "Manzanas frescas, nueces picadas, harina de trigo, mantequilla pura, azúcar, huevo, canela molida, esencia de vainilla natural, sal.",
    allergens: ["Gluten", "Frutos Secos", "Huevo", "Lácteos"],
    image: "assets/tarta_manzana_nuez.png"
  },
  {
    id: "pie-limon-naranja",
    name: "Pie de Limón o Naranja (15 pers.)",
    category: "pastries",
    price: 15000,
    priceStr: "$15.000",
    badge: "15 pers.",
    desc: "Clásico pie artesanal preparado con base de masa quebrada crujiente, un suave y equilibrado relleno de crema de limón o naranja (a elección) y cubierto con una abundante capa de merengue dorado horneado de textura perfecta.",
    ingredients: "Leche condensada, jugo natural de limón o naranja, yemas de huevo, claras de huevo, azúcar, harina de trigo, mantequilla pura, esencia de vainilla natural, sal.",
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image: "assets/pie_limon_naranja.png"
  },
  {
    id: "pan-pascua-artesanal",
    name: "Pan de Pascua Artesanal",
    category: "pastries",
    price: 8500,
    priceStr: "$8.500",
    badge: "Tradicional",
    desc: "Exquisito Pan de Pascua de elaboración 100% artesanal, de miga húmeda y especiada con toques de canela, clavo de olor y nuez moscada. Cargado generosamente con un mix de frutos secos (almendras, nueces, maní), pasas y selectas frutas confitadas de gran sabor.",
    ingredients: "Harina de trigo, azúcar rubia, mantequilla pura, huevos frescos, mix de frutos secos (almendras, nueces, maní), pasas de uva, fruta confitada surtida, mix de especias (canela, clavo de olor, nuez moscada), coñac (brandy), esencia de vainilla natural, sal.",
    allergens: ["Gluten", "Frutos Secos", "Maní", "Huevo", "Lácteos"],
    image: "assets/pan_pascua.png"
  },
  {
    id: "empanada-pino",
    name: "Empanada de Pino Tradicional (Horno)",
    category: "empanadas",
    price: 3200,
    priceStr: "$3.200",
    badge: "Venta!",
    desc: "Empanada tradicional horneada de carne picada de vacuno, cebolla caramelizada, aceituna negra, huevo duro y pasas, envuelta en una masa suave artesanal.",
    ingredients: "Carne picada de vacuno, cebolla caramelizada, harina de trigo, manteca, huevo duro, aceitunas negras, pasas de uva, comino, ají de color, sal de mar.",
    allergens: ["Gluten", "Huevo"],
    image: "assets/empanada_pino.png"
  },
  {
    id: "empanada-camaron-queso",
    name: "Empanada Camarón & Queso Mantecoso",
    category: "empanadas",
    price: 3500,
    priceStr: "$3.500",
    badge: "Especialidad",
    desc: "Exquisita empanada crujiente rellena de camarones seleccionados salteados al ajillo, combinados con abundante queso mantecoso fundido.",
    ingredients: "Camarones del Pacífico, queso mantecoso de fundo, harina de trigo, mantequilla, ajo, sal de mar.",
    allergens: ["Gluten", "Lácteos", "Mariscos"],
    image: "assets/empanada_camaron_queso.png"
  },
  {
    id: "empanada-vegana",
    name: "Empanada Vegana Pino de Soya",
    category: "empanadas",
    price: 3400,
    priceStr: "$3.400",
    badge: "Vegana",
    desc: "Empanada horneada de pino de soya, rica en proteínas, preparada con carne de soya texturizada, cebolla, aceitunas negras y especias, envuelta en masa artesanal 100% vegetal.",
    ingredients: "Carne de soya texturizada, cebolla, harina de trigo, aceite de maravilla, aceitunas negras, comino, ají de color, sal de mar.",
    allergens: ["Gluten", "Soya"],
    image: "assets/empanada_vegana.png"
  },
  {
    id: "brochetas-fruta-premium",
    name: "Brochetas de Frutas con Salsa (50 u.)",
    category: "cocteleria",
    price: 40000,
    priceStr: "$40.000",
    badge: "50 uds",
    desc: "Bandeja de 50 deliciosas brochetas de frutas de la estación. Cada brocheta está armada con una frutilla entera, dos arándanos y piña, acompañados de otras frutas de temporada. Incluye salsa para untar a elección: caramelo, frutilla, chocolate o manjar.",
    ingredients: "Frutillas frescas, arándanos, piña, frutas de la estación, salsa a elección (caramelo, frutilla, chocolate, manjar).",
    allergens: ["Lácteos"],
    image: "assets/brochetas_fruta.png"
  },
  {
    id: "canapes-simples-especiales",
    name: "Canapés Simples & Especiales Surtidos (100 u.)",
    category: "cocteleria",
    price: 60000,
    priceStr: "$60.000",
    badge: "100 uds",
    desc: "Bandeja de 100 selectos canapés cóctel montados sobre pan de molde artesanal de la casa. Puedes elegir hasta tres variedades a tu gusto. Variedades Simples: pasta de ave-pimentón, pasta de huevo, pepinillos encurtidos o pasta de jamón. Variedades Especiales: champiñón al ajillo, choclito baby, palmito, chorito en salsa verde o camarón con ciboulette.",
    ingredients: "Pan de molde artesanal especial, pasta de ave, huevo duro, jamón, pepinillos, champiñones, choclito baby, palmito, choritos, salsa verde, camarones, mayonesa casera, ciboulette, condimentos.",
    allergens: ["Gluten", "Lácteos", "Mariscos", "Huevo"],
    image: "assets/canapes_surtidos.png"
  },
  {
    id: "bruschettas-surtidas-box",
    name: "Bruschettas Gourmet Surtidas (50 u.)",
    category: "cocteleria",
    price: 30000,
    priceStr: "$30.000",
    badge: "50 uds",
    desc: "Bandeja de 50 deliciosas bruschettas gourmet montadas sobre pan baguette artesanal crujiente. Puedes elegir hasta tres variedades de nuestra selección: choritos en salsa verde, queso fresco con tomate, palmito con choclo baby, queso crema con espárragos o champiñón a la crema.",
    ingredients: "Baguette artesanal especial, choritos, salsa verde, queso fresco, tomate, palmito, choclo baby, queso crema, espárragos, champiñones, crema de leche, aceite de oliva, ajo, condimentos.",
    allergens: ["Gluten", "Lácteos", "Mariscos"],
    image: "assets/bruschettas_surtidas.png"
  },
  {
    id: "mini-focaccias-box",
    name: "Mini Focaccias con Toppings (50 u.)",
    category: "cocteleria",
    price: 30000,
    priceStr: "$30.000",
    badge: "50 uds",
    desc: "Bandeja de 50 mini focaccias cuadradas de masa esponjosa a base de aceite de oliva extra virgen, cubiertas con un mix de toppings mediterráneos: tomates cherry, pimiento amarillo, cebolla caramelizada, aceitunas negras y un toque aromático de romero fresco.",
    ingredients: "Harina de trigo, agua filtrada, aceite de oliva extra virgen, levadura de masa madre, tomates cherry, pimiento amarillo, cebolla caramelizada, aceitunas negras, romero fresco, sal de mar.",
    allergens: ["Gluten"],
    image: "assets/mini_focaccias.png"
  },
  {
    id: "mini-hamburguesas-surtidas",
    name: "Mini Hamburguesas Surtidas (50 u.)",
    category: "cocteleria",
    price: 48000,
    priceStr: "$48.000",
    badge: "50 uds",
    desc: "Bandeja de 50 mini hamburguesas gourmet tipo slider en pan brioche de la casa. Incluye variedades: clásicas con tomate y lechuga, cebolla caramelizada con queso cheddar derretido, y opción vegetariana elaborada con carne de soya tierna, tomate y lechuga.",
    ingredients: "Pan brioche artesanal, carne de vacuno seleccionada, hamburguesa de soya (para la opción vegetariana), queso cheddar, cebolla caramelizada, tomate, lechuga, mayonesa de la casa, pepinillos.",
    allergens: ["Gluten", "Lácteos", "Soya", "Huevo"],
    image: "assets/hamburguesas_surtidas.png"
  },
  {
    id: "mini-hamburguesas-veganas",
    name: "Mini Hamburguesas Veganas (50 u.)",
    category: "cocteleria",
    price: 45000,
    priceStr: "$45.000",
    badge: "Vegana",
    desc: "Bandeja de 50 mini hamburguesas 100% veganas tipo slider en pancito artesanal sin ingredientes de origen animal. Preparadas con hamburguesa de soya tierna, rodajas de tomate fresco y hojas de lechuga crocante.",
    ingredients: "Pan artesanal vegano, hamburguesa de soya tierna, tomate, lechuga fresca, aderezos veganos.",
    allergens: ["Gluten", "Soya"],
    image: "assets/hamburguesas_veganas.png"
  },
  {
    id: "croquetas-atun-carne-box",
    name: "Bocaditos Gourmet: Croquetas de Atún y Carne (50 u.)",
    category: "cocteleria",
    price: 40000,
    priceStr: "$40.000",
    badge: "50 uds",
    desc: "Bandeja de 50 croquetas gourmet mixtas (25 de atún y 25 de carne). Crujientes por fuera y cremosas por dentro, preparadas con una suave bechamel de la casa, rebozadas en pan rallado panko y fritas a la perfección dorada.",
    ingredients: "Atún, carne de vacuno picada, harina de trigo, leche entera, mantequilla, cebolla picada fina, huevo, pan rallado panko, condimentos de la casa, aceite de maravilla.",
    allergens: ["Gluten", "Lácteos", "Huevo", "Pescado"],
    image: "assets/croquetas_gourmet.png"
  },
  {
    id: "mini-quiches-box",
    name: "Mini Quiches Gourmet Surtidos (50 u.)",
    category: "cocteleria",
    price: 50000,
    priceStr: "$50.000",
    badge: "50 uds",
    desc: "Bandeja de 50 exquisitos mini quiches individuales horneados en masa brisa crocante de mantequilla. Incluye variedades surtidas: Quiche Lorraine clásico (con tocino crujiente y cebolla caramelizada) y Quiche de Espinaca (con champiñones, aceitunas y espinaca fresca).",
    ingredients: "Harina de trigo, mantequilla seleccionada, crema de leche fresca, huevos, tocino crocante, cebolla caramelizada, champiñones laminados, espinaca tierna, aceitunas negras, queso parmesano, nuez moscada, sal de mar y pimienta.",
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image: "assets/mini_quiches.png"
  },
  {
    id: "pastel-choclo-individual",
    name: "Pastel de Choclo Rústico (Individual)",
    category: "platos",
    price: 6000,
    priceStr: "$6.000",
    badge: "Plato Casero",
    desc: "Exquisito y tradicional pastel de choclo chileno en porción individual, horneado con un toque rústico. Elaborado con una base de pino de carne, aceitunas, huevo duro, pasas, pollo tierno desmenuzado y cubierto con una suave pastelera de choclo y albahaca fresca caramelizada. Opción Vegetariana: con pino de carne de soya, champiñones, aceitunas y pastelera de choclo con albahaca.",
    ingredients: "Choclo tierno, albahaca fresca, carne de vacuno picada (o carne de soya para la opción vegetariana), trutro de pollo desmenuzado, champiñones, aceitunas negras, huevo duro, pasas de uva, leche entera, mantequilla, condimentos de la casa, azúcar para caramelizar.",
    allergens: ["Lácteos", "Huevo", "Soya"],
    image: "assets/pastel_de_choclo.jpg"
  },
  {
    id: "pastel-mariscos-individual",
    name: "Pastel de Mariscos Rústico (Individual)",
    category: "platos",
    price: 9000,
    priceStr: "$9.000",
    badge: "Plato Casero",
    desc: "Delicioso y tradicional pastel de mariscos en porción individual, horneado con un toque rústico. Elaborado a base de una selección de mariscos picados finos, cocinados en una salsa cremosa blanca y cubiertos con una suave capa gratinada de queso derretido, huevo rallado y perejil fresco espolvoreado.",
    ingredients: "Surtido de mariscos seleccionados, crema de leche fresca, mantequilla, harina de trigo, cebolla picada fina, ajo, queso para gratinar, huevo duro rallado, perejil fresco picado, condimentos de la casa.",
    allergens: ["Gluten", "Lácteos", "Huevo", "Mariscos"],
    image: "assets/pastel_de_mariscos.png"
  },
  {
    id: "mini-tapaditos-box",
    name: "Tapaditos (Mini sándwiches) 50 uds",
    category: "cocteleria",
    price: 60000,
    priceStr: "$60.000",
    badge: "50 uds",
    desc: "Bandeja de 50 tapaditos (mini sándwiches) hechos con pan de miga o pan frica, ofreciendo variedades a elección entre: churrasco de carne o pollo con lechuga y tomate; jamón y queso; queso fresco con tomate y albahaca; o nuestra especialidad de Tapenade (pasta de aceituna, ajo, crema, aceite de oliva y toque de limón) con tomate cherry y queso crema.",
    ingredients: "Pan de miga o pan frica, churrasco de carne, pollo, lechuga, tomate, tomate cherry, jamón, queso, queso fresco, queso crema, albahaca, pasta de aceituna (tapenade), ajo, crema, aceite de oliva, limón, mayonesa.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/mini_sandwiches.png"
  },
  {
    id: "brochetas-mixtas-box",
    name: "Brochetas Mixtas Gourmet (50 u.)",
    category: "cocteleria",
    price: 60000,
    priceStr: "$60.000",
    badge: "50 uds",
    desc: "Bandeja de 50 exquisitas brochetas mixtas elaboradas con los mejores ingredientes de alta calidad: tierna carne de vacuno, pechuga de pollo, sabrosa longanizilla, salchicha y trozos de pimiento fresco grillado. Perfectamente sazonadas y listas para su evento.",
    ingredients: "Carne de vacuno, pechuga de pollo, longanizilla, salchicha, pimiento, condimentos y aceite de oliva.",
    allergens: [],
    image: "assets/brochetas_mixtas.png"
  },
  {
    id: "brochetas-vegetarianas-box",
    name: "Brochetas Vegetarianas Gourmet (50 u.)",
    category: "cocteleria",
    price: 45000,
    priceStr: "$45.000",
    badge: "50 uds",
    desc: "Bandeja de 50 deliciosas brochetas vegetarianas elaboradas con ingredientes de alta calidad, con 2 variedades a elección entre: 1) Champiñón, pimentón y cebolla morada; 2) Estilo Caprese con tomate cherry, queso fresco y albahaca fresca; 3) Pimentón asado, zapallo italiano grillado, aceituna negra y champiñón.",
    ingredients: "Champiñones seleccionados, pimentón, cebolla morada, tomate cherry, queso fresco, albahaca fresca, zapallo italiano, aceitunas negras, aceite de oliva, aderezos.",
    allergens: ["Lácteos"],
    image: "assets/brochetas_veggie.png"
  },
  {
    id: "tapaditos-veganos-box",
    name: "Tapaditos Veganos Gourmet (50 u.)",
    category: "cocteleria",
    price: 50000,
    priceStr: "$50.000",
    badge: "50 uds",
    desc: "Bandeja de 50 deliciosos tapaditos veganos, ofreciendo 3 variedades gourmet: 1) Hummus de garbanzo con tomate cherry y rúcula fresca; 2) Hummus de betarraga con zanahoria rallada y tahini; 3) Fresco mix de hojas verdes.",
    ingredients: "Pan especial vegano, garbanzos, betarraga, zanahoria, tomate cherry, rúcula, mix de hojas verdes, pasta de sésamo (tahini), aceite de oliva, condimentos.",
    allergens: ["Gluten", "Sésamo"],
    image: "assets/tapaditos_veganos.png"
  },
  {
    id: "empanaditas-coctel-box",
    name: "Empanaditas de Cóctel (50 u.)",
    category: "cocteleria",
    price: 40000,
    priceStr: "$40.000",
    badge: "50 uds",
    desc: "Bandeja de 50 crujientes empanaditas de cóctel horneadas, en masa artesanal. Variedades tradicionales: pino de carne, napolitana, champiñón queso, queso camarón, pino de marisco. Variedades Veggie: espinaca a la crema, queso tomate choclo albahaca, pino de soya, champiñón aceituna a la crema.",
    ingredients: "Masa artesanal, carne de vacuno, queso, camarón, mariscos, champiñón, tomate, choclo, albahaca, espinaca, carne de soya, aceitunas, crema, condimentos.",
    allergens: ["Gluten", "Lácteos", "Mariscos", "Soya", "Huevo"],
    image: "assets/empanaditas_coctel.png"
  },
  {
    id: "bocaditos-masa-box",
    name: "Bocaditos en Masa (50 u.)",
    category: "cocteleria",
    price: 38000,
    priceStr: "$38.000",
    badge: "50 uds",
    desc: "Bandeja de 50 exquisitas masitas pequeñas horneadas (bocaditos). Con 2 variedades a elección entre: suave relleno de pastelera de choclo o deliciosa pasta de mariscos. Todo gratinado a la perfección.",
    ingredients: "Masa artesanal para bocaditos, choclo, crema, mariscos seleccionados, queso para gratinar, especias, sal, aceite de oliva.",
    allergens: ["Gluten", "Lácteos", "Mariscos"],
    image: "assets/bocaditos_masa.png"
  },
  {
    id: "tarta-manjar-nuez",
    name: "Tarta de Manjar y Nuez (15 pers.)",
    category: "pastries",
    price: 18000,
    priceStr: "$18.000",
    badge: "15 pers.",
    desc: "Exquisita tarta de masa sablée dulce y crujiente, rellena con una generosa capa de manjar artesanal de campo y cubierta íntegramente por nueces tostadas seleccionadas. Un clásico irresistible, ideal para compartir en familia. Rinde para 15 personas.",
    ingredients: "Harina de trigo, mantequilla pura, azúcar, huevo, manjar (dulce de leche) artesanal, nueces mariposa tostadas, toque de vainilla.",
    allergens: ["Gluten", "Lácteos", "Huevo", "Frutos Secos"],
    image: "assets/tarta_manjar_nuez_real.jpg"
  },
  {
    id: "pizza-caprese",
    name: "Pizza Caprese (Artesanal)",
    category: "pizzas",
    price: 12900,
    priceStr: "$12.900",
    badge: "Familiar",
    desc: "Exquisita pizza familiar de masa artesanal. Cubierta con suave salsa pomodoro, abundante queso mozzarella fundido, láminas de tomates frescos, hojas de albahaca y un toque de aceite de oliva extra virgen.",
    ingredients: "Masa artesanal, salsa pomodoro, queso mozzarella, tomates frescos, albahaca fresca, aceite de oliva extra virgen.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/pizza_caprese_real.jpg"
  },
  {
    id: "pizza-barbacue",
    name: "Pizza Barbacue",
    category: "pizzas",
    price: 13900,
    priceStr: "$13.900",
    badge: "Familiar",
    desc: "Deliciosa pizza familiar de masa artesanal. Cubierta con salsa barbecue, queso mozzarella fundido, pollo desmenuzado, cebolla caramelizada y un toque de perejil fresco.",
    ingredients: "Masa artesanal, salsa barbecue, queso mozzarella, pollo desmenuzado, cebolla caramelizada, perejil.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/pizza_barbacue.jpg"
  },
  {
    id: "pizza-vegetariana",
    name: "Pizza Vegetariana",
    category: "pizzas",
    price: 13900,
    priceStr: "$13.900",
    badge: "Familiar",
    desc: "Deliciosa pizza familiar de masa artesanal. Cubierta con salsa pomodoro, queso mozzarella, champiñones, cebolla morada, aceitunas, y un toque fresco de perejil y albahaca.",
    ingredients: "Masa artesanal, salsa pomodoro, queso mozzarella, champiñón, cebolla, perejil, albahaca, aceituna.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/pizza_vegetariana.jpg"
  },
  {
    id: "pizza-hawaiana",
    name: "Pizza Hawaiana",
    category: "pizzas",
    price: 13900,
    priceStr: "$13.900",
    badge: "Familiar",
    desc: "Exquisita pizza familiar de masa artesanal, combinando el clásico sabor del jamón con el toque agridulce de la piña fresca y cebolla caramelizada.",
    ingredients: "Masa artesanal, salsa pomodoro, queso mozzarella, jamón, trozos de piña, cebolla caramelizada.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/pizza_hawaiana.jpg"
  },
  {
    id: "pizza-premium-pepperoni",
    name: "Pizza Premium Pepperoni",
    category: "pizzas",
    price: 13900,
    priceStr: "$13.900",
    badge: "Familiar",
    desc: "Clásica pizza familiar de masa artesanal. Generosamente cubierta con salsa pomodoro, queso mozzarella, finas láminas de pepperoni, aceitunas negras y un toque de orégano fresco.",
    ingredients: "Masa artesanal, salsa pomodoro, queso mozzarella, pepperoni, aceitunas, orégano fresco.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/pizza_pepperoni.jpg"
  },
  {
    id: "mini-pizzas-coctel",
    name: "Mini Pizzas (50 u.)",
    category: "cocteleria",
    price: 38000,
    priceStr: "$38.000",
    badge: "50 uds",
    desc: "Bandeja de 50 mini pizzas de cóctel en tres deliciosas variedades: caprese, salame con aceituna, y napolitana.",
    ingredients: "Masa de pizza, salsa pomodoro, queso mozzarella, tomate cherry, albahaca, salame, aceitunas, jamón.",
    allergens: ["Gluten", "Lácteos"],
    image: "assets/mini_pizzas.jpg"
  },
  {
    id: "mini-ceviche-coctel",
    name: "Mini Ceviche de Cóctel (50 u.)",
    category: "cocteleria",
    price: 60000,
    priceStr: "$60.000",
    badge: "50 uds",
    desc: "Frescos y deliciosos mini ceviches de cóctel en porciones individuales. Puedes elegir dos variedades entre: ceviche de cochayuyo, ceviche de camarón, ceviche de champiñón palta o ceviche de reineta.",
    ingredients: "Reineta fresca, cochayuyo, champiñón, palta, camarón, jugo de limón, cebolla morada, especias.",
    allergens: ["Pescado", "Crustáceos"],
    image: "assets/mini_ceviche.jpg"
  },
];

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProductsMenu();
  initShoppingCart();
  initContactForm();
  checkBusinessStatus();
  initScrollAnimations();
});

/* ==========================================================================
   NAVIGATION LOGIC
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveLinkOnScroll();
  });

  // Mobile Menu Toggle
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close Mobile Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Smooth scroll target transition
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Update Nav Link Active class based on scroll position
function updateActiveLinkOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 120; // offset

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (link && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}

/* ==========================================================================
   PRODUCTS SHOWCASE (Vitrina de Menú)
   ========================================================================== */
function initProductsMenu() {
  const menuGrid = document.getElementById("menuGrid");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const productModal = document.getElementById("productModal");
  const closeModalBtn = productModal.querySelector(".btn-close-modal");

  // Render Initial Products
  renderProducts("all");

  // Filter Buttons Event Listeners
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.dataset.filter;
      
      // Smooth Fade Animation
      menuGrid.style.opacity = 0;
      setTimeout(() => {
        renderProducts(filter);
        menuGrid.style.opacity = 1;
      }, 200);
    });
  });

  // Close Modal Events
  closeModalBtn.addEventListener("click", () => {
    productModal.close();
  });

  // Close modal when clicking outside (on the backdrop)
  productModal.addEventListener("click", (e) => {
    const dialogDimensions = productModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      productModal.close();
    }
  });
}

const VEGGIE_PRODUCT_IDS = [
  "mini-hamburguesas-veganas",
  "pastel-choclo-individual",
  "brochetas-vegetarianas-box",
  "tapaditos-veganos-box",
  "empanaditas-coctel-box",
  "pizza-caprese",
  "pizza-vegetariana"
];

function renderProducts(categoryFilter, customList = null) {
  const menuGrid = document.getElementById("menuGrid");
  menuGrid.innerHTML = "";

  let filtered = [];
  if (customList) {
    filtered = customList;
  } else {
    filtered = categoryFilter === "all" 
      ? PRODUCTS 
      : categoryFilter === "veggie"
        ? PRODUCTS.filter(p => VEGGIE_PRODUCT_IDS.includes(p.id))
        : PRODUCTS.filter(p => p.category === categoryFilter);
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "menu-card reveal";
    card.innerHTML = `
      <div class="menu-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="menu-badge">${product.badge}</span>
        ${product.badge === "Venta!" || product.badge === "Oferta!" ? `<span class="menu-sale-tag">Venta!</span>` : ''}
      </div>
      <div class="menu-body">
        <div class="menu-header">
          <h3>${product.name}</h3>
          <span class="menu-price">${product.priceStr}</span>
        </div>
        <p class="menu-desc">${product.desc.substring(0, 100)}...</p>
        <div class="menu-footer" style="display: flex; gap: 8px; justify-content: space-between; align-items: center; border-top: 1px solid rgba(141, 75, 50, 0.05); padding-top: 14px; margin-top: auto;">
          <button class="btn-detail" data-id="${product.id}" style="font-size: 0.8rem; background: none; border: none; color: var(--text-muted); cursor: pointer; text-decoration: underline;">
            Vista rápida
          </button>
          <button class="btn btn-primary btn-add-cart" style="padding: 8px 12px; font-size: 0.775rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
            Añadir
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
    `;

    // Setup detail button click listener
    card.querySelector(".btn-detail").addEventListener("click", () => {
      openProductModal(product);
    });

    // Setup add to cart button click listener
    card.querySelector(".btn-add-cart").addEventListener("click", () => {
      addToCart(product, 1);
    });

    menuGrid.appendChild(card);
  });

  // Re-observe new elements for reveal animation
  observeNewElements();
}

function openProductModal(product) {
  window.currentModalProduct = product;
  const qtySpan = document.getElementById("modalQty");
  if (qtySpan) qtySpan.textContent = "1";
  const modal = document.getElementById("productModal");
  
  // Update Modal Content DOM
  modal.querySelector(".modal-header-img img").src = product.image;
  modal.querySelector(".modal-header-img img").alt = product.name;
  modal.querySelector(".modal-title-row h3").textContent = product.name;
  modal.querySelector(".modal-price").textContent = product.priceStr;
  modal.querySelector(".modal-desc").textContent = product.desc;
  modal.querySelector(".modal-ingredients").textContent = product.ingredients;

  // Render Allergen Tags
  const allergensContainer = modal.querySelector(".modal-allergens");
  allergensContainer.innerHTML = "";
  
  product.allergens.forEach(allg => {
    const tag = document.createElement("span");
    tag.className = "allergen-tag";
    tag.textContent = allg;
    allergensContainer.appendChild(tag);
  });

  // Show Native Dialog
  modal.showModal();
}

/* ==========================================================================
   BUSINESS HOURS & OPENING STATUS
   ========================================================================== */
function checkBusinessStatus() {
  const statusBadge = document.getElementById("statusBadge");
  const statusLabel = document.getElementById("statusLabel");

  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  // Shop Schedule:
  // Tuesday (2) to Sunday (0): 8:30 (8.5) to 20:30 (20.5)
  // Monday (1): Closed
  
  const isOpenDay = day !== 1; // Not Monday
  const isOpenTime = currentTime >= 8.5 && currentTime <= 20.5;

  if (isOpenDay && isOpenTime) {
    statusBadge.className = "status-badge open";
    statusBadge.innerHTML = `<span class="status-dot"></span> Abierto Ahora`;
    statusLabel.textContent = "¡Pasa por tus panes calientes o pasteles! Cerramos a las 20:30.";
  } else {
    statusBadge.className = "status-badge closed";
    statusBadge.innerHTML = `<span class="status-dot"></span> Cerrado`;
    if (day === 1) {
      statusLabel.textContent = "Hoy lunes estamos cerrados por descanso del equipo. Te esperamos mañana desde las 08:30.";
    } else {
      statusLabel.textContent = "Estamos fuera del horario de atención. Te esperamos mañana desde las 08:30.";
    }
  }
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform validation check
    if (!form.checkValidity()) {
      showToast("Por favor, llena correctamente todos los campos obligatorios.", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Simulate Loading State
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando solicitud...";

    setTimeout(() => {
      // Success toast
      showToast("¡Mensaje enviado con éxito! Nos comunicaremos contigo en menos de 24 horas.", "success");
      
      // Reset form
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1500);
  });
}

/* ==========================================================================
   SCROLL EFFECTS & REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  observeNewElements();
}

function observeNewElements() {
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animates only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = "default") {
  let toastContainer = document.getElementById("toastContainer");
  
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  // Custom Icon based on type
  let icon = "";
  if (type === "success") {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/></svg>`;
  } else if (type === "error") {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>`;
  } else {
    icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Trigger repaint to enable transitions
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Auto-remove toast after 4.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4500);
}


/* ==========================================================================
   E-COMMERCE SHOPPING CART
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem("ambrosia_cart")) || [];

function initShoppingCart() {
  updateCartUI();

  // Modal logic
  const btnMinus = document.getElementById("modalQtyMinus");
  const btnPlus = document.getElementById("modalQtyPlus");
  const btnAdd = document.getElementById("btnAddToCart");
  const qtySpan = document.getElementById("modalQty");

  if (btnMinus) {
    btnMinus.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
      }
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      qty++;
      qtySpan.textContent = qty;
    });
  }

  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      const qty = parseInt(qtySpan.textContent);
      if (window.currentModalProduct) {
        addToCart(window.currentModalProduct, qty);
        document.getElementById("productModal").close();
      }
    });
  }

  // Sidebar logic
  const cartBtn = document.getElementById("cartBtn");
  const cartSidebar = document.getElementById("cartSidebar");
  const cartOverlay = document.getElementById("cartOverlay");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const btnCheckout = document.getElementById("btnCheckout");

  if (cartBtn) cartBtn.addEventListener("click", () => openCart());
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => closeCart());
  if (cartOverlay) cartOverlay.addEventListener("click", () => closeCart());
  if (btnCheckout) btnCheckout.addEventListener("click", () => checkoutCart());
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
}

function addToCart(product, quantity) {
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }
  
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" añadido al carrito`, "success");
}

function updateCartQty(index, delta) {
  const item = cart[index];
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("ambrosia_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartBadge");
  const container = document.getElementById("cartItemsContainer");
  const totalDisplay = document.getElementById("cartTotalPrice");

  let totalItems = 0;
  let totalPrice = 0;

  // Autoclean corrupt items from localStorage bug
  cart = cart.filter(item => item && item.id && typeof item.price === "number");
  saveCart();

  if (container) container.innerHTML = "";

  cart.forEach((item, index) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    if (container) {
      const itemEl = document.createElement("div");
      itemEl.className = "cart-item";
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString("es-CL")}</div>
          <div class="cart-item-actions">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem(${index})">Eliminar</button>
          </div>
        </div>
      `;
      container.appendChild(itemEl);
    }
  });

  if (cart.length === 0 && container) {
    container.innerHTML = "<p style='color: var(--text-muted); text-align: center; margin-top: 40px;'>Tu carrito está vacío.</p>";
  }

  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? "flex" : "none";
  }
  
  if (totalDisplay) {
    totalDisplay.textContent = `$${totalPrice.toLocaleString("es-CL")}`;
  }
}

function checkoutCart() {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío.", "error");
    return;
  }
  
  let orderText = "Hola Ambrosia Divino Sabor, me gustaría realizar el siguiente pedido:\n\n";
  let total = 0;
  
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    orderText += `${item.quantity}x ${item.name} - $${subtotal.toLocaleString("es-CL")}\n`;
  });
  
  orderText += `\n*Total Estimado: $${total.toLocaleString("es-CL")}*\n\n¿Me podrían confirmar disponibilidad y tiempo de entrega?`;
  
  const encodedText = encodeURIComponent(orderText);
  window.open(`https://wa.me/56955182841?text=${encodedText}`, "_blank");
  closeCart();
}

/* ==========================================================================
   SEARCH BAR LOGIC
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      // Re-render currently active category filter
      const activeFilter = document.querySelector('.nav-menu .nav-link.active')?.getAttribute('onclick')?.match(/'([^']+)'/);
      const filterToApply = activeFilter ? activeFilter[1] : 'all';
      
      // If we are on home/hero, and no filter is active, default to all
      renderProducts(filterToApply === '#home' ? 'all' : (activeFilter ? activeFilter[1] : 'all'));
      return;
    }

    const searchResults = PRODUCTS.filter(p => {
      return p.name.toLowerCase().includes(query) || 
             p.desc.toLowerCase().includes(query) || 
             p.ingredients.toLowerCase().includes(query);
    });

    renderProducts('search', searchResults);
    
    // Smooth scroll to menu section
    const menuSection = document.getElementById("menu");
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initAuth();
});


/* ==========================================================================
   AUTHENTICATION LOGIC (Simulated with LocalStorage)
   ========================================================================== */
let currentUser = JSON.parse(localStorage.getItem('ambrosia_user')) || null;

function openAuthModal() {
  if (currentUser) {
    if (confirm(`Sesión iniciada como ${currentUser.name}.\n¿Deseas cerrar sesión?`)) {
      logout();
    }
    return;
  }
  document.getElementById('authModal').showModal();
}

function switchAuthTab(tab) {
  const formLogin = document.getElementById('formLogin');
  const formRegister = document.getElementById('formRegister');
  const tabLogin = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');

  if (tab === 'login') {
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
    tabLogin.classList.add('active');
    tabLogin.style.color = 'var(--color-primary)';
    tabLogin.style.borderBottomColor = 'var(--color-primary)';
    tabRegister.classList.remove('active');
    tabRegister.style.color = 'var(--text-muted)';
    tabRegister.style.borderBottomColor = 'transparent';
  } else {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block';
    tabRegister.classList.add('active');
    tabRegister.style.color = 'var(--color-primary)';
    tabRegister.style.borderBottomColor = 'var(--color-primary)';
    tabLogin.classList.remove('active');
    tabLogin.style.color = 'var(--text-muted)';
    tabLogin.style.borderBottomColor = 'transparent';
  }
}

function initAuth() {
  updateAuthUI();

  const formLogin = document.getElementById('formLogin');
  const formRegister = document.getElementById('formRegister');

  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      
      const users = JSON.parse(localStorage.getItem('ambrosia_users_db')) || [];
      const user = users.find(u => u.email === email);

      if (user) {
        currentUser = user;
        localStorage.setItem('ambrosia_user', JSON.stringify(currentUser));
        document.getElementById('authModal').close();
        updateAuthUI();
        showToast(`¡Bienvenido de vuelta, ${user.name}!`, "success");
      } else {
        showToast("Credenciales incorrectas o usuario no encontrado.", "error");
      }
    });
  }

  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const phone = document.getElementById('regPhone').value;
      
      const users = JSON.parse(localStorage.getItem('ambrosia_users_db')) || [];
      
      if (users.find(u => u.email === email)) {
        showToast("Este correo ya está registrado.", "error");
        return;
      }

      const newUser = { name, email, phone };
      users.push(newUser);
      localStorage.setItem('ambrosia_users_db', JSON.stringify(users));
      
      currentUser = newUser;
      localStorage.setItem('ambrosia_user', JSON.stringify(currentUser));
      
      document.getElementById('authModal').close();
      updateAuthUI();
      showToast(`¡Bienvenido a la familia Ambrosía, ${name}!`, "success");
      
      // Clear forms
      formRegister.reset();
      document.getElementById('loginEmail').value = email;
    });
  }
}

function updateAuthUI() {
  const authLabel = document.getElementById('authLabel');
  if (authLabel) {
    if (currentUser) {
      authLabel.textContent = "Mi Cuenta";
    } else {
      authLabel.textContent = "Ingresar";
    }
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('ambrosia_user');
  updateAuthUI();
  showToast("Has cerrado sesión.", "success");
}


/* ==========================================================================
   CHAT WIDGET LOGIC
   ========================================================================== */
let chatOpen = false;
let chatInitialized = false;

function toggleChat() {
  const windowEl = document.getElementById('chatWidgetWindow');
  const fabEl = document.getElementById('chatWidgetFab');
  
  chatOpen = !chatOpen;
  
  if (chatOpen) {
    windowEl.classList.add('open');
    fabEl.style.transform = 'scale(0)';
    if (!chatInitialized) {
      initChatMessages();
      chatInitialized = true;
    }
  } else {
    windowEl.classList.remove('open');
    fabEl.style.transform = 'scale(1)';
  }
}

function initChatMessages() {
  const body = document.getElementById('chatWidgetBody');
  const footer = document.getElementById('chatWidgetFooter');
  
  // Calculate greeting
  const hour = new Date().getHours();
  let greeting = "Buenos días";
  if (hour >= 12 && hour < 20) {
    greeting = "Buenas tardes";
  } else if (hour >= 20 || hour < 6) {
    greeting = "Buenas noches";
  }
  
  const msgText = `Hola, ${greeting.toLowerCase()}. Gracias por comunicarte con Ambrosía, divino sabor. ¿En qué te podemos ayudar?`;
  
  // Render initial message
  body.innerHTML = `
    <div class="chat-msg bot-msg">
      <p>${msgText}</p>
    </div>
  `;
  
  // Render options
  footer.innerHTML = `
    <button class="chat-opt-btn" onclick="handleChatOption('ayuda')">Ayuda con tu pedido</button>
    <button class="chat-opt-btn" onclick="handleChatOption('pagos')">Formas de pago</button>
  `;
}

function handleChatOption(opt) {
  const body = document.getElementById('chatWidgetBody');
  const footer = document.getElementById('chatWidgetFooter');
  
  // Render user message
  let userText = "";
  if (opt === 'ayuda') userText = "Ayuda con tu pedido";
  if (opt === 'pagos') userText = "Formas de pago";
  
  body.innerHTML += `
    <div class="chat-msg user-msg">
      <p>${userText}</p>
    </div>
  `;
  
  // Simulate thinking delay
  footer.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center; margin:0; padding: 10px; font-style:italic;">Escribiendo...</p>`;
  body.scrollTop = body.scrollHeight;
  
  setTimeout(() => {
    let botResponse = "";
    let actionHtml = "";
    
    if (opt === 'ayuda') {
      botResponse = "¡Claro! Para hacer un pedido necesitas seleccionar tus productos desde nuestro menú, añadirlos al carrito y finalizar la compra para enviarnos un WhatsApp. Recuerda que la coctelería requiere 48h de anticipación.";
      actionHtml = `<button class="chat-opt-btn" onclick="document.querySelector('.tab-btn[data-filter=\'all\']').click(); document.getElementById('menu').scrollIntoView(); toggleChat();">Ir al menú</button>`;
    } else if (opt === 'pagos') {
      botResponse = "Aceptamos <strong>Transferencias bancarias</strong> y <strong>Efectivo</strong>.<br><br>Pedimos cancelar el 50% al momento de reservar, y el otro 50% contra entrega. Además, ¡el delivery es gratis en San Antonio por compras superiores a $50.000!";
      actionHtml = `<button class="chat-opt-btn" onclick="toggleChat()">¡Entendido!</button>`;
    }
    
    body.innerHTML += `
      <div class="chat-msg bot-msg">
        <p>${botResponse}</p>
      </div>
    `;
    
    footer.innerHTML = actionHtml;
    body.scrollTop = body.scrollHeight; // Scroll to bottom
  }, 1000);
}
