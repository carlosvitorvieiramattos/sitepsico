import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SobreComponent } from './pages/sobre/sobre';
import { ServicosComponent } from './pages/servicos/servicos';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: 'home' }
];
