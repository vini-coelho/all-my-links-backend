import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import User from '../models/User';

const store = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = userRespository.create(request.body);
  const result = await userRespository.save(user);

  return response.json(result);
};

const index = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const users = await userRespository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.links', 'link')
    .getMany();

  return response.json(users);
};

const show = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = await userRespository.findOne(request.params.id);

  return response.json(user);
};

const destroy = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = await userRespository.findOne(request.params.id);

  const result = await userRespository.delete(user.id);

  return response.json(result);
};

const update = async (request: Request, response: Response) => {
  const userRespository = getRepository(User);

  const user = await userRespository.findOne(request.params.id);

  const result = userRespository.merge(user, request.body);

  const updatedUser = await userRespository.save(result);

  delete updatedUser.password;

  return response.json(updatedUser);
};

export default {
  store, index, show, update, destroy,
};