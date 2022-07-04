//Interface de las respuestas del servidor para la ruta de las Alertas
export interface Alert{
    _id: string;
    name: string; 
    dataTriggerMax: number;
    dataTriggerMin: number;
    email: string;
    status: number;
    error:string;
    isNull: boolean;
}

//Interface de las respuestas del servidor para la ruta de LineChart (Grafica Lineal)
export interface LineChart{
    _id: string;
    name: string;
    data: number[];
    error:string;
    isNull: boolean;
}

//Interface de las respuestas del servidor para la ruta de RadialChart
export interface RadialChart{
    _id: string;
    name: string;
    dataNow: number;
    dataMin: number;
    dataMax: number;
    error:string;
    isNull: boolean;
}

export interface Excel{
    path: string;
    name: string;
    error:string;
    isNull: boolean;
}