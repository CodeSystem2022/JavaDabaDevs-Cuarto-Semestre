import Jwt from 'jsonwebtoken';

export const isAtuh = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No estas authorizado' });
  }
  await Jwt.verify(token, 'xyz123', (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'No estas authorizado' });
    }
    req.usuarioId = decoded.id;
  });
  next();
};
