import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryContentComponent } from './components/categoryContent/category-content/category-content.component';
import { CustomFlashcardFormComponent } from './components/custom-flashcard-form/custom-flashcard-form.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: ':category', component: CategoryContentComponent },
  { path: ':category', component: CategoryContentComponent },
  { path: 'favorites/custom', component: CustomFlashcardFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for redirection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }