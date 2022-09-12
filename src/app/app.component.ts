import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  collection: any;
  userFilter:any;
  p=1;
  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
      const url = "https://jsonplaceholder.typicode.com/posts";
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection =  data;
    })
  };
}