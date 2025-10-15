// Admin Page
import { Plus } from "lucide-react";
import { LogOut } from "lucide-react";
import Image from "next/image";
const AdminPage = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState(initialProducts);
  const [orders] = useState([
    {
      id: 1,
      customer: "Mohammed Ali",
      items: 2,
      total: 598,
      status: "pending",
      date: "2025-10-03",
    },
    {
      id: 2,
      customer: "Fatima Zahra",
      items: 1,
      total: 199,
      status: "processing",
      date: "2025-10-02",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">{t.admin.title}</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            <LogOut className="w-4 h-4" />
            {t.admin.logout}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["products", "orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t.admin[tab]}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{t.admin.products}</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
                <Plus className="w-4 h-4" />
                {t.admin.addProduct}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Produit</th>
                    <th className="text-left py-3 px-4">Catégorie</th>
                    <th className="text-left py-3 px-4">Prix</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={product.image}
                            alt="Product"
                            width={48}
                            height={48}
                            className="object-cover rounded"
                          />
                          <span className="font-medium">{product.name.fr}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{product.category}</td>
                      <td className="py-3 px-4 font-bold">
                        {product.price} DH
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                            {t.admin.editProduct}
                          </button>
                          <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                            {t.admin.deleteProduct}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{t.admin.orders}</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">Client</th>
                    <th className="text-left py-3 px-4">Articles</th>
                    <th className="text-left py-3 px-4">Total</th>
                    <th className="text-left py-3 px-4">Statut</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">#{order.id}</td>
                      <td className="py-3 px-4 font-medium">
                        {order.customer}
                      </td>
                      <td className="py-3 px-4">{order.items}</td>
                      <td className="py-3 px-4 font-bold">{order.total} DH</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            order.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.status === "processing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {t.admin[order.status]}
                        </span>
                      </td>
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">
                        <button className="px-3 py-1 bg-amber-100 text-amber-600 rounded hover:bg-amber-200">
                          {t.admin.viewOrder}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
