import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImgurSubredditResponse, ImgurSearchResponse } from '../interfaces';
import { NONE_TYPE } from '@angular/compiler';
import { ImgurService } from '../services/imgur-service';

@Component({
  selector: 'app-imgur-image-details',
  templateUrl: './imgur-image-details.page.html',
  styleUrls: ['./imgur-image-details.page.scss'],
})
export class ImgurImageDetailsPage implements OnInit {
  item: ImgurSearchResponse | ImgurSubredditResponse;
  comments = [];
  sort = 'best';

  constructor(private route: ActivatedRoute, private router: Router, private photoViewer: PhotoViewer, private imgurService: ImgurService) { }

  ngOnInit() {
    this.item = history.state;
    if(!this.item.id){
      // console.log('redirecting to search page');
      // this.router.navigate(['/imgur-search']);
    }else{
      this.imgurService.getComments(this.item.id+'', this.sort).subscribe((result: any) => {
        console.log('comments are');
        console.table(result.data);
        this.comments = result.data;
      });
    }
    console.log('item');
    console.log(this.item);
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }

  onImageClick(ev){
    console.log('image clicked');
    this.photoViewer.show(this.item.link);
  }
  getTagImage(tag: any){
    if(!tag.background_hash){
      return '';
    }
    return 'https://imgur.com/' + tag.hash + 'b.jpg';
  }
}
