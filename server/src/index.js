import express from 'express';
import exchanges from './routes/exchanges';

const app = express();
const port = process.env.PORT || 8080;

// mount routing middleware
app.use('/', exchanges);

// error logging middleware
app.use((err, req, res, next) => {
  console.error(err);
});

// start server
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
