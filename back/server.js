import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const app = express();
const port = 5050;

app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = req.body;

  // Read existing users
  fs.readFile('usuarios.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const users = JSON.parse(data);
    users.push(newUser);

    // Write updated users back to file
    fs.writeFile('usuarios.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(201).send('User registered successfully');
    });
  });
});



// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(express.json());

// app.post('/users', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const data = await fs.readFile('usuarios.json', 'utf8');
//     const usuarios = JSON.parse(data);

//     const lastUserId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id : 0;
//     const newUserId = lastUserId + 1;
//     const newUser = { id: newUserId, name, email, password };
//     usuarios.push(newUser);

//     await fs.writeFile('usuarios.json', JSON.stringify(usuarios));

//     res.status(201).json({ message: 'Usuario creado correctamente', userId: newUserId });
//   } catch (err) {
//     console.error('Error al guardar el usuario:', err);
//     res.status(500).json({ error: 'Error al guardar el usuario' });
//   }
// });

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});