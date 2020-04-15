import { Component } from '@angular/core';

export interface Transaction {
  date: string;
  name: string;
  category: string;
  incoming: number;
  outgoing: number;
}

const TRANSACTION_DATA: Transaction[] = [
  {date: '04/20/2020', name: 'Old Country Bakery', category: 'Grocery', incoming: 0, outgoing: 9.00}
];


@Component({
  selector: 'accounts-transactions',
  templateUrl: './accounts-transactions.component.html',
  styleUrls: ['./accounts-transactions.component.css']
})
export class AccountsTransactionsComponent {
  displayedColumns: string[] = ['date', 'name', 'category', 'incoming', 'outgoing'];
  dataSource = TRANSACTION_DATA;
}
