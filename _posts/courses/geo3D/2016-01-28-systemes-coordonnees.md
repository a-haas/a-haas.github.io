---
layout: courses
title:  Les système de coordonnées
categories: courses geo3D
---

## Les coordonnées cartésiennes

En 2D

En 3D

Distance

$$
d(M_{1}M_{2})
=
\begin{pmatrix}x_{1}\\y_{1}\\z_{1}\end{pmatrix}
\times
\begin{pmatrix}x_{2}\\y_{2}\\z_{2}\end{pmatrix}
=
\sqrt{(x_{2}-x_{1}) + (y_{2}-y_{1}) + (z_{2}-z_{1})}
$$

## Les coordonnées barycentriques

En 1D

En 2D

Soient M<sub>1</sub>(x<sub>1</sub>, y<sub>1</sub>), M<sub>2</sub>(x<sub>2</sub>, y<sub>2</sub>), M<sub>3</sub>(x<sub>3</sub>, y<sub>3</sub>) trois points quelconques distincts et non alignés. On appelle coordonnées barycentriques m<sub>1</sub>, mw<sub>2</sub>, m<sub>3</sub> du point M les nombres uniques tels que $$\vec{OM} = m_1\vec{OM_1} + m_2\vec{OM_2} + m_3\vec{OM_3}$$ et m<sub>1</sub> + m<sub>2</sub> + m<sub>3</sub> = 1.

### Interprétation géométrique

$$m_1 = \frac{aire(M M_2 M_3)}{aire(M_1 M_2 M_3)}$$, etc...

*	M = M<sub>1</sub> m<sub>1</sub> = 1, m<sub>2</sub> = 0, m<sub>3</sub> = 0.  

*	M = milieu[M<sub>1</sub>M<sub>2</sub>] m<sub>1</sub> = $$\frac{1}{2}$$, m<sub>2</sub> = $$\frac{1}{2}$$, m<sub>3</sub> = 0  

*	M est le barycentre du triangle alors m<sub>1</sub> = m<sub>2</sub> = m<sub>3</sub> = $$\frac{1}{3}$$  

*	Si M est à l'intérieur ou sur le bord du triangle, coordonnées barycentriques sont positives ou nulles.

### Propriété importante des coordonnées barycentriques

"Invariance par transformation affine"

Si un point M et le triangle M<sub>1</sub>M<sub>2</sub>M<sub>3</sub> sont déplacés par une transformation affine alors le point M' image de M par la transformation a ses coordonnées barycentriques inchangées par rapport au triangle transformé.

## Les coordonnées polaires, cylindriques et sphériques

### Coordonées polaires dans le plan

$$\sin \varphi = \frac{cote oppose}{hypothenuse} = \frac{y}{\rho} <=> y = \rho \sin \varphi$$

on peut donc passer des coordonnées cartésiennes aux coordonnées polaires

$$\cos \varphi = \frac{cote adjacent}{hypothenuse} = \frac{x}{\rho} <=> x = \rho \cos \varphi$$

Des coordonnées cartésiennes aux coordonnées polaires : 

$$\rho^2 = x^2 + y^2$$ (Pythagore)

$$tan \varphi^= \frac{\sin \varphi}{\cos \varphi} = \frac{oppose}{adjacent} = \frac{y}{x}$$ (à utiliser pour déterminer $$\varphi$$ en fonction des signes x et y)

### Coordonnées cylindriques dans l'espace

Soit un point M($$\rho$$, $$\varphi$$, z) ces coordonnées cylindriques.

$$\begin{equation}
  \label{eq:t}
  \begin{gathered}
    x = \rho \cos \varphi\\
    y = \rho \sin \varphi\\
    z
  \end{gathered}
\end{equation}$$

### Coordonnées sphériques dans l'espace

$$\rho$$ la distance de O à M.  
$$\varphi$$ l'angle dans le sens directr entre 0x et $$\vec{ON}$$ (N étant la projection de M sur le plan xOy).  
&theta; l'angle entree $$\vec{OM}$$ et Oz.  
M(&rho;, &phi;, &theta) les coordonnéees sphériques.

$$\begin{equation}
	\label{eq:s}
	\begin{gathered}
		z = \rho \cos \theta \\
		\| \vec{ON} \| = \rho \cos \theta \\
		\cos \varphi = \frac{x}{\rho \sin \theta} \Leftrightarrow x = \rho \sin \theta \cos \varphi \\
		\sin \varphi = \frac{y}{\rho \sin \theta} \Leftrightarrow y = \rho \sin \theta \sin \varphi \\
		z = \rho \cos \theta
	\end{gathered}
\end{equation}$$

&rho; &isin; [0, +&infin;[  
&phi; &isin; [0, 2&pi;[  
&theta; &isin; [0, &pi;[ 