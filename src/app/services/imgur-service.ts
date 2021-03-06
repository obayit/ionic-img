import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {

  client_id = '974af89eab65f29';
  headers = {
      'Authorization': `Client-ID ${this.client_id}`,
  };
  requestOptions = {
    headers: new Headers(this.headers),
  };

  constructor(public http: HttpClient) {
  }

  getSubredditGallery(subreddit, sort='', window='', page=''){
    if(!this.client_id){
      return this.http.get('/assets/data/imgur-r-funny.json');
    }
    return this.http.get(`https://api.imgur.com/3/gallery/r/${subreddit}/${sort}/${window}/${page}`,
     {headers: this.headers});
  }
  getSubredditList(){
    return this.http.get(`http://api.reddit.com/subreddits/popular.json?limit=100&show=all`);
  }
  getSearchResult(query: string, sort='', window='', page=''){
    // return this.http.get('/assets/data/imgur-image-search.json');
    return this.http.get(`https://api.imgur.com/3/gallery/search/${sort}/${window}/${page}?q=${query}`,
     {headers: this.headers});
  }
  getGalary(hash: string){
    return this.http.get(`https://api.imgur.com/3/galary/album/${hash}`,
     {headers: this.headers});
  }
  getComments(galleryHash: string, sort = 'best'){
    return this.http.get(`https://api.imgur.com/3/gallery/${galleryHash}/comments/${sort}`,
     {headers: this.headers});
  }
  getAlbum(hash: string){
    return this.http.get(`https://api.imgur.com/3/gallery/album/${hash}`,
     {headers: this.headers});
  }
}
