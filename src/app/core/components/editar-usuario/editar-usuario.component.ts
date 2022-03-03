import { Component, OnInit } from '@angular/core';
import { Usuario } from '../estructura/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

}
