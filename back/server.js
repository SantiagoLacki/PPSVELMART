import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 5050;

app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = req.body;

  fs.readFile('usuarios.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile('usuarios.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(201).send('User registered successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});