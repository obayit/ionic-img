import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../services/imgur-service';
import { ImgurSearchResponse as ImgurSearchResponse } from '../interfaces'

@Component({
  selector: 'app-imgur-search',
  templateUrl: './imgur-search.page.html',
  styleUrls: ['./imgur-search.page.scss'],
})
export class ImgurSearchPage implements OnInit {
  query: string = 'cats';
  items: ImgurSearchResponse[] = [];

  constructor(private imgurService: ImgurService) { }

  ngOnInit() {
    this.goSearch();
  }
  clickSearchBar(){
  }
  generateLinks(item: any){
    item.link = item.link.replace('h.', '.');
    let dotLocation = item.link.indexOf('.', 19);
    item.linkSmall = item.link.substring(0, dotLocation) + 's' + item.link.substring(dotLocation);
    item.linkMedium = item.link.substring(0, dotLocation) + 'm' + item.link.substring(dotLocation);
    item.linkThumbnail = item.link.substring(0, dotLocation) + 't' + item.link.substring(dotLocation);
  }
  goSearch(){
    if(!this.query){
      return;
    }
    this.imgurService.getSearchResult(this.query).subscribe((result: {data: ImgurSearchResponse[]})=>{
      let res: ImgurSearchResponse[] = [];
      for(let item of result.data){
        if(item.is_album){
          for(let image of item.images){
            this.generateLinks(image);
          }
        }else{
          this.generateLinks(item);
        }
        res.push(item);
      }
      this.items = res;
      console.log(this.items);
    });
  }
}
//https://i.imgur.com/CX7nr3lt.gif //# not working
//http://i.imgur.com/CX7nr3lht.gif //# notworking
//https://i.imgur.com/CX7nr3lht.gif //# was not notworking missing s
//https://i.imgur.com/CX7nr3lt.gif //# working
//https://i.imgur.com/CX7nr3lht.gif
//https://i.imgur.com/CX7nr3lht.gif