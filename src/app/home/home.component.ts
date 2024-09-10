import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { news } from '../model/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  id: number[]= [];
  recordPage= [0,1,2,3,4,5,6,7,8,9];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.fetchId()
  }
  fetchId(): void{
    this.dataService.getDati().subscribe({
      next: (data) => {
        
        this.id= data;
        console.log(this.id)
      },
      error: (err) => {
        console.error("Errore nel caricamento dei 500 id", err)
      }
    })
  }
  onClick(){
    for(let i=0; i<10; i++){
      let current= this.recordPage.length;
      this.recordPage.push(current);
      current++;
    }
    this.fetchId();
}
}
