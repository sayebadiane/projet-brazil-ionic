import { boissonTaille } from "./boissonTaille";

export interface taille {
    id?: number,
    libelle?: string,
    prix?: number,
    boissonTailles?: boissonTaille[]

}