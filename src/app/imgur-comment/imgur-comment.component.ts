import { Component, OnInit, Input } from '@angular/core';
import { ImgurComment } from '../interfaces';

@Component({
  selector: 'imgur-comment',
  templateUrl: './imgur-comment.component.html',
  styleUrls: ['./imgur-comment.component.scss'],
})
export class ImgurCommentComponent implements OnInit {
  @Input() comment: ImgurComment;
  @Input() isChild = false;
  commentIsImage = false;
  commentIsVideo = false;

  constructor() { }

  ngOnInit() {
    this.checkCommentIsImage();
    console.log('comment: ', this.comment);
    console.log(this.commentIsImage)
  }

  checkCommentIsImage(){
    this.commentIsImage = this.comment.comment.match(/\.(jpeg|jpg|gif|png)$/) != null;
    this.commentIsVideo = this.comment.comment.match(/\.(mp4|gifv)$/) != null;
  }

}
