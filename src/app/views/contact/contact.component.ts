import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private https: HttpClient) { }
  url = 'https://us-central1-adirmachado-a0948.cloudfunctions.net/sendEmail';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  contact = {
    name: '',
    email: '',
    message: ''
  }

  sendEmail() {
    this.https.post(this.url, this.contact, this.httpOptions).subscribe(
      response => {
        if (response.toString()) {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Seu formulário foi enviado.',
            icon: 'success',
            confirmButtonText: 'OK',
          })
        } else {
          Swal.fire({
            title: 'error!',
            text: 'Seu formulário não foi enviado.',
            icon: 'error',
            confirmButtonText: 'OK',
          })
        }
      },
      error => {
        Swal.fire({
          title: 'error!',
          text: 'Seu formulário não foi enviado.',
          icon: 'error',
          confirmButtonText: 'OK',
        })
      }
    );



    
    this.contact = {
      name: '',
      email: '',
      message: ''
    }
  }
}

