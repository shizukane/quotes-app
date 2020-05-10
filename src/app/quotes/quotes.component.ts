import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes('The Way Get Started Is To Quit Talking And Begin Doing.', 'Ken',
      ' Walt Disney', new Date()),
    new Quotes('The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', 'Samatha', ' Winston Churchill',
      new Date()),
    new Quotes('If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You',
      'Magret', 'Steve Jobs', new Date()),
    new Quotes('If love is as sweet as a flower, then my mother is that sweet flower of love.Happy Mothers Day',
      'Shizukane', ' Stevie Wonder', new Date()),
    new Quotes('If love is as sweet as a flower, then my mother is that sweet flower of love.Happy Mothers Day',
      'Shizukane', ' Stevie Wonder', new Date()),
      new Quotes('If love is as sweet as a flower, then my mother is that sweet flower of love.Happy Mothers Day',
      'Shizukane', ' Stevie Wonder', new Date()),  
  ]

  mostLikedQuote: string;
  mostLikedAuthor: string;
  mostLikedPoster : string;

  mostVotes = 0;


  deleteQuote(deleteit: any, index: any) {
    if (deleteit) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,)
 
    }
  }
}
  toogleDetails(index: any) {
    this.quotes[index].showInformation = !
      this.quotes[index].showInformation;
  }

  addNewQuotes(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  counter1 = 0;
  counter2 = 0;

  upvote(quote) {
    quote.counter1 = quote.counter1 + 1;
  }
  downvote(quote) {
    quote.counter2 = quote.counter2 + 1;
  }

  getMostLikedQuote(){
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].counter1 > this.mostVotes){
        this.mostVotes = this.quotes[i].counter1;
        this.mostLikedPoster = this.quotes[i].name;
        this.mostLikedQuote = this.quotes[i].information;
        this.mostLikedAuthor = this.quotes[i].author;

      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
