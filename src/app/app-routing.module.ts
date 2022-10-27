import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { InfoComponent } from './components/info/info.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  //ruta raiz localhost:4200
  { path:'', pathMatch:'full', redirectTo: 'informacion'},

  //rutas
  { path:'informacion', component: InfoComponent , canActivate: [RandomGuard]},
  { path:'about', redirectTo:'sobre'},
  { path:'sobre', component: AboutComponent },
  { path:'contacto', component: ContactComponent },
  
  //ruta dinamica agg : 
  { path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children:[
      //rutas hijas depende de la ruta padre, se debe agg un router outlet
      { path:'proyectos', component: ProyectosComponent},
      { path:'experienca', component: ExperienciaComponent},
      { path:'curriculum', component: CurriculumComponent},
    ]
  },

  //ruta si se escribe cualquier cosa
  { path:'**', redirectTo:'contacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
