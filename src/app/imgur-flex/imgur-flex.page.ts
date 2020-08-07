import { Component, OnInit } from '@angular/core';
import { ImgurSearchResponse, generateLinks } from '../interfaces';
import { ImgurService } from '../services/imgur-service';

@Component({
  selector: 'app-imgur-flex',
  templateUrl: './imgur-flex.page.html',
  styleUrls: ['./imgur-flex.page.scss'],
})
export class ImgurFlexPage implements OnInit {
  query: string = 'funny';
  items: ImgurSearchResponse[] = [];

  constructor(private imgurService: ImgurService) { }

  ngOnInit() {
    this.goSearch();
  }
  goSearch(){
    if(!this.query){
      return;
    }
    this.imgurService.getSearchResult(this.query).subscribe((result: {data: ImgurSearchResponse[]})=>{
      let res: ImgurSearchResponse[] = [];
      for(let item of result.data){
        generateLinks(item);
        res.push(item);
      }
      this.items = res;
      console.log(this.items);
    });
  }
}
