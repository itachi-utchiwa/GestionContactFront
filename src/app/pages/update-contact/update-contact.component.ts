import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  standalone: true,
  imports: [],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css'
})
export class UpdateContactComponent {
  constructor(private activatedroute:ActivatedRoute) {
    this.activatedroute.snapshot.params['id']
    console.log(this.activatedroute.snapshot.params['id'])
  }

}
