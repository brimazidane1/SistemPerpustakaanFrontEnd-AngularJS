import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peminjaman-form',
  templateUrl: './peminjaman-form.component.html',
  styleUrls: ['./peminjaman-form.component.scss']
})
export class PeminjamanFormComponent implements OnInit {

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

  doPOST(nis_siswa,nama_siswa,jurusan_siswa,tgl_peminjaman,tgl_pengembalian,buku_id_buku){
    this.http.post('http://localhost:8080/peminjaman',{
      "nis_siswa": nis_siswa,
      "nama_siswa": nama_siswa,
      "jurusan_siswa": jurusan_siswa,
      "tgl_peminjaman": tgl_peminjaman,
      "tgl_pengembalian": tgl_pengembalian,
      "buku": {
          "id_buku": buku_id_buku
      }
  })
    .subscribe(hasil=>{
      console.log(hasil)
    });
  };

}

