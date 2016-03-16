---
layout: courses
title:  Les polygones
categories: courses geo3D
---

### Définition (informelle)

Un polygone est une région du plan bordée par un ensemble fini de segment formant une courbe fermée simple.

<span class="legende simple"></span>: polygone simple  
<span class="legende non-simple"></span>: polygone non simple

### Définition

Soit p<sub>0</sub>, p<sub>1</sub>, ..., p<sub>n-1</sub> une suite de points du plan, ordonée et cyclique (p<sub>n</sub> = p<sub>0</sub>).

Soient e<sub>0</sub> = p<sub>0</sub>p<sub>1</sub>, ..., e<sub>i</sub> = p<sub>i</sub>p<sub>i+1</sub>, e<sub>n-1</sub> = p<sub>n-1</sub>p<sub>0</sub>, une suite de segments fermés, incluant les points extrémités.

*   Ces segments bordent un polygone (région).
*   Ces segments forment un polygone (ses bords) si et seulement si leur trace est une courbe simple. Pour qu'une courbe soit simple :
    1.  e<sub>i</sub> ∩ e<sub>i+1</sub> = p<sub>i+1</sub> ∀i de 0 à n-1.  
        Ces segments sont dits adjacents en un unique point.
    2.  e<sub>i</sub> ∩ e<sub>i+1</sub> = ∅ ∀j ≠ i+1.  
        Les segments non adjacents n'ont aucune intersection.
*   Un polygone possède deux sens d'orentation :
    *   Sens trigonométrique : <i class="fa fa-undo"></i>
    *   Sens horaire : <i class="fa fa-repeat"></i>   
    
    Dans ce cours, la convention sera d'utiliser le sens trigonométrique, aka. sens inverse des aiguilles d'une montre.

## Vocabulaire

Les points p<sub>i</sub> sont appelés sommets. Les segments e<sub>i</sub> sont quand à eux appelés arêtes, côtés ou bien en anglais edges.

## Propriétés

### Théorème de Jordan

Une courbe fermée simple du plan le divise en deux composantes, son intérieur et son extérieur.

Un sommet est dit concave si son angle intérieur est strictement supérieur à Π, alors il est dit convexe. Un polygone est dit convexe si tous ses angles sont convexes. Si au moins un des ses angles est concave alors le polygone est dit concave.

## Opérations

### Localisation

Soit P = (p<sub>0</sub>, p<sub>1</sub>, ..., p<sub>n-1</sub>) un polygone. Soit M(x,y) un point. M appartient-il à l'intérieur de P ?

### Parcours de tous les points à l'intérieur de P, exemple coloration

parcourir tous les points contenus dans une boîte englobant le polygone (pas très efficace).

### Découpage

Le découpage est utilisé pour afficher une fenêtre (cadre d'une caméra par exemple), ou alors pour cacher des polygones en arrière plan lorsque ceux-ci se croisent, etc...

### Algorithme de balayage

### Localisation par la méthode des angles

Si la somme des angles est égale à 0 alors le point est à l'extérieur du polygone.  
Si M ∈ P alors la somme des angles est égale à 2Π

### Localisation à l'aide de la notion d'indice

#### Théorème

Soit P un polygone (simple ou non), soit D une droite ne passant pas par un sommet de P alors soit D ne coupe pas P, soit D coupe P en un nombre pair de points q<sub>1</sub>, q<sub>2k</sub> distincts, ordonnés sur D et les segments.  
]Q<sub>1</sub>, Q<sub>2</sub>[, ..., ]Q<sub>2k-1</sub>, Q<sub>2k</sub>[ sont à l'intérieur de P.  
]Q<sub>2</sub>, Q<sub>3</sub>[, ..., ]Q<sub>2k</sub>, Q<sub>∞</sub>[ sont à l'extérieur de P.

### Définition

Soit M(x,y) ∈ ℝ² \ P. On appelle indice de M par rapport à P noté Ip(M) selon une demi-droite Δ, issue de M et ne passant pas par un sommet de P, le nombre d'intersections entre P et D ou nombre de côtés de P coupé par Δ.

#### Théorème

La parité de Ip(M) ne dépend pas du choix de Δ et de plus, M ∈ int(P) <=> Ip(M) est impair, M ∈ ext(P) <=> Ip(M) est pair.

### Algorithme par test de parité

<pre><u>Hypothèse</u> : 
M ∈ P
Δ droite horizontale vers la droite
<u>Initialisation</u> : I = 0
<u>Pour tout</u> côté c <u>de</u> P <u>faire</u>
	calculer card(c ∩ Δ)
	I = I + card(c ∩ Δ)
<u>fin pour</u>
<u>Si</u> I impair <u>alors</u>
	M ∈ int(P)
<u>sinon</u>
	M ∈ ext(P)
</pre>

La complexité de cet algorithme est de θ(n).