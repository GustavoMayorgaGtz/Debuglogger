//Interface de las respuestas del servidor para la ruta de las Alertas
export interface Alert{
    _id: string;
    name: string; 
    dataTrigger: number;
    email: string;
    status: number;
}

//Interface de las respuestas del servidor para la ruta de LineChart (Grafica Lineal)
export interface LineChart{
    _id: string;
    name: string;
    data: number[];

}

//Interface de las respuestas del servidor para la ruta de RadialChart
export interface RadialChart{
    _id: string;
    name: string;
    dataNow: number;
    dataMin: number;
    dataMax: number;
}
export interface Excel{
    path: string;
}