import { Component, HostListener, OnInit } from '@angular/core';
import { size } from './constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent implements OnInit {

  sizes = size;
  windowsWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowsWidth = window.innerWidth;
  }

  constructor(private navigate: Router) {
    
  }

  ngOnInit(){
    this.onResize();
  }

  view(){
    this.navigate.navigate(["/compra"]);
  }

}