import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './blog/about/about.component';
import { ContactComponent } from './blog/contact/contact.component';

const routes: Routes = [ 
  // Blog routes
{
  path: '',
  loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule)
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
