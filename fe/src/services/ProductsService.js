import HttpClient from './utils/HttpClient';

class ProductsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listProducts(orderBy = 'asc') {
    return this.httpClient.get(`/products?orderBy=${orderBy}`);
  }

  getProductById(id) {
    return this.httpClient.get(`/products/${id}`);
  }

  getBiggestProduct() {
    return this.httpClient.get(`/biggestproduct`);
  }

  getSmallestProduct() {
    return this.httpClient.get(`/smallestproduct`);
  }

  createProduct(product) {
    return this.httpClient.post(`/newproduct`, { body: product });
  }

  updateProduct(id, product) {
    return this.httpClient.put(`/products/${id}`, { body: product });
  }

  deleteProduct(id) {
    return this.httpClient.delete(`/products/${id}`);
  }
}

export default new ProductsService(); // Singleton
