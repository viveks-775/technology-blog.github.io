import { Component } from '@angular/core';

/** Models */
import { Category } from '../models/category.model';

/** Services */
import { CategoryService } from '../services/category.service';
import { LoadingService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  isShowCreateCategory: boolean = false;
  category = {} as Category;
  showModal: boolean = false;
  confirmMessage: string = '';
  selectedCategory = {} as Category;
  categoryList = [] as Array<Category>;
  isEdit: boolean = false;
  constructor(private categoryService: CategoryService, public loadingService: LoadingService,
    private toastService: ToastService) {
    this._getCategoryList();
  }



  handleConfirm(categoryId: string) {
    console.log('handleConfirm categoryId: ', categoryId)
    // Your logic for confirmed action.
    this.categoryService.delete(categoryId).subscribe({
      next: (result) => {
        this._resetFields();
        console.log('delete category result: ', result)
        this.categoryList = this.categoryList.filter((category) => category.id !== categoryId)
      },
      error: (error) => {
        console.log('error: ', error)
      },
      complete: () => {
        this._resetFields();
      }
    });
  }

  handleCancel() {
    this._resetFields();
  }

  private _createCategory() {
    this.categoryService.createCategory(this.category.name).subscribe({
      next: ((result) => {
        console.log('create category result: ', result);
        this.categoryList.push(result);
        this.toastService.show('Category created successfully!', { type: 'bg-success', title: 'Success' });
      }),
      error: ((error) => {
        console.log("error:", error);
      }),
      complete: () => {
        console.log("completed api call");
        this.isShowCreateCategory = false;
      }
    })
  }

  private _updateCategory() {
    this.categoryService.update(this.category.id, this.category).subscribe({
      next: ((result) => {
        console.log('update category result: ', result);

        let ind = this.categoryList.findIndex(category => category.id === this.category.id);
        if (ind != -1) {
          let res = result;
          this.categoryList[ind] = this.category;
        }
        this.toastService.show('Category updated successfully!', { type: 'bg-success', title: 'Success' });
      }),
      error: ((error) => {
        console.log("error:", error);
      }),
      complete: () => {
        console.log("completed api call");
        this.isShowCreateCategory = false;
        this.category = {} as Category;
        this._resetFields();
      }
    })
  }

  private _resetFields() {
    this.selectedCategory = {} as Category;
    this.category = {} as Category;
    this.confirmMessage = '';
    this.showModal = false;
    this.isEdit = false;
  }

  onDeleteCategory(category: Category) {
    this.selectedCategory = category;
    this.confirmMessage = `Are you sure you want to delete ${category.name} category?`;
    this.showModal = true;
  }

  onCreateCategory() {
    this.isShowCreateCategory = true;
  }

  hideForm() {
    this.category = {} as Category;
    this.isShowCreateCategory = false;
  }

  private _getCategoryList() {
    this.loadingService.show(); // Show loader
    this.categoryService.getAll().subscribe({
      next: (result) => {
        console.log('_getCategoryList result: ', result);
        this.categoryList = result;
      },
      error: (error => {
        console.log('error while getting category list:', error);
      }),
      complete: () => {
        console.log("completed api");
        this.loadingService.hide(); // Hide loader
      }
    });
  }

  onEditCategory(category: Category) {
    console.log('onEditCategory category: ', category)
    this.isShowCreateCategory = true;
    this.isEdit = true;
    this.category.id = category.id;
    this.category.name=category.name;
  }

  onSubmit(categoryForm: any) {
    if (categoryForm.valid) {
      if (!this.isEdit) {
        // Create category
        this._createCategory();
      } else {
        // Update category
        this._updateCategory();
      }

    }
  }

}
