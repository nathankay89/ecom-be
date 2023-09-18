//import

const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const categoryRoutes = require('./routes/api/category-routes');
const productRoutes = require('./routes/api/product-routes');
const tagRoutes = require('./routes/api/tag-routes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Error syncing Sequelize models:', error);
  });

