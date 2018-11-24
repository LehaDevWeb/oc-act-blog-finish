import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  getContent() {
    return this.content;
  }

  getColor() {
    if( this.loveIts > 0 ) {
      return 'green';
    } else if ( this.loveIts < 0 ) {
      return 'red';
    }
  }

  onLoveIt() {
    this.loveIts++;
    console.log( this.loveIts );
  }

  onDontLoveIt() {
    this.loveIts--;
    console.log( this.loveIts );
  }
}
