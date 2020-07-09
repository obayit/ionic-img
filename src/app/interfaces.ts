export interface ImgurSubredditResponse{
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
}

export interface ImgurSearchResponse{
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
  images?: [{
    link?: string;
    linkSmall?: string, //  s = Small Square (90x90)
    linkBig?: string, // b = Big Square (160x160)
    linkThumbnail?: string, // t = Small Thumbnail (160x160)
    linkMedium?: string, // m = Medium Thumbnail (320x320)
    linkLarge?: string, // l = Large Thumbnail (640x640)
    linkHugeThumbnail?: string, // h = Huge Thumbnail (1024x1024)
  }]
}