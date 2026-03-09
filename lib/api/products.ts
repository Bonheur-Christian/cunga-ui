// API client for product-related endpoints
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

interface ApiResponse<T> {
  message: string;
  products: T[];
}

interface ProductData {
  id: string;
  name: string;
  price: number;
  expiryDate?: string | null;
  createdAt: string;
  inventories?: Array<{
    id: string;
    productId: string;
    quantity: number;
    location: string;
    inStock: boolean;
  }>;
  sales?: Array<{ id: string }>;
}

export const productApi = {
  /**
   * Fetch all products
   */
  async getAllProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/all`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch products available in shop
   */
  async getProductsInShop(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/in-shop`);
    if (!response.ok) throw new Error("Failed to fetch shop products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch popular products (most sold)
   */
  async getPopularProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/popular/top`);
    if (!response.ok) throw new Error("Failed to fetch popular products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch low sale products (least sold)
   */
  async getLowSaleProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/low-sale/top`);
    if (!response.ok) throw new Error("Failed to fetch low sale products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch expensive products
   */
  async getExpensiveProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/expensive/top`);
    if (!response.ok) throw new Error("Failed to fetch expensive products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch cheap/budget friendly products
   */
  async getCheapProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/cheap/top`);
    if (!response.ok) throw new Error("Failed to fetch cheap products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch expired products in shop
   */
  async getExpiredProductsInShop(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/expired/in-shop`);
    if (!response.ok) throw new Error("Failed to fetch expired shop products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch expired products in stock
   */
  async getExpiredProductsInStock(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/expired/in-stock`);
    if (!response.ok) throw new Error("Failed to fetch expired stock products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },

  /**
   * Fetch all expired products
   */
  async getExpiredProducts(): Promise<ProductData[]> {
    const response = await fetch(`${API_BASE}/products/expired`);
    if (!response.ok) throw new Error("Failed to fetch expired products");
    const data: ApiResponse<ProductData> = await response.json();
    return data.products || [];
  },
};
