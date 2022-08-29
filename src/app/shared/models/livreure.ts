import { livraisons } from "./livraison"

export interface livreur {
    matriculeMoto?: string
    telephone?: string
    etat?: string
    id?: number
    login?: string
    livraisons?: livraisons[]

}