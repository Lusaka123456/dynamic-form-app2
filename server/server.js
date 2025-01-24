const express = require('express');
const { sequelize } = require('./models');
const servicesRoutes = require('./routes/services');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/services', servicesRoutes);

sequelize.sync().then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});
