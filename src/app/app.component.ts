import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //inyeccion de dependencias
  constructor(private router:Router){
    
  }
  onClick(pRuta:string){
    //tareas previas
    console.log("se realizan tareas previas");
    //nos permite navegar a la ruta especificada por parametro.
    this.router.navigate([pRuta]);
  }
}
