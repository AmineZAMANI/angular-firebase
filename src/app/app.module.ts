import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableExampleComponent } from './table-example/table-example.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    TableExampleComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.config),
    BrowserModule,
    MatTableModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
