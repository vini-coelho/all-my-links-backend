import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import Link from '../models/Link';
import User from '../models/User';

const store = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);
  const user = await getRepository(User).findOne(request.params.user_id);

  const link = linkRespository.create({
    ...request.body, user,
  });
  const result = await linkRespository.save(link);

  return response.json(result);
};

const index = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);

  const links = await linkRespository.find();

  return response.json(links);
};

const show = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);

  const link = await linkRespository.findOne(request.params.id);

  return response.json(link);
};

const destroy = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);

  const link = await linkRespository.findOne(request.params.id);

  const result = await linkRespository.delete(link.id);

  return response.json(result);
};

const update = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);

  const link = await linkRespository.findOne(request.params.id);

  const result = linkRespository.merge(link, request.body);

  const updatedLink = await linkRespository.save(result);

  return response.json(updatedLink);
};

export default {
  store, index, show, update, destroy,
};
