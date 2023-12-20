import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { FormularioEntrevistaComponent } from './entrevista/formulario-entrevista/formulario-entrevista.component';
import { ListarEntrevistaComponent } from './entrevista/listar-entrevista/listar-entrevista.component';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioEntrevistaComponent,
    ListarEntrevistaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAhKFk1ffZybHXPCfu-hGUV6bBZO6iFRkg',
      authDomain: 'candidato-ed8ac.firebaseapp.com',
      projectId: 'candidato-ed8ac',
      storageBucket: 'candidato-ed8ac.appspot.com',
      messagingSenderId: '678926219554',
      appId: '1:678926219554:web:2f74c698983231ca97cd7b',
      measurementId: 'G-3YLM0274NK'
    }),
    AngularFirestoreModule,
  ],
  providers: [
    { provide: SETTINGS, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
