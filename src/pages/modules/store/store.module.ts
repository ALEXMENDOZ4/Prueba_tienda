import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from 'src/pages/store/store.component';
import { MenuComponent } from 'src/pages/store/components/menu/menu.component';
import { PhotosComponent } from 'src/pages/store/components/photos/photos.component';
import { InformationComponent } from 'src/pages/store/components/information/information.component';
import { BuyComponent } from 'src/pages/buy/buy.component';
import { SliderComponent } from 'src/pages/slider/slider.component';
import { FooterComponent } from 'src/pages/footer/footer.component';



@NgModule({
  declarations: [
    StoreComponent,
    MenuComponent,
    PhotosComponent,
    InformationComponent,
    BuyComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class StoreModule { }
