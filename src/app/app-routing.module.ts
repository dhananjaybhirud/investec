import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';
import { HomeSearchComponent } from './home-search/home-search.component';

const routes: Routes = [
  { path: '', component: HomeSearchComponent },
  { path: 'feeling-lucky', component: FeelingLuckyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
