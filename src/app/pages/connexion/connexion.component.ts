import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Connexion } from '../../classes/connexion';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ROUTES, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { ConnexionService } from '../../services/connexion.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, RouterModule, HttpClientModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
connexion: Connexion = new Connexion('','');
  errorMessage: string = '';
constructor(private connexionService: ConnexionService, private router: Router) {}

  login(){
    console.log(this.connexion)
    this.connexionService.login(this.connexion).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Stockage du token dans le localStorage
        this.router.navigate(['/contact']); // Redirection vers le composant 'contact'
      },
      (error) => {
        this.errorMessage = 'Identifiants incorrects'; // Gestion de l'erreur
        console.error('Erreur lors de la connexion : ', error);
      }
    );
  }
 
}
