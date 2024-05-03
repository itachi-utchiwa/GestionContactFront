import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';
import { NouveauContactComponent } from './pages/nouveau-contact/nouveau-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';

export const routes: Routes = [
    {path:'connexion', component: ConnexionComponent},
    {path: '', redirectTo:'/connexion', pathMatch:'full'},
    {path:'inscription', component: InscriptionComponent},
    {path:'contact', component: ContactComponent},
    {path:'nouveaucontact', component: NouveauContactComponent},
    {path:'updatecontact/:id', component: NouveauContactComponent}

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
  
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }
