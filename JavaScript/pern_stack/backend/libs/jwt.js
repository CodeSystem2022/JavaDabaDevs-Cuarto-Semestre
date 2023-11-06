import Jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    Jwt.sign(payload, 'xyz123', { expiresIn: '1d' }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
