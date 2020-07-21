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

  constructor() { }

  ngOnInit() {
  }

}
