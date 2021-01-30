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
  const user = await getRepository(User).findOne(request.params.user_id);

  const links = await linkRespository.find({ user });

  return response.json(links);
};

const show = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);
  const user = await getRepository(User).findOne(request.params.user_id);

  const link = await linkRespository.findOne(request.params.id);

  if (!link) {
    return response
      .status(404)
      .json({ message: 'Link not found.' });
  }

  if (link.user !== user) {
    return response
      .status(400)
      .json({ message: 'Link doesn\'t belong to given user.' });
  }

  return response.json(link);
};

const destroy = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);
  const user = await getRepository(User).findOne(request.params.user_id);

  const link = await linkRespository.findOne(request.params.id);

  if (!link) {
    return response
      .status(404)
      .json({ message: 'Link not found.' });
  }

  if (link.user !== user) {
    return response
      .status(400)
      .json({ message: 'Link doesn\'t belong to given user.' });
  }

  const result = await linkRespository.delete(link.id);

  return response.json(result);
};

const update = async (request: Request, response: Response) => {
  const linkRespository = getRepository(Link);
  const user = await getRepository(User).findOne(request.params.user_id);

  const link = await linkRespository.findOne(request.params.id);

  if (!link) {
    return response
      .status(404)
      .json({ message: 'Link not found.' });
  }

  if (link.user !== user) {
    return response
      .status(400)
      .json({ message: 'Link doesn\'t belong to given user.' });
  }

  const result = linkRespository.merge(link, request.body);

  const updatedLink = await linkRespository.save(result);

  return response.json(updatedLink);
};

export default {
  store, index, show, update, destroy,
};
