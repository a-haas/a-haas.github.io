---
layout: courses
title:  Les transformations géométriques
categories: courses geo3D
---

## Transformation géométrique dans le plan (2D)

### Transformations linéaires et affines

Soit un point P(x, y) une application de la forme F(P) = TP et une transformation linéaire P'(x', y') = $$ \begin{pmatrix}a & b \\ c & d \end{pmatrix} . \begin{pmatrix} x \\ y \end{pmatrix} $$ ou bien
$$\begin{equation}
  \label{eq:t}
  \begin{gathered}
    x = ax + by\\
    y' = cx + dy
  \end{gathered}
\end{equation}
$$

### Exemples de transformations affines

#### Translation (affine) 

F(P) = $$ \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} . P + 
\begin{pmatrix} tx \\ ty \end{pmatrix} $$

#### Rotation d'angle &theta; par rapport à l'origine :

cos &alpha; = coté adjacent / hypothénuse = x / r   
sin &alpha; = coté opposé / hypothénuse = y / r

$$ \begin{equation}
	\label{eq:s}
	\begin{gathered}
		x = r \cos \alpha \\
		y = r \sin \alpha
	\end{gathered}
\end{equation}
$$

$$
\begin{equation}
	\label{eq:s1}
	\begin{gathered}
		x' = r \cos (\alpha + \theta) = r . \cos \alpha . \cos \theta - r . \sin \alpha . \sin \theta  \\
		y' = r \sin (\alpha + \theta) = r . \cos \alpha . \sin \theta + r . \sin \alpha . \cos \theta 
	\end{gathered}
\end{equation}
$$

ce qui donne

$$
\begin{equation}
	\label{eq:s2}
	\begin{gathered}
		x' = \cos \theta . x - r . \sin \theta . y  \\
		y' = \sin \theta . x + \cos \theta . x . \cos \theta . y 
	\end{gathered}
\end{equation}	
$$ 

$$ R_{\theta} = 
\begin{pmatrix}
	\cos \theta & -\sin \theta \\
	\sin \theta & \cos \theta
\end{pmatrix}
.
\begin{pmatrix} x \\ y \end{pmatrix}
$$

$$ R_{\pi/2} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} $$

$$ R_{\pi/4} = \begin{pmatrix} \sqrt{2}/2 & \sqrt{2}/2 \\ -\sqrt{2}/2 & \sqrt{2}/2 \end{pmatrix} $$

#### Homothétie ou changement d'échelle

De facteur h<sub>x</sub> selon O<sub>x</sub> et h<sub>y</sub> selon O<sub>y</sub>

#### Symétrie

#### Composition de transformations

<u>rappel</u> sur la composition d'applications linéaires

<!-- f rond g -->
(f &#8728; g)x = f(g(x))
(F &#8728; G)P = F(G(P))

Pour composer des transformations affines (linéaires + translations) on passe en coordonées homogènes.

$$\begin{pmatrix} x' \\ y' \\ w' \end{pmatrix} = \begin{pmatrix} a & b & 0 \\ c & d & 0 \\ 0 & 0 & 1\end{pmatrix} . \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = 
\begin{equation}
	\label{eq:s3}
	\begin{gathered}
		x' = ax + by  \\
		y' = cx + dy \\
		w' = 1
	\end{gathered}
\end{equation}	
$$