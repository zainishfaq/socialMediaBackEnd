import Express from 'express';
import { connectDB } from './db/config.js';

const app = Express();
connectDB();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Welcome User');
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});