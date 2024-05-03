import { Component } from '@angular/core';
import { Contact } from '../../classes/Contact';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { NouveauContactService } from '../../services/nouveau-contact.service';


@Component({
  selector: 'app-nouveau-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule, MatFormFieldModule, RouterModule],
  templateUrl: './nouveau-contact.component.html',
  styleUrl: './nouveau-contact.component.css'
})
export class NouveauContactComponent {
  newContact: Contact = new Contact()
  isupdate: boolean=false

  selectedContact: Contact | null = null;
  constructor(private nouveaucontactService: NouveauContactService,
    private activatedroute:ActivatedRoute,
     private router: Router)
   {}

  ngOnInit(): void {
    // Récupérer les détails du contact sélectionné à partir des paramètres de routage
    const state = history.state;
    if (state && state.contact) {
      this.selectedContact = state.contact;
    }
    this.activatedroute.snapshot.params['id']
    let newcontact = localStorage.getItem('curentContact');
    if (newcontact !== null  ) {
      this.isupdate = true
      this.newContact=JSON.parse(newcontact)
    }
  }

  envoyer(){
    console.log(this.newContact)
    this.nouveaucontactService.contactStore(this.newContact).subscribe(
      response => {
        console.log('Réponse de l\'API:', response);
        // Traitez la réponse de l'API si nécessaire
        alert('Inscription réussie !');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contact']);
        });      },
      error => {
        console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        // Gérez l'erreur
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/nouveaucontact']);
        });
      }
    );
  }

  update(){
    console.log(this.newContact)
    this.nouveaucontactService.updateStore(this.newContact, this.newContact.id).subscribe(
      response => {
        console.log('Réponse de l\'API:', response);
        // Traitez la réponse de l'API si nécessaire
        alert('Mise a jour réussite réussie !');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/contact']);
        });      },
      error => {
        console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        // Gérez l'erreur
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/nouveaucontact']);
        });
      }
    );


  }

}
