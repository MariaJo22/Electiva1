import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { EstructuraComponent } from './core/components/estructura/estructura.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { EditarUsuarioComponent } from './core/components/editar-usuario/editar-usuario.component';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstructuraComponent,
    FooterComponent,
    EditarUsuarioComponent
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
