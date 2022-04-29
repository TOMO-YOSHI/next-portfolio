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

export const getWorks = async (type: string | string[] | undefined = undefined): Promise<any> => {
  return await client
    .getEntries({
      content_type: "portfolio",
      "fields.workType[in]": type,
      order: "fields.order",
    })
    .then(response => response);
};

const getImageAsset = async(id: string): Promise<any> => {
  return await client
    .getAsset(id)
    .then(asset => asset)
}

export const getListOfImageAssets = async (contentfulRes: any): Promise<any> => {
  return Promise.all(contentfulRes.items.map((item:any) => getImageAsset(item.fields.image[0].sys.id)));
}

export const getWorksWithAsset = async (type: string | string[] | undefined = undefined): Promise<Work[]> => {
  const response = await getWorks(type);
  const assets = await getListOfImageAssets(response);

  return response.items.map((item: any, index: number) => {
    const imageUrl = "https:" + assets[index].fields.file.url;
    const imageAlt = assets[index].fields.title;

    let coreTechnology = [];
    item.fields.coreTechnology.forEach(el => {
      coreTechnology.push(el)
    });

    let workName = item.fields.workName;

    if (workName.indexOf("_") > -1) {
      workName =
        workName.slice(0, workName.indexOf("_")) +
        " " +
        workName.slice(workName.indexOf("_") + 1);
    }

    return {
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
  })
}
// export const parseContentfulResponse = (contentfulRes: any) => {
//   const fetchedWorks = [];

//   contentfulRes.items.forEach(async (item: any, index) => {
//     const result = await client
//       .getAsset(item.fields.image[0].sys.id)
//       .then((asset) => {
//         const imageUrl = "https:" + asset.fields.file.url;
//         const imageAlt = asset.fields.title;

//         let coreTechnology = [];
//         item.fields.coreTechnology.forEach(el => {
//           coreTechnology.push(el)
//         })

//         let workName = item.fields.workName;

//         if (workName.indexOf("_") > -1) {
//           workName =
//             workName.slice(0, workName.indexOf("_")) +
//             " " +
//             workName.slice(workName.indexOf("_") + 1);
//         }

//         const work: Work = {
//           id: index,
//           name: workName,
//           image: {
//             url: imageUrl,
//             alt: imageAlt,
//           },
//           coreTechnology: coreTechnology,
//           youtubeIframe: item.fields.youTubeUrl,
//           description: item.fields.aboutThisWork,
//           webPageUrl: item.fields.webPageUrl,
//           githubUrl: item.fields.githubUrl
//         }

//         fetchedWorks.push(work);

//         if (contentfulRes.items.length === fetchedWorks.length) {
//           fetchedWorks.sort((a, b) => a.id - b.id);
//           // res.status(200).json(fetchedWorks)
//           return fetchedWorks
//         }
//       }).then(response => response);

//       return result;
//   });
// }