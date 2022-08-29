import { Commande } from "./commande"
import { livreur } from "./livreure"

export interface livraisons {
    id?: number
    montantTotal?: number
    commande?: Commande[]
    livreur?: livreur
    etat?: string
}