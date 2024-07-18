import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    const startDate = '2020-01-01';
    const endDate = '2020-12-31';
    this.transactionService.getTransactions(startDate, endDate).subscribe(data => {
      this.transactions = data;
    });
  }
}
