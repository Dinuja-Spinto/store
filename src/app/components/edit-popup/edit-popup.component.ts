import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { Product } from '../../../type';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<Product>();

  @Input() product: Product = {
    name: '',
    image:'',
    price:'',
    rating:0
  };

  onConfirm(){
    this.confirm.emit(this.product);
  }

  onCancel(){
    this.display = false;
  }
}
