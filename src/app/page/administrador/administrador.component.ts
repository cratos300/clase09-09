import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  colorActual:string;
  arrayProductos:any = [];
  constructor() 
  {
    this.colorActual = 'celeste';
  }
  CambiarColorAdministrado()
{
  this.colorActual = 'transparente';
}
agregarNuevoProducto(producto:any)
{
  this.arrayProductos.push(producto);
}
cambiarColorParametro(data:any)
{
  this.colorActual = data;
}

  ngOnInit(): void {
  }

}
