import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** Components */
import { PostListComponent } from './post-list/post-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path:'',
    component: AdminLoginComponent
  },
  {
    path:'posts',
    component:PostListComponent
  },
  {
    path:'categories',
    component:CategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
