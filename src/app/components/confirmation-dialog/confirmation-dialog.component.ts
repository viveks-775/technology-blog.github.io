import { Component, Input, Output, EventEmitter } from '@angular/core';
// Models
import { BlogPost } from 'src/app/models/blogPost.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  @Input() message: string = 'Are you sure?';
  @Input() title:string='';
  @Input() selectedData = {} as any;
  @Output() confirmed = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  confirm(id:string) {
    this.confirmed.emit(id);
  }

  cancel() {
    this.cancelled.emit();
  }
}
