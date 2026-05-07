import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL + '/products';

export default function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch {
      setError('Gagal mengambil data produk');
      toast.error('Gagal mengambil data produk');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
    };

    void loadProducts();
  }, []);

  // Delete Product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Yakin ingin menghapus produk ini?');
    if (!confirmDelete) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prev) => prev.filter((product) => (product._id || product.id) !== id));
      toast.success('Produk berhasil dihapus');
    } catch {
      setError('Gagal menghapus produk');
      toast.error('Gagal menghapus produk');
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Inline Error */}
      {error && <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700 border border-red-200">{error}</div>}
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Daftar Produk</h2>

          <p className="mt-1 text-sm text-gray-500">Kelola data produk dengan mudah</p>
        </div>

        <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">{products.length} Produk</div>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Belum ada produk</h3>

          <p className="mt-2 text-sm text-gray-500">Tambahkan produk baru untuk mulai mengelola data</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Nama</th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Kategori</th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Harga</th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Stok</th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>

                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => {
                const productId = product._id || product.id;

                return (
                  <tr key={productId} className="border-b transition hover:bg-gray-50">
                    {/* Nama */}
                    <td className="px-4 py-4 font-medium text-gray-800">{product.name}</td>

                    {/* Kategori */}
                    <td className="px-4 py-4 text-gray-600">{product.category}</td>

                    {/* Harga */}
                    <td className="px-4 py-4 text-gray-600">Rp {Number(product.price).toLocaleString('id-ID')}</td>

                    {/* Stock */}
                    <td className="px-4 py-4 text-gray-600">{product.stock}</td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{product.isActive ? 'Aktif' : 'Nonaktif'}</span>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => onEdit(product)} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
                          Edit
                        </button>

                        <button onClick={() => handleDelete(productId)} className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
