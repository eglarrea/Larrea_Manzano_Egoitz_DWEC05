import { ConfiguracionInterface } from "./ConfiguracionInterface";
import { Jugador } from "./Jugador";

export class Configuracion implements ConfiguracionInterface{
    private _numeroInsertado: number;
   
    private _listaNumerosIntentos: Array<number>;
   
    private numeroAAcertar:number;
    private _formularioinformado: boolean;
   
    private _intentos: number | null;
    private _jugador: Jugador;

    private _juegoFinalizado: boolean;
   

    constructor(){
        this._numeroInsertado=-1;
        this._formularioinformado=false;
        this._listaNumerosIntentos=new Array<number>(0);
        this.numeroAAcertar=0;
        this._intentos=null;
        this._jugador=new Jugador();
        this._juegoFinalizado=false;
    }

    //Valida los datos del formulario.
    private validarDatos():boolean{
        if (this._jugador.nombre.trim()!='' && this._jugador.apellido.trim() !='' && this._jugador.rango > 0 && this._jugador.intentos>0 && Number.isInteger(this._jugador.rango) && Number.isInteger(this._jugador.intentos)){
            this._listaNumerosIntentos=new Array<number>(this._jugador.intentos);
            this._formularioinformado=true;
            this.intentos=this._jugador.intentos;
            this._numeroInsertado=-1;
            return true;
        }
        return false;
    }

    public generarRandom():boolean{
        if(this.validarDatos()){
            this.numeroAAcertar=Math.round(Math.random()  * this._jugador.rango);
            console.log ("Numero a adivinar:"+this.numeroAAcertar);
            return true;
        }
        return false;
    }

    //Comprueba el numero insertado si esl el mismo que el generado por random
    public comprobar():boolean{
        if( this._intentos!=null && this._intentos>0){
            if(this.numeroInsertado == this.numeroAAcertar){
                return true;
            }else{
                this.listaNumerosIntentos[this.listaNumerosIntentos.length - this._intentos]=this.numeroInsertado;
                this._intentos--;
                console.log("Quedan:"+this._intentos+" intentos");
                return false;
            }
        }else{
            return false;
        }
    }

    public get formularioinformado(): boolean {
        return this._formularioinformado;
    }
    public set formularioinformado(value: boolean) {
        this._formularioinformado = value;
    }

    public get jugador(): Jugador {
        return this._jugador;
    }

    public set jugador(value: Jugador) {
        this._jugador = value;
    }
    
    public get intentos(): number | null {
        return this._intentos;
    }
    public set intentos(value: number | null) {
        this._intentos = value;
    }

    public get numeroInsertado(): number {
        return this._numeroInsertado;
    }
    public set numeroInsertado(value: number) {
        this._numeroInsertado = value;
    }

    public get listaNumerosIntentos(): Array<number> {
        return this._listaNumerosIntentos;
    }

    public get juegoFinalizado(): boolean {
        return this._juegoFinalizado;
    }
    public set juegoFinalizado(value: boolean) {
        this._juegoFinalizado = value;
    }
   
}