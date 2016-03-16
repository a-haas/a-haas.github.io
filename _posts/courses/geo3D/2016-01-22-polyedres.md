---
layout: courses
title:  Les polyèdres
categories: courses geo3D
---

### Définition (informelle)

C'est une surface de &#8477;<sup>3</sup> subdivisée en sommets, arêtes rectilignes et faces polygonales planes et simples.

### Définition

Un polyèdre ℘ est un ensemble P de polygones P<sub>1</sub>, P<sub>f</sub> de ℝ<sup>3</sup> tel que

*   #### conditions géométrique

    int(P<sub>i</sub>) ∩ int(P<sub>j</sub>) = ∅ si i ≠ j. int(P<sub>i</sub>) est appelé FACE de ℘ notées F.
*   #### conditions topologique

    *   tout côté de tout polygone P<sub>i</sub>, dit arête de ℘ appartient à exactement 2 polygones dits adjacents.
    *   tout sommet de tout polygone, aussi sommet du polyèdre appartient à au moins deux faces qui peuvent être organisées en une permutation circulaire (F<sub>0</sub>, F<sub>1</sub>, ..., F<sub>k</sub>=F<sub>0</sub> tel que F<sub>i</sub> est adjacent à F<sub>i+1</sub>)
    *   le graphe des sommets et des arêtes est connexe.

## Localisation

Idem que pour la 2D avec la notion d'indice d'un point M par rapport à une demi-droite D. I<sub>p</sub>(M) par rapport à ℘  
I<sub>p</sub>(M) <=> M ∈ ℘  
I<sub>p</sub>(M) <=> M ∉ ℘  
avec la demi-droite ne passant ni par un sommet ni par une arête.

## Représentation des polyèdres

* Classiquement les polyèdres sont représentés par leurs faces, toutes, ensuite les faces peuvent être représentées soit par les sommets, soit par les arêtes.
	* les sommets  
		{ F<sub>1</sub> = {(x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>), (x<sub>n</sub>, y<sub>n</sub>, z<sub>n</sub>)}, F<sub>2</sub> = {...}, ..., F<sub>k</sub> = {...} }  
		ou avec une indirection  
		{ F<sub>1</sub>={S<sub>1</sub>}, ..., S<sub>n</sub>}, F<sub>2</sub>={...}, ..., F<sub>k</sub>={...} }  
		S<sub>1</sub> = (x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>)  
		S<sub>n</sub> = (x<sub>n</sub>, y<sub>n</sub>, z<sub>n</sub>)
	*  les arêtes  
		{ F<sub>1</sub>={E<sub>1</sub>, E<sub>2</sub>, ..., E<sub>n</sub>}, F<sub>2</sub>={...}, F<sub>k</sub>={...} }  
		E<sub>1</sub> = (S<sub>1</sub>S<sub>2</sub>)  
		...  
		E<sub>m</sub>  
		S<sub>1</sub> = (x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>)  
		S<sub>l</sub> = (x<sub>l</sub>, y<sub>l</sub>, z<sub>l</sub>)

* Représentations basées sur les arêtes avec des informations supplémentaires
	* les arêtes ailées (1975, Baumgard)
	* les demi-arêtes (1985, Weiler)

* Carte combinatoire 
	Cadre formel permettant d'extraire plusieurs structures de données en fonction des opérations fréquentes.  
	Mais les propriétés peuvent être définies formellement et permettent d'assurer la validité de la représentation (par ex : polyèdre "garanti")