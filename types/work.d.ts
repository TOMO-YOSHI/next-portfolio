interface Image {
  url: string;
  alt?: string;
}

export interface Work {
  id: number;
  name: string;
  image?: Image;
  coreTechnology: string[];
  youtubeIframe?: string;
  description: string;
  webPageUrl?: string;
  githubUrl?: string;
  public?: boolean;
}