import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  b_id="bannerID";
  pading="0px";
  wdth="100%";
  constructor() { }

  ngOnInit(): void {
  }

}
