import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

export default function App() {
  const [editing, setEditing] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setEditing(null);
    setRefresh((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm border border-gray-100 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Dashboard</h1>

            <p className="mt-2 text-sm text-gray-500">Kelola data produk dengan tampilan modern dan minimalis</p>
          </div>

          {editing === null && (
            <button onClick={() => setEditing({})} className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black">
              + Tambah Produk
            </button>
          )}
        </div>

        {/* Content */}
        <div className="rounded-3xl">
          {editing !== null ? (
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{editing._id || editing.id ? 'Edit Produk' : 'Tambah Produk'}</h2>

                  <p className="mt-1 text-sm text-gray-500">Isi data produk dengan lengkap</p>
                </div>

                <button onClick={() => setEditing(null)} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
                  Kembali
                </button>
              </div>

              <ProductForm key={editing?._id || editing?.id || 'new'} product={editing} onSuccess={handleSuccess} onCancel={() => setEditing(null)} />
            </div>
          ) : (
            <ProductList key={refresh} onEdit={(product) => setEditing(product)} />
          )}
        </div>
      </div>
    </main>
  );
}
