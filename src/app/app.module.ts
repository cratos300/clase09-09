import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { DetalleComponent } from './componente/detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { AltaProductoComponent } from './componente/alta-producto/alta-producto.component';
import { ListadoProductosComponent } from './componente/listado-productos/listado-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    DetalleComponent,
    AltaProductoComponent,
    ListadoProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
