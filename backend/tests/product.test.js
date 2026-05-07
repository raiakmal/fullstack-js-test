require('dotenv').config();

const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

const Product = require('../models/Product');

const path = require('path');

const productRoutes = require(path.resolve(__dirname, '../routes/product'));

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Product.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Product API', () => {
  it('should create a new product', async () => {
    const res = await request(app).post('/api/products').send({
      name: 'Produk Test',
      price: 10000,
      description: 'Deskripsi test',
      stock: 5,
      category: 'Test',
      isActive: true,
    });

    expect(res.statusCode).toBe(201);

    expect(res.body).toHaveProperty('name', 'Produk Test');
  });

  it('should get all products', async () => {
    const res = await request(app).get('/api/products');

    expect(res.statusCode).toBe(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should validate required fields', async () => {
    const res = await request(app).post('/api/products').send({
      price: 10000,
    });

    expect(res.statusCode).toBe(400);
  });
});
