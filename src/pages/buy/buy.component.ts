import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  constructor(private navigate: Router) {
    
    
  }

  back(){
    this.navigate.navigate(["/"]);
  }

}