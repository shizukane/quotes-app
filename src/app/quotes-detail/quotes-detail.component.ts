import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() deleteit = new EventEmitter<boolean>();
  
  quoteDeleting(deleting: boolean) {
    this.deleteit.emit(deleting);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
