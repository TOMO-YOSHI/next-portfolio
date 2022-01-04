import { NextApiRequest, NextApiResponse } from 'next'
const { works } = require('./data.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "GET") {
    res.status(200).json(works)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed.`})
  }
}
