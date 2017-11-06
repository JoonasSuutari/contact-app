import { Component } from '@angular/core';
import {Contact} from './contact/contact';
import { ContactService} from './contact/services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact list';
  contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Joonas', 'Suutari', '0501234567', 'Metsäsaimaankatu', 'Lappeenranta'),
      new Contact(2, 'Esa', 'Esimerkki', '0502345678', 'Esimerkkikatu', 'Helsinki'),
      new Contact(3, 'Petteri', 'Punakuono', '0503456789', 'Joulukatu', 'Korvatunturi')
    ];
  }
}
