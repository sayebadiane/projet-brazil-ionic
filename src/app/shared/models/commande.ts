import { Produit } from "./produit"


export interface Commande {
    id?: number,
    numeroCommande?: string,
    date?: Date,
    etat?: string,
    montant?: number
    burgerCommandes?: menuburgers[]
    menuCommandes?: menuburgers[]
    zone?: zone
    client?: client | null


}

export interface menuburgers {
    quantite?: number,
    burger?: Produit | null
    menu?: Produit | null



}
export interface zone {
    id?: number
    nom?: string
    prix?: number
}
export interface client {
    id?: number
    login?: string
}
