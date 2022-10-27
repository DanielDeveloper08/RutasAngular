import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  empleadoId:number;
  //Se inyecta la dependencia ActiveRoute.
  constructor(private activatedRoute: ActivatedRoute) { 
    this.empleadoId=0;
  }


  //se accede a los parametros mediante su suscripcion.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.empleadoId = params['empleadoId'];
    })
  }

}
