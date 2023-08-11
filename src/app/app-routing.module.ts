import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from 'src/pages/buy/buy.component';
import { StoreComponent } from 'src/pages/store/store.component';

const routes: Routes = [
  {
    path: "",
    component: StoreComponent
  },
  {
    path: "compra",
    component: BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
