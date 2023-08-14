import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    PostListComponent,
    AdminLoginComponent,
    ConfirmationDialogComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    QuillModule
  ]
})
export class AdminModule { }
