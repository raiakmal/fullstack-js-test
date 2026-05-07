import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL + '/products';

const createInitialForm = (product) => ({
  name: product?.name || '',
  description: product?.description || '',
  price: product?.price || '',
  stock: product?.stock || '',
  category: product?.category || '',
  isActive: product?.isActive !== undefined ? product.isActive : true,
});

export default function ProductForm({ product, onSuccess, onCancel }) {
  const [form, setForm] = useState(createInitialForm(product));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      if (product?._id || product?.id) {
        await axios.put(`${API_URL}/${product._id || product.id}`, form);
        toast.success('Produk berhasil diupdate');
      } else {
        await axios.post(API_URL, form);
        toast.success('Produk berhasil ditambahkan');
      }
      onSuccess();
    } catch {
      setError('Gagal menyimpan produk');
      toast.error('Gagal menyimpan produk');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700 border border-red-200">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Nama Produk</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Masukkan nama produk" required className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-900" />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Deskripsi</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Masukkan deskripsi produk"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-900"
          />
        </div>

        {/* Harga & Stok */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Harga</label>

            <input type="number" name="price" value={form.price} onChange={handleChange} required className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-900" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Stock</label>

            <input type="number" name="stock" value={form.stock} onChange={handleChange} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-900" />
          </div>
        </div>

        {/* Kategori */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Kategori</label>

          <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Contoh: Elektronik" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-900" />
        </div>

        {/* Status */}
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} className="h-4 w-4" />

          <label className="text-sm font-medium text-gray-700">Produk Aktif</label>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" disabled={loading} className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black disabled:opacity-70">
            {loading ? 'Menyimpan...' : product?._id || product?.id ? 'Update Produk' : 'Simpan Produk'}
          </button>

          <button type="button" onClick={onCancel} className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
