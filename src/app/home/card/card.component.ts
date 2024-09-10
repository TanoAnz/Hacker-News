import { Component, Input, OnInit } from '@angular/core';
import { news } from '../../model/news.model';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
@Input() id!: number;
news!: news;
formattedDate!: string;
constructor( private dataService: DataService, public datePipe: DatePipe){
  
}
  ngOnInit(): void {
    this.dataService.getNews(this.id).subscribe({
      next: (data: news) =>{
        this.news=data;
        console.log('news caricata', this.news)
      },
      error: (err) => {
        console.error("Errore nel caricamento della news", err)
      }
    });
  }
  onClick(){
    window.open(this.news.url, '_blank');
  }
  convertDate(): string | null {
    return this.news && this.news.time
      ? this.datePipe.transform(new Date(this.news.time * 1000), 'dd/MM HH:mm')
      : null;
  }
}
