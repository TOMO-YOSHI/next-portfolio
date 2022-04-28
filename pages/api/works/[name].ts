import { NextApiRequest, NextApiResponse } from 'next'
import { getWorksWithAsset } from './utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { name } = req.query;
  
  if (req.method === "GET") {
    try {
      let response = await getWorksWithAsset();

      response = response.filter((el) => el.name.includes(name.toString()));

      res.status(200).json(response);

    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }

  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
