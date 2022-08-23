import { Produit } from "./produit"


export interface Catalogue {
    menus: Produit[]
    burgers: Produit[]
    produits?: Produit[]
}