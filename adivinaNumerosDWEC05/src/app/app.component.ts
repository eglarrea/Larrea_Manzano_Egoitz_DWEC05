import { Component, OnInit } from '@angular/core';
import { Configuracion } from './modelos/Configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {

  title = 'adivinaNumerosDWEC05';
  tituloh1= "Juego de adivinación de números Aleatorios - DWEC05";
  numeroIntento:number;
  nombreJugador:string;
  acertado:boolean|null;
  configuracion:Configuracion;

  constructor() { 
    
    this.numeroIntento=0;
    this.acertado=null;
    this.configuracion=new Configuracion();
    this.nombreJugador='';
    
  }

  //Funcion que se ejecuta al pulsar el boton Recoger datos
  generateRandom():void{
    if(!this.configuracion.generarRandom()){
      alert("Informa todo el formulario. Los datos numericos no pueden tener decimales y tiene que ser mayor de 0");
    }else{
      this.acertado=null;
      this.nombreJugador=this.configuracion.jugador.getNombreCompleto();
    }
  }

  // Funcion que se ejecuta al pulsar el boton de Enviar
  comprueba():void{
    if(null!= this.configuracion.numeroInsertado){
      if(this.configuracion.numeroInsertado > this.configuracion.jugador.rango){
        alert('El numero introducido no está en el rango de números generados');
      }else{
        console.log(Number.isInteger(this.configuracion.numeroInsertado));
        if(this.configuracion.numeroInsertado<0 || !Number.isInteger(this.configuracion.numeroInsertado)){
          alert('Introduzca un numero igual o mayor que 0 y/o sin decimales');
        }else{
          this.acertado=this.configuracion.comprobar();
          if(this.configuracion.intentos==0 || this.acertado){
            setTimeout(() =>{
              if (confirm('Fin de la partida, ¿Otra?')){
                this.reiniciarJuego();
              }else{
                this.reiniciarJuego();
                this.configuracion.juegoFinalizado=true;
              }
            }, this.configuracion.jugador.intentos*25);
            
          }
        }
      }
    }else{
      alert('Introduzca un numero');
    }
  }

  private reiniciarJuego():void{
    this.numeroIntento=0;
    this.configuracion=new Configuracion();
    this.nombreJugador="";
    this.acertado=null;
  }
 
}
