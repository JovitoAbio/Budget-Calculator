import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output('delete') delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output('update') update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  onDeleteButtonClick(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    // Show the edit modal b
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '680px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // Check if result has a value
      if(result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  old: BudgetItem,
  new: BudgetItem
}
