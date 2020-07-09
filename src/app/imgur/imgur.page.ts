import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../services/imgur-service'
import { ImgurSubredditResponse } from '../interfaces'

interface SubredditList{
  subreddit?: string;
  nsfw?: boolean;
}

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.page.html',
  styleUrls: ['./imgur.page.scss'],
})
export class ImgurPage implements OnInit {
  subreddit: string = 'funny';
  subredditList: SubredditList[];
  initialSubredditList: SubredditList[] = [{
    subreddit: 'funny',
    nsfw: false
   },{
     subreddit: 'cpp',
    nsfw: false
   }];
  showSubredditList = false;
  response: ImgurSubredditResponse[];

  constructor(private imgurService: ImgurService) { }

  ngOnInit(){
    this.bootstrapSubredditsList();
    this.goSubreddit();
  }
  onIonError(){
    console.log('onIonError');
  }
  onIonImgDidLoad(){
    console.log('onIonImgDidLoad');
  }
  onIonImgWillLoad(){
    console.log('onIonImgWillLoad');
  }
  goSubreddit(){
    if(!this.subreddit){
      return;
    }
    this.showSubredditList = false;
    this.imgurService.getSubredditGallery(this.subreddit.trim()).subscribe((result: any) => {
      // console.log('Imgur Subreddit');
      // console.log(result);
      let response = result.data;
      for(let item of response){
        if(item.is_album){
          continue;
        }
        let dotLocation = item.link.indexOf('.', 19);
        item.linkSmall = item.link.substring(0, dotLocation) + 's' + item.link.substring(dotLocation);
        item.linkMedium = item.link.substring(0, dotLocation) + 'm' + item.link.substring(dotLocation);
        item.linkThumbnail = item.link.substring(0, dotLocation) + 't' + item.link.substring(dotLocation);
        // console.log('"'+item.linkThumbnail+'"');
      }
      this.response = response;
      console.log('Imgur Subreddit Transformed for "' + this.subreddit + '"');
      console.log(this.response);
    });
  }

  bootstrapSubredditsList(){
    this.imgurService.getSubredditList().subscribe((result: any)=>{
      console.log('reddit data');
      console.log(result);
      this.initialSubredditList = [];
      for(let item of result.data.children){
        this.initialSubredditList.push({
          subreddit: item.data.display_name,
          nsfw: item.data.over18
        });
      }
      console.log('bootstarp');
      console.log(this.initialSubredditList);
      this.initializeItems();
    });
  }

  initializeItems(){
    this.subredditList = [...this.initialSubredditList];
  }

  getItems(ev){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.subredditList = this.subredditList.filter((item) => {
        return (item.subreddit.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  clickSearchBar(){
    console.log('click');
    console.log(this.subredditList);
    this.showSubredditList = true;
  }
  outFocusSearchBar(){
    console.log('OUTfocus');
    // this.showSubredditList = false;
  }
  onSubredditClick(ev){
    console.log(ev);
    this.subreddit = ev.target.textContent;
    this.goSubreddit();
  }
}
