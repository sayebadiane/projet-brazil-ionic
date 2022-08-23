
import { menuBurgers } from "./menuBurger"
import { menuportionfrites } from "./menuportionFrite"
import { menuTailles } from "./menuTaille"

import { Produit } from "./produit"
import { taille } from "./taille"


export interface boissonTaille {

    id?: number
    stoke?: number
    boisson: Produit
    taille: taille

}
export interface menu {

    id?: number
    nom?: string
    image?: Blob
    type?: string
    prix?: number
    menuBurgers: menuBurgers[]
    menuTailles: menuTailles[]
    menuPortionFrites: menuportionfrites[]



}