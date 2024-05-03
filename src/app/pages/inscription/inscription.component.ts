import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../classes/user';
import { InscriptionService } from '../../services/inscription.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule, MatFormFieldModule, RouterModule ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

  user: User = new User('','','');

  constructor(private inscriptionService: InscriptionService, private router: Router) {}

  envoyer(){
    console.log(this.user)
    this.inscriptionService.inscription(this.user).subscribe(
      response => {
        console.log('Réponse de l\'API:', response);
        // Traitez la réponse de l'API si nécessaire
        alert('Inscription réussie !');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/connexion']);
        });      },
      error => {
        console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        // Gérez l'erreur
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/inscription']);
        });
      }
    );
  }

}
