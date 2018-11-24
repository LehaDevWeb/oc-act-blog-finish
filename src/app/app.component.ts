import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
posts = [
  {
    title: "Mon premier post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed vestibulum neque. Aliquam ut porttitor urna, in tincidunt lorem. Nulla eget metus lacinia turpis tincidunt tincidunt ut vitae nunc.",
    loveIts: 1,
    created_at: Date()
  },
  {
    title: "Mon deuxième post",
    content: "Phasellus vel nisl velit. Praesent finibus pretium libero sed varius. Phasellus dignissim ultricies neque sodales laoreet. Suspendisse potenti.",
    loveIts: -1,
    created_at: Date()
  },
  {
    title: "The last post",
    content: "Curabitur molestie semper lacus, vitae vehicula purus. Aenean ex urna, aliquam iaculis ultricies vitae, feugiat sit amet odio. Nulla aliquet dapibus augue sit amet placerat. Nullam tempus pulvinar velit finibus tempor. Sed nec lobortis quam, interdum consectetur velit.",
    loveIts: 0,
    created_at: Date()
  }
];

}
