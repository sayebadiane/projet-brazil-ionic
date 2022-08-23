
import { boissonTaille, menu } from "./boissonTaille"
import { Produit } from "./produit"


export interface ComplementDetail {
    burgers?: Produit
    nbrBurger?: number
    menus?: menu
    nbrMenu?: number
    boissontailles?: boissonTaille[]
    portionfrites?: Produit[]

}