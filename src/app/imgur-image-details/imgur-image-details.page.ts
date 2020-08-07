import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImgurSubredditResponse, ImgurSearchResponse, ImgurComment, generateLinks } from '../interfaces';
import { NONE_TYPE } from '@angular/compiler';
import { ImgurService } from '../services/imgur-service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-imgur-image-details',
  templateUrl: './imgur-image-details.page.html',
  styleUrls: ['./imgur-image-details.page.scss'],
})
export class ImgurImageDetailsPage implements OnInit {
  item: ImgurSearchResponse | ImgurSubredditResponse;
  comments: ImgurComment[];
  sort = 'best';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private photoViewer: PhotoViewer,
    private imgurService: ImgurService,
    private localNotifications: LocalNotifications
    ) { }

  ngOnInit() {
    this.item = history.state;
    if(!this.item.id){
      console.log("Item is not passed from caller page");
      let hash = this.route.snapshot.queryParamMap.get('hash');
      if(hash){
        this.imgurService.getAlbum(hash).subscribe((result: any) => {
          this.item = result.data;
          this.prepareItemForView();
        });
      }
    }else{
      console.log('Passed Item from caller page is');
      console.log(this.item);
      this.prepareItemForView(); // this call is not redundant:
      // because if the item might not be ready, if it was not passed from a parent.
    }
    }
    prepareItemForView(){
      if(this.item && !this.item.images){
        console.log('we are in the beam #images_not_found');
        let imageItem = {
          link: this.item.link,
          type: this.item.type,
        }
        generateLinks(imageItem);
        console.log('setting images for single image post with:');
        console.log([imageItem]);
        this.item.images = [imageItem];
        console.log('it became');
        console.log(this.item.images);
        this.getComments();
    }
  }

  getComments(){
      this.imgurService.getComments(this.item.id+'', this.sort).subscribe((result: any) => {
        this.comments = result.data;
        this.localNotifications.schedule({
          id: 1,
          text: `There is ${this.comments.length} comments in this post`,
          sound: 'file://sound.mp3',
        });
        // console.log('comments are');
        // console.log(this.comments);
      });
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
