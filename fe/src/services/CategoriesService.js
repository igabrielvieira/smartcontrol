import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.3.6:3001');
  }

  listCategories(orderBy) {
    return this.httpClient.get(`/categories?orderBy=${orderBy}`);
  }

  getBiggestCategory() {
    return this.httpClient.get(`/biggestcategory`);
  }

  getCategoryById(id) {
    return this.httpClient.get(`/categories/${id}`);
  }

  createCategory(category) {
    return this.httpClient.post(`/newcategory`, { body: category });
  }

  updateCategory(id, category) {
    return this.httpClient.put(`/categories/${id}`, { body: category });
  }

  deleteCategory(id) {
    return this.httpClient.delete(`/categories/${id}`);
  }
}

export default new CategoriesService(); // Singleton
