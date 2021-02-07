import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import User from '../models/User';

const store = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const userExists = await userRespository.findOne({
    email: request.body.email,
  });

  if (userExists) {
    return response.status(400).json({ message: 'User already exists.' });
  }

  const user = userRespository.create(request.body);
  const result = await userRespository.save(user);
  return response.json(result);
};

const index = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const users = await userRespository.find({
    relations: ['links'],
  });

  return response.json(users);
};

const show = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const { id } = request.params;

  const user = await userRespository.findOne(id, {
    relations: ['links'],
  });

  if (!user) return response.status(404).json({ message: 'User not found.' });

  return response.json(user);
};

const showByUsername = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const { username } = request.params;
  const user = await userRespository.findOne({
    where: {
      username,
    },
    relations: ['links'],
  });

  if (!user) return response.status(404).json({ message: 'User not found.' });

  return response.json(user);
};

const destroy = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = await userRespository.findOne(request.params.id);

  if (!user) return response.status(404).json({ message: 'User not found.' });

  const result = await userRespository.delete(user.id);

  return response.json(result);
};

const update = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = await userRespository.findOne(request.params.id);

  if (!user) return response.status(404).json({ message: 'User not found.' });

  const result = userRespository.merge(user, request.body);

  const updatedUser = await userRespository.save(result);

  delete updatedUser.password;

  return response.json(updatedUser);
};

export default {
  store, index, show, showByUsername, update, destroy,
};
