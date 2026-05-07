const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
); // timestamps akan otomatis menambah createdAt & updatedAt

// Agar id bisa berupa string/number di response, gunakan virtual:
productSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
productSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', productSchema);
