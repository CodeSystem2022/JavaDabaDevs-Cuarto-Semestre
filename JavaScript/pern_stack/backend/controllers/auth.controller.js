import { pool } from '../db.js';
import bcrypt from 'bcrypt';
import md5 from "md5";

import { createAccessToken } from '../libs/jwt.js';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  if (result.rowCount === 0) {
    return res.status(400).json({ message: 'El correo no está registrado' });
  }
  const validPassword = await bcrypt.compare(password, result.rows[0].password);
  if (!validPassword) {
    return res.status(400).json({ message: 'La contraseña es incorrecta' });
  }
  const token = await createAccessToken({ id: result.rows[0].id });
  res.cookie('token', token, {
    // httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24,
  })
  return res.json(result.rows[0]);
}

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://gravatar.com/avatar/${md5(email)}`
    const result = await pool.query('INSERT INTO usuarios (name, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *', [
      name,
      email,
      hashedPassword,
      gravatar,
    ]);
    const token = await createAccessToken({ id: result.rows[0].id });
    res.cookie('token', token, {
      // httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24,
    })
    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(400).json({ message: 'El correo ya esta registrado' });
    }
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie('token')
  return res.json({ message: 'Sesión cerrada' });
}

export const profile = async (req, res) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [req.usuarioId]);
  return res.json(result.rows[0]);
};
