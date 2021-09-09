import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  @Output() seCreoUnNuevoProducto: EventEmitter<any> = new EventEmitter <any>();
  nuevoProducto = {nombre : '',precio:0,tipo:''};
  constructor() { }

  crearProducto()
  {
    let instancia = { nombre : this.nuevoProducto.nombre,precio : this.nuevoProducto.precio,tipo: this.nuevoProducto.tipo};
  
    this.seCreoUnNuevoProducto.emit(instancia);
  }
  ngOnInit(): void {
  }

}
