import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  @Input('item') item: BudgetItem;
  @Output('xButtonClick') xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output('cardClick') cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
