import app from './app/app.js';

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});