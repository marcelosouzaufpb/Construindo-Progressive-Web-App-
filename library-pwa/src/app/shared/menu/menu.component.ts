import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUrl: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.children.forEach(e => {
      this.isUrl = e.routeConfig.path;
    });
  }

  url(url: string) {
    this.isUrl = url;
  }
}
