import { Product } from '../data/mockProducts';

const BASE_URL = 'https://dummyjson.com';

export interface ApiResponse<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export const apiService = {
  // Buscar todos os produtos
  async getProducts(limit: number = 30, skip: number = 0): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  // Buscar produto por ID
  async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao buscar produto ${id}:`, error);
      throw error;
    }
  },

  // Buscar produtos por categoria
  async getProductsByCategory(category: string): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao buscar produtos da categoria ${category}:`, error);
      throw error;
    }
  },

  // Buscar produtos
  async searchProducts(query: string): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao buscar produtos com query "${query}":`, error);
      throw error;
    }
  },

  // Buscar categorias
  async getCategories(): Promise<string[]> {
    try {
      const response = await fetch(`${BASE_URL}/products/category-list`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      throw error;
    }
  }
};
