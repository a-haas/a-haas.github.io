---
layout: courses
title:  Les coordonnees affines et rappels sur les vecteurs
categories: courses geo3D
---

Les vecteurs colinéaires et coplanaires dans l'espace :  
rappel : les vecteurs a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub> sont  

* soit <u>linéairement dépendants</u> s'il existe des nombres réels &alpha;<sub>1</sub>, &alpha;<sub>2</sub>, ..., &alpha;<sub>n</sub> non tous nuls tel que &alpha;<sub>1</sub>a<sub>1</sub>, &alpha;<sub>2</sub>a<sub>2</sub>, ..., &alpha;<sub>n</sub>a<sub>n</sub> = 0  

* soit <u>linéairement indépendants</u> si la relation &alpha;<sub>1</sub>a<sub>1</sub>, &alpha;<sub>2</sub>a<sub>2</sub>, ..., &alpha;<sub>n</sub>a<sub>n</sub> &ne; 0.

### Théorème

* 2 vecteurs sont colinéaires si et seulement si ils sont linéairement dépendants.

* 3 vecteurs sont coplanaires si et seulement si ils sont linéairement dépendants.

* 4 vecteurs sont linéairement dépendants.

En 3D, 3 vecteurs a, b et c linéairement indépendants forment une base dans laquelle tout vecteur d peut être exprimé.  
$$d = \lambda a + \mu b + \gamma c = \vec{OM} (\lambda, \mu, \gamma)$$ sont les coordonnées affines d'un point M (coordonnées cartésiennes a $$\perp$$ b $$\perp$$ c)

### Produit scalaire

$$a.b = ||a||.||b||.\cos \varphi$$

$$
\begin{pmatrix}X_{1}\\Y_{1}\\Z_{1}\end{pmatrix}
.
\begin{pmatrix}X_{2}\\Y_{2}\\Z_{2}\end{pmatrix}
=
X_1.X_2 + Y_1.Y_2 + Z_1.Z_2
$$

Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul.

### Produit vectoriel

c = a <sub>^</sub> b est tel que : 
 
* c est orthogonal à a et b

* $$ ||c|| = ||a||.||c|| \sin \varphi $$

* le triplet (a, b, c) est direct

$$
\begin{pmatrix}X_{1}\\Y_{1}\\Z_{1}\end{pmatrix}
\wedge
\begin{pmatrix}X_{2}\\Y_{2}\\Z_{2}\end{pmatrix}
=
\begin{pmatrix}Y_{1}.Z_2 - Z_1.Y_2 \\
	X_2 . Z_1 - X_1 . Z_2 \\
	X_1 . Y_2 - Y_1 . X_2
\end{pmatrix}
$$

### Coordonnées homogènes (affines)

#### Définition dans le plan (2D) :

On appelle X, Y, W les coordonnées homogènes d'un point M tel que :

* si la coordonnée homogène w &ne; 0 alors les coordonnées affines de M sont $$ (\frac{X}{W}, \frac{Y}{W}) $$

* si w = 0 alors M(X, Y, W) représente un point à l'infini ou la direction d'une droite portée par le vecteur (X, Y). 

Les coordonnées homogènes unifie la notation point et vecteur, facilite la composition des transformations géométriquers (cf. chapitre suivant) 

#### Définition dans l'espace (3D)

On appelle X, Y, Z, W les coordonnées homogènes d'un point M tel que : 

* si w &ne; 0 alors les coordonnées affines de M sont $$ (\frac{X}{W}, \frac{Y}{W}), \frac{Z}{W} $$

* si w = 0 alors M(X, Y, Z, W) représente le vecteur (X, Y, Z)

<u>N.B</u> : configuration interdite : (0, 0, 0) en 2D et (0, 0, 0, 0) en 3D