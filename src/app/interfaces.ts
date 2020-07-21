export interface ImgurSubredditResponse{
  id?: string;
  title?: string,
  link?: string,
  linkSmall?: string, //  s = Small Square (90x90)
  linkBig?: string, // b = Big Square (160x160)
  linkThumbnail?: string, // t = Small Thumbnail (160x160)
  linkMedium?: string, // m = Medium Thumbnail (320x320)
  linkLarge?: string, // l = Large Thumbnail (640x640)
  linkHugeThumbnail?: string, // h = Huge Thumbnail (1024x1024)
  is_album?: boolean,
  type?: string,
  images?: [{
    link?: string;
    linkSmall?: string, //  s = Small Square (90x90)
    linkBig?: string, // b = Big Square (160x160)
    linkThumbnail?: string, // t = Small Thumbnail (160x160)
    linkMedium?: string, // m = Medium Thumbnail (320x320)
    linkLarge?: string, // l = Large Thumbnail (640x640)
    linkHugeThumbnail?: string, // h = Huge Thumbnail (1024x1024)
    type?: string,
  }]
}

export interface ImgurSearchResponse{
  id: string;
  title: string;
  link: string;
  linkSmall?: string, //  s = Small Square (90x90)
  linkBig?: string, // b = Big Square (160x160)
  linkThumbnail?: string, // t = Small Thumbnail (160x160)
  linkMedium?: string, // m = Medium Thumbnail (320x320)
  linkLarge?: string, // l = Large Thumbnail (640x640)
  linkHugeThumbnail?: string, // h = Huge Thumbnail (1024x1024)
  is_album?: boolean,
  height?: number;
  cover?: string;
  images?: [{
    link?: string;
    linkSmall?: string, //  s = Small Square (90x90)
    linkBig?: string, // b = Big Square (160x160)
    linkThumbnail?: string, // t = Small Thumbnail (160x160)
    linkMedium?: string, // m = Medium Thumbnail (320x320)
    linkLarge?: string, // l = Large Thumbnail (640x640)
    linkHugeThumbnail?: string, // h = Huge Thumbnail (1024x1024)
    type?: string,
  }]
  ups?: number,
  comment_count?: number,
  datetime?: number,
  points?: number,
  images_count?: number,
  tags?: [
    {
        name?: string,
        display_name?: string,
        background_hash?: string,
        thumbnail_hash?: string,
    }
  ],
  views?: number,
}

export interface ImgurComment{
  id: string,
  comment: string,
  author: string,
  children: ImgurComment[],
  ups: string,
  downs: string
}

export function generateLinks(item: any){
  if(item.is_album){
    item.link = 'https://i.imgur.com/' + item.cover + '.jpg'
  }
  item.link = item.link.replace('h.', '.');
  let dotLocation = item.link.indexOf('.', 19);
  item.linkSmall = item.link.substring(0, dotLocation) + 's' + item.link.substring(dotLocation);
  item.linkThumbnail = item.link.substring(0, dotLocation) + 't' + item.link.substring(dotLocation);
  item.linkMedium = item.link.substring(0, dotLocation) + 'm' + item.link.substring(dotLocation);
  item.linkHugeThumbnail = item.link.substring(0, dotLocation) + 'h' + item.link.substring(dotLocation);
  // item.title = item.title + item.title + item.title + item.title + item.title + item.title + item.title;
  item.o__date = new Date(item.datetime * 1000);
  if(! item.is_album){
    item.images_count = 1;
  }
}
