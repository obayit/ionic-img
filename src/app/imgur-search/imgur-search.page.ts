import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../services/imgur-service';
import { ImgurSearchResponse, generateLinks } from '../interfaces'

@Component({
  selector: 'app-imgur-search',
  templateUrl: './imgur-search.page.html',
  styleUrls: ['./imgur-search.page.scss'],
})
export class ImgurSearchPage implements OnInit {
  query: string = 'cats';
  items: ImgurSearchResponse[] = [];
  // items: any[] = [];
  constructor(private imgurService: ImgurService) { }

  ngOnInit() {
    this.goSearch();
  }
  clickSearchBar(){
  }
  goSearch(){
    if(!this.query){
      return;
    }
    this.imgurService.getSearchResult(this.query).subscribe((result: {data: ImgurSearchResponse[]})=>{
      let res: ImgurSearchResponse[] = [];
      for(let item of result.data){
        if(!item.comment_count){
          continue;
        }
        generateLinks(item);
        res.push(item);
      }
      this.items = res;
    });
  }
}
//   constructor() {
//     for (let i = 0; i < 1000; i++) {
//       this.items.push({
//         name: i + ' - ' + images[rotateImg],
//         imgSrc: getImgSrc(),
//         avatarSrc: getImgSrc(),
//         imgHeight: Math.floor(Math.random() * 50 + 150),
//         content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
//       });

//       rotateImg++;
//       if (rotateImg === images.length) {
//         rotateImg = 0;
//       }
//     }
//   }
// }

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// const images = [
//   'bandit',
//   'batmobile',
//   'blues-brothers',
//   'bueller',
//   'delorean',
//   'eleanor',
//   'general-lee',
//   'ghostbusters',
//   'knight-rider',
//   'mirth-mobile'
// ];

// function getImgSrc() {
//   const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
//   rotateImg++;
//   if (rotateImg === images.length) {
//     rotateImg = 0;
//   }
//   return src;
// }

// let rotateImg = 0;