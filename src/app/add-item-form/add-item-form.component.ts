import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input('item') item: BudgetItem;
  @Output('formSubmit') formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void {
    // Check if item has a value
    if(this.item) {
      // This means that an existing item object was passed into this component
      // Therefore this item is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null)
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
