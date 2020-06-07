import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'books', component: BookComponent, children: [{ path: 'create', component: BookCreateComponent }]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
