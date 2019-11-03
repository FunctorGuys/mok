const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const SES = require('./routes/api/sesNotification');
connectDB();

// app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.get('/test_ses', function(req, res) {
//   const design = `<dev> <h1> welcome MOK</h1>  </dev>`;
//   const reciver = 'nirdahan23@walla.co.il';
//   SES.sendingEmail(reciver, design);
//   res.json({ msg: 'done' });
// });
app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/courses', require('./routes/api/courses'));
app.use('/api/showcases', require('./routes/api/showcases'));
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/contact', require('./routes/api/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
