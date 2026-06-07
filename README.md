# Bilan Tailwind — Kristell Le Louarn

## Typographie

| Classe | Taille | Utilisé où |
|--------|--------|------------|
| `text-xs` | 12px | Liens nav |
| `text-2xl` | 24px | Logo KLL |
| `text-3xl` | 30px | Tagline italique |
| `text-6xl` | 60px | Nom principal |

## Espacements

| Classe | Valeur | Utilisé où |
|--------|--------|------------|
| `px-10` | 40px gauche/droite | Nav |
| `py-6` | 24px haut/bas | Nav |
| `px-4` | 16px gauche/droite | Contenu hero |
| `mb-3` | 12px bas | Sous-titre |
| `mb-4` | 16px bas | Nom principal |
| `mb-10` | 40px bas | Tagline |
| `mt-8` | 32px haut | Logo rond |
| `gap-8` | 32px | Entre les liens nav |

## Dimensions

| Classe | Valeur | Utilisé où |
|--------|--------|------------|
| `min-h-screen` | 100vh | Section hero |
| `w-20` / `h-20` | 80px | Logo rond |
| `w-14` / `h-14` | 56px | Image logo (suggestion) |

## Couleurs personnalisées

| Valeur | Utilisé où |
|--------|------------|
| `#f5f0e8` | Fond général |
| `#2a2520` | Texte principal |
| `#7a6a55` | Texte logo / accents |
| `#faf7f2` | Texte hero (blanc chaud) |
| `#c8bfaa` | Bordures |
| `white/20` | Bordure nav transparente |
| `white/90` | Liens nav semi-transparents |
| `black/40` `black/20` `black/55` | Overlay dégradé |

## Polices

| Police | Usage |
|--------|-------|
| `Cormorant Garamond` | Nom, tagline, logo — `.font-display` |
| `Jost` | Nav, texte courant — `body` |

## Rappel — remplacements à faire

```html
<!-- Image de fond -->
style="background-image: url('VOTRE_IMAGE_ICI.jpg')"

<!-- Logo -->
<img src="logo.png" class="w-14 h-14 object-contain" />
```