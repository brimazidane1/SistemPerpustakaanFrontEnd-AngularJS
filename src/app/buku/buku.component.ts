import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.scss']
})
export class BukuComponent implements OnInit {

  constructor(private http:HttpClient ) {}

  httpdata;
  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.http.get('http://localhost:8080/buku').subscribe(data => {
      console.log(data)
      this.httpdata = data;
    });
  }

  deleteData(id){
    this.http.delete('http://localhost:8080/buku/'+id)
    .subscribe(hasil => {
      console.log(hasil)
      this.fetchData()
    })
  }

}
