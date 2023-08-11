import { Component, Input } from '@angular/core';
import { Islider } from './interfaces/interface';
import { slider } from "./constants/constants";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  // @Input() images: Islider[] = [];
  sliders = slider;
  indicators: boolean = true;

  selectedIndex = 0;
}