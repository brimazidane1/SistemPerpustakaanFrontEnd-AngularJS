import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buku-form',
  templateUrl: './buku-form.component.html',
  styleUrls: ['./buku-form.component.scss']
})
export class BukuFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  doPOST(judul_buku,penerbit_buku,pengarang_buku,tahun_terbit_buku){
    this.http.post('http://localhost:8080/buku',{
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
