const express = require('express');
const colors = require('colors');

require('dotenv').config();

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      id: 3,
      firstName: 'Paul',
      lastName: 'Jr.',
    },
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`.blue.bold));
