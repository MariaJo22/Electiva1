import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  IsUsuario= true
  personas:Usuario[]=[
    {id:1, nombre:"nombre", apellido:"juan"},
    {id:2, nombre:"nombre", apellido:"juan"},
    {id:3, nombre:"nombre", apellido:"juan"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
