import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationStart, ResolveEnd,
  Router,
} from '@angular/router';
@Component({
  selector: 'ds-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {
  url:string;
  title:string;
  constructor(private router: Router,) { 

    
  }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       

       this.url= window.location.href;
       this.title =document.title;
        
      }
    });

  }

  isShow: boolean=false;
 
  show(){
    return this.isShow=!this.isShow
  }


}
