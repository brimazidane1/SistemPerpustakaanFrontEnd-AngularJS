import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.component.html',
  styleUrls: ['./buku-edit.component.scss']
})
export class BukuEditComponent implements OnInit {

  constructor(private http:HttpClient) { }

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

  doPUT(id,judul_buku,penerbit_buku,pengarang_buku,tahun_terbit_buku){
    this.http.put('http://localhost:8080/buku',{
      id_buku:id,
      judul_buku:judul_buku,
      penerbit_buku:penerbit_buku,
      pengarang_buku:pengarang_buku,
      tahun_terbit_buku:tahun_terbit_buku
    })
    .subscribe(hasil=>{
      console.log(hasil)
    });
  };

}

