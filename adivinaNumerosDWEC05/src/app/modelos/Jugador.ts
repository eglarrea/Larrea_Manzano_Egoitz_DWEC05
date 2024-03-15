export class Jugador{
    private _nombre: string;
        private _apellido: string;
        private _intentos: number;
        private _rango: number;

    constructor(){
        this._nombre= "";
        this._apellido= "";
        this._intentos=0;
        this._rango=0;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    public get intentos(): number {
        return this._intentos;
    }
    public set intentos(value: number) {
        this._intentos = value;
    }
    public get rango(): number {
        return this._rango;
    }
    public set rango(value: number) {
        this._rango = value;
    }

    public getNombreCompleto():string{
        return this._nombre+" "+this.apellido;
    }
    
}