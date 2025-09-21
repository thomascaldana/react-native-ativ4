export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    description: "O iPhone 15 Pro Max mais avançado da Apple com chip A17 Pro, câmera de 48MP e tela Super Retina XDR de 6.7 polegadas.",
    category: "smartphones",
    price: 1299.99,
    discountPercentage: 5.5,
    rating: 4.8,
    stock: 25,
    tags: ["smartphone", "apple", "premium"],
    brand: "Apple",
    sku: "IPH15PM256",
    weight: 221,
    dimensions: {
      width: 76.7,
      height: 159.9,
      depth: 8.25
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Excelente smartphone! A qualidade da câmera é impressionante.",
        date: "2024-01-15T10:30:00.000Z",
        reviewerName: "Maria Silva",
        reviewerEmail: "maria.silva@email.com"
      },
      {
        rating: 4,
        comment: "Muito bom, mas o preço é alto.",
        date: "2024-01-10T14:20:00.000Z",
        reviewerName: "João Santos",
        reviewerEmail: "joao.santos@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-15T12:00:00.000Z",
      barcode: "1234567890123",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=iPhone15ProMax"
    },
    thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    title: "MacBook Pro 16\"",
    description: "MacBook Pro com chip M3 Pro, tela Liquid Retina XDR de 16 polegadas e até 22 horas de duração da bateria.",
    category: "laptops",
    price: 2499.99,
    discountPercentage: 3.2,
    rating: 4.9,
    stock: 15,
    tags: ["laptop", "apple", "professional"],
    brand: "Apple",
    sku: "MBP16M3512",
    weight: 2100,
    dimensions: {
      width: 355.7,
      height: 248.1,
      depth: 16.8
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2-3 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Perfeito para trabalho profissional. Performance incrível!",
        date: "2024-01-12T09:15:00.000Z",
        reviewerName: "Carlos Oliveira",
        reviewerEmail: "carlos.oliveira@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-12T15:30:00.000Z",
      barcode: "2345678901234",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MacBookPro16"
    },
    thumbnail: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra",
    description: "O smartphone Android mais avançado da Samsung com S Pen integrada, câmera de 200MP e tela Dynamic AMOLED 2X.",
    category: "smartphones",
    price: 1199.99,
    discountPercentage: 8.0,
    rating: 4.7,
    stock: 30,
    tags: ["smartphone", "samsung", "android"],
    brand: "Samsung",
    sku: "SGS24U256",
    weight: 232,
    dimensions: {
      width: 79.0,
      height: 162.3,
      depth: 8.6
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 business day",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "A S Pen faz toda a diferença! Excelente para produtividade.",
        date: "2024-01-14T16:45:00.000Z",
        reviewerName: "Ana Costa",
        reviewerEmail: "ana.costa@email.com"
      },
      {
        rating: 4,
        comment: "Ótimo smartphone, mas poderia ter melhor duração de bateria.",
        date: "2024-01-08T11:20:00.000Z",
        reviewerName: "Pedro Lima",
        reviewerEmail: "pedro.lima@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-14T18:00:00.000Z",
      barcode: "3456789012345",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GalaxyS24Ultra"
    },
    thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Dell XPS 13",
    description: "Ultrabook premium com processador Intel Core i7, tela InfinityEdge 4K e design ultrafino.",
    category: "laptops",
    price: 1599.99,
    discountPercentage: 12.5,
    rating: 4.6,
    stock: 20,
    tags: ["laptop", "dell", "ultrabook"],
    brand: "Dell",
    sku: "DXPS13I7512",
    weight: 1200,
    dimensions: {
      width: 295.7,
      height: 198.7,
      depth: 14.8
    },
    warrantyInformation: "2 years warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Muito leve e portátil. Ideal para trabalho mobile.",
        date: "2024-01-11T13:30:00.000Z",
        reviewerName: "Lucia Ferreira",
        reviewerEmail: "lucia.ferreira@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-11T15:45:00.000Z",
      barcode: "4567890123456",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DellXPS13"
    },
    thumbnail: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Sony WH-1000XM5",
    description: "Fones de ouvido premium com cancelamento de ruído líder da indústria e qualidade de som excepcional.",
    category: "mobile-accessories",
    price: 399.99,
    discountPercentage: 15.0,
    rating: 4.8,
    stock: 50,
    tags: ["headphones", "sony", "wireless"],
    brand: "Sony",
    sku: "SWXM5BLK",
    weight: 250,
    dimensions: {
      width: 254,
      height: 220,
      depth: 90
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 business day",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "O melhor cancelamento de ruído que já experimentei!",
        date: "2024-01-13T08:20:00.000Z",
        reviewerName: "Roberto Alves",
        reviewerEmail: "roberto.alves@email.com"
      },
      {
        rating: 5,
        comment: "Qualidade de som incrível. Vale cada centavo!",
        date: "2024-01-09T19:15:00.000Z",
        reviewerName: "Fernanda Rocha",
        reviewerEmail: "fernanda.rocha@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-13T10:30:00.000Z",
      barcode: "5678901234567",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SonyWH1000XM5"
    },
    thumbnail: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 6,
    title: "iPad Pro 12.9\"",
    description: "iPad Pro com chip M2, tela Liquid Retina XDR e compatibilidade com Apple Pencil de 2ª geração.",
    category: "tablets",
    price: 1099.99,
    discountPercentage: 7.5,
    rating: 4.7,
    stock: 35,
    tags: ["tablet", "apple", "professional"],
    brand: "Apple",
    sku: "IPDP129M2256",
    weight: 682,
    dimensions: {
      width: 280.6,
      height: 214.9,
      depth: 6.4
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Perfeito para design e ilustração. A tela é fantástica!",
        date: "2024-01-16T14:10:00.000Z",
        reviewerName: "Marcos Pereira",
        reviewerEmail: "marcos.pereira@email.com"
      }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-16T16:20:00.000Z",
      barcode: "6789012345678",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=iPadPro129"
    },
    thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop"
    ]
  }
];

export const getProducts = (): Product[] => {
  return mockProducts;
};

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};
