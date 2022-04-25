import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'contentful';

interface Image {
  url: string;
  alt?: string;
}

interface Work {
  id: number;
  name: string;
  image?: Image;
  coreTechnology: string[];
  youtubeIframe?: string;
  description: string;
  webPageUrl?: string;
  githubUrl?: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;

  if (req.method === "GET") {

    try {
      const contentfulRes = await client
        .getEntries({
          content_type: "portfolio",
          "fields.workType[in]": type,
          order: "fields.order",
        })
        .then(response => response);

      const fetchedWorks = [];

      contentfulRes.items.forEach(async (item: any, index) => {
        client
          .getAsset(item.fields.image[0].sys.id)
          .then((asset) => {
            const imageUrl = "https:" + asset.fields.file.url;
            const imageAlt = asset.fields.title;

            let coreTechnology = [];
            item.fields.coreTechnology.forEach(el => {
              coreTechnology.push(el)
            })

            let workName = item.fields.workName;

            if (workName.indexOf("_") > -1) {
              workName =
                workName.slice(0, workName.indexOf("_")) +
                " " +
                workName.slice(workName.indexOf("_") + 1);
            }

            const work: Work = {
              id: index,
              name: workName,
              image: {
                url: imageUrl,
                alt: imageAlt,
              },
              coreTechnology: coreTechnology,
              youtubeIframe: item.fields.youTubeUrl,
              description: item.fields.aboutThisWork,
              webPageUrl: item.fields.webPageUrl,
              githubUrl: item.fields.githubUrl
            }

            fetchedWorks.push(work);

            if (contentfulRes.items.length === fetchedWorks.length) {
              fetchedWorks.sort((a, b) => a.id - b.id);
              res.status(200).json(fetchedWorks)
            }
          })
      });

    } catch(error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed.`})
  }
}
