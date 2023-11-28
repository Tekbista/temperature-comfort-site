import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  curYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

  followUs(social:string){
    if(social === 'facebook'){
      window.open('https://www.facebook.com/temperaturecomfort', '_blank');
    } else if (social === 'twitter') {
      window.open('https://www.twitter.com', '_blank');
    } else if(social === 'insta'){
      window.open('https://www.instagram.com/', "_blank");
    }
  }

}
