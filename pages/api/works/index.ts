import { NextApiRequest, NextApiResponse } from 'next';
import { getWorksWithAsset } from './utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { type } = req.query;

  if(type) {
    type = type[0].toUpperCase() + type.slice(1);
  }

  if (req.method === "GET") {
    try {
      const response = await getWorksWithAsset(type);
      res.status(200).json(response);

    } catch(error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed.`})
  }
}
