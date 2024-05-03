import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; 
import { Contact } from '../../classes/Contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { SelectionModel } from '@angular/cdk/collections'
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatTableModule,
            MatCheckboxModule,
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule, 
            MatInputModule,
            MatSelectModule,
            MatDialogModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    selection = new SelectionModel<Contact>(true, []);
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  

  displayedColumns: string[] = ['nom', 'prenom', 'contact','actions']; // Définissez les colonnes que vous voulez afficher dans l'ordre souhaité
  dataSource = new MatTableDataSource<Contact>(this.contacts); // Utilisez MatTableDataSource pour gérer les données dans la table

  constructor(private contactService: ContactService, private router: Router, private dialog: MatDialog) {}

ngOnInit(): void {

  this.contactService.findAll().subscribe(

    (data) => {

      this.contacts = data;

      this.dataSource.data = this.contacts;
      console.log('Contacts:', this.contacts);

    },

    (error) => {

      console.error('Error:', error);

    }

  );

}

// Fonction pour la suppression de plusieur elements

delete(){
  
}

new_contact(){
  localStorage.removeItem('curentContact')
  this.router.navigate(['/nouveaucontact']);
}

//Colone Action: mise a jour et suppréssion

editElement(elements: any): void {
  this.router.navigate(['/updatecontact',elements?.id]);

  localStorage.setItem('curentContact',JSON.stringify(elements))
  // const selectedContact = this.contacts.find(contact => contact.id === id);
  // if (selectedContact) {
  //   // Naviguer vers le composant 'nouveau-contact' avec les détails du contact sélectionné
  //   this.router.navigate(['/nouveaucontact'], { state: { contact: selectedContact } });
  // } else {
  //   console.error('Selected contact not found');
  // }
}

// deleteElement(element: Contact): void {
//   // Action pour supprimer un élément
//   console.log("Delete element with ID:", element.id);

// }
deleteElement(id: number): void {
  this.contactService.deleteContact(id).subscribe(
    (response) => {
      // Traitement après la suppression réussie
      window.location.reload();
      console.log('Contact deleted successfully:', response);
    },
    (error) => {
      // Gestion des erreurs
      console.error('Error deleting contact:', error);
    }
  );
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected(): boolean {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle(): void {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
}

}