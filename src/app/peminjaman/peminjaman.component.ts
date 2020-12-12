import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.scss']
})
export class PeminjamanComponent implements OnInit {

  constructor(private http:HttpClient ) {}

  httpdata;
  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.http.get('http://localhost:8080/peminjaman').subscribe(data => {
      console.log(data)
      this.httpdata = data;
    });
  }

  deleteData(id){
    this.http.delete('http://localhost:8080/peminjaman/'+id)
    .subscribe(hasil => {
      console.log(hasil)
      this.fetchData()
    })
  }


}
