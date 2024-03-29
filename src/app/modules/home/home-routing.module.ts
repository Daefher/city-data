import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent,
    children: [
      { path: '',component: HomeViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
