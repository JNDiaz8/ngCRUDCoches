import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';
import { InicioComponent } from './inicio/inicio.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InicioComponent

  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
