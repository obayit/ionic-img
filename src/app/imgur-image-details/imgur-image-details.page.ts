import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImgurSubredditResponse } from '../interfaces';

@Component({
  selector: 'app-imgur-image-details',
  templateUrl: './imgur-image-details.page.html',
  styleUrls: ['./imgur-image-details.page.scss'],
})
export class ImgurImageDetailsPage implements OnInit {
  item: ImgurSubredditResponse;

  constructor(private route: ActivatedRoute, private photoViewer: PhotoViewer) { }

  ngOnInit() {
    this.item = history.state;
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }

  onImageClick(ev){
    console.log('image clicked');
    this.photoViewer.show(this.item.link);
  }

}
