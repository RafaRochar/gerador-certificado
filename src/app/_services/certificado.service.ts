import { Injectable } from '@angular/core';
import { certificado } from '../interfaces/certificado';
import { stringify } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: certificado[] = [];

  constructor() { }

  adicionarCertificado (certificado: certificado) {
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados',JSON.stringify(this.certificados));


  }
}
