import app from './app';

const PORT = process.env.PORT || 3010;

app.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`Server running on port ${PORT}`);
});
