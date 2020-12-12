import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { BukuComponent } from '../../buku/buku.component';
import { PeminjamanComponent } from '../../peminjaman/peminjaman.component';
import { BukuFormComponent } from '../../buku-form/buku-form.component';
import { PeminjamanFormComponent } from '../../peminjaman-form/peminjaman-form.component'; 
import { BukuEditComponent } from '../../buku-edit/buku-edit.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'buku',     component: BukuComponent },
    { path: 'peminjaman',     component: PeminjamanComponent },
    { path: 'peminjaman-form',     component: PeminjamanFormComponent },
    { path: 'buku-form',     component: BukuFormComponent },
    { path: 'buku-edit',     component: BukuEditComponent },
];
