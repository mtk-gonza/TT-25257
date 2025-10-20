import express from 'express';
import userRoutes from './routes/user_router.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

// Middleware global de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

export default app;