import express from 'express';
import dockerRoutes from './routes/docker.routes';

const app = express();

const port = process.env.PORT || 8080;


app.use('/', dockerRoutes);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;