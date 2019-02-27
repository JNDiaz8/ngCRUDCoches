import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ErrorComponent } from './error/error.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldControl, MatFormFieldModule, MatSelectModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
