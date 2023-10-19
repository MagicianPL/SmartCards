import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryContentComponent } from './components/categoryContent/category-content/category-content.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: ':category', component: CategoryContentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for redirection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }