import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private photoViewer: PhotoViewer, private imgurService: ImgurService) { }

  ngOnInit() {
    this.item = history.state;
    console.log('this.item');
    console.log(this.item);
    if(!this.item.id){
      this.route.queryParamMap.subscribe((params) => {
        let hash = params.get('hash');
        if(!hash){
          return;
        }
        this.imgurService.getGalary(hash).subscribe((result: any) => {
          console.log('getImage()');
          console.log(result);
          this.item = result;
        });
      });
    }
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
