import { Component, OnInit } from '@angular/core';
import { ImgurComment } from '../interfaces';

@Component({
  selector: 'imgur-comment',
  templateUrl: './imgur-comment.component.html',
  styleUrls: ['./imgur-comment.component.scss'],
})
export class ImgurCommentComponent implements OnInit {
  comment: ImgurComment;
  isChild = false;

  constructor() { }

  ngOnInit() {
    console.log('Comment Component is Working');
    let comment = history.state;
    if(comment.id){
      this.comment = comment;
    }
  }

}
