// ================================
// 12. Utilitaires - src/lib/apiClient.js
// ================================

// Client API côté frontend
export class ApiClient {
  constructor(baseUrl = "/api") {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("khalys-token", token);
    }
  }

  getToken() {
    if (!this.token && typeof window !== "undefined") {
      this.token = localStorage.getItem("khalys-token");
    }
    return this.token;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const token = this.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  // Produits
  async getProducts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/products${query ? `?${query}` : ""}`);
  }

  async getProduct(id) {
    return this.request(`/products/${id}`);
  }

  async createProduct(data) {
    return this.request("/products", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateProduct(id, data) {
    return this.request(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id) {
    return this.request(`/products/${id}`, {
      method: "DELETE",
    });
  }

  // Commandes
  async getOrders(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/orders${query ? `?${query}` : ""}`);
  }

  async createOrder(data) {
    return this.request("/orders", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateOrderStatus(id, status) {
    return this.request(`/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  }

  // Avis
  async getReviews(productId) {
    return this.request(`/reviews?productId=${productId}`);
  }

  async createReview(data) {
    return this.request("/reviews", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Contact
  async sendContactMessage(data) {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Stats
  async getStats() {
    return this.request("/stats");
  }

  // Upload
  async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);

    return fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
      body: formData,
    }).then((res) => res.json());
  }

  // Auth
  async login(email, password) {
    const data = await this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (data.success && data.token) {
      this.setToken(data.token);
    }

    return data;
  }

  logout() {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("khalys-token");
    }
  }
}

// Instance globale
export const api = new ApiClient();
