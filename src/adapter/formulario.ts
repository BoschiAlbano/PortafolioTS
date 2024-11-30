export interface AdapterFormulariotype {
    msj: string;
    error?: string[];
    estado: boolean;
}

export function AdapterFormulario(data: any): AdapterFormulariotype {
    return {
        estado: data?.estado,
        msj: data?.msj,
        error: data?.error,
    };
}
