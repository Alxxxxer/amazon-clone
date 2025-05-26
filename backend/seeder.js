const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany(); // pehle existing products delete
  await Product.insertMany(products); // fir new sample products daale
  console.log('Sample data seeded');
  process.exit(); // script band ho jaaye
});
