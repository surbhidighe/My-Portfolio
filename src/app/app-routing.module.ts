import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';


const routes: Routes = [
  
 {path: 'about-me', component: AboutMeComponent}, 
 {path: 'works', component: MyWorkComponent},
 {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
