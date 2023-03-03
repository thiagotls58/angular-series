import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/interfaces/account.model';

@Component({
  selector: 'app-owner-accounts',
  templateUrl: './owner-accounts.component.html',
  styleUrls: ['./owner-accounts.component.css']
})
export class OwnerAccountsComponent {

  @Input() accounts: Account[];
  @Output() onAccountClick: EventEmitter<Account> = new EventEmitter();

  onAccountClicked = (account: Account) => {
    this.onAccountClick.emit(account);
  }
}
