import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3001;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;