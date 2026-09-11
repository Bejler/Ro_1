# Sábado en Santa Elena

Página para Ro: el plan del sábado en Valparaíso.

## Estructura

```
index.html
styles.css
script.js
fotos/
  santa-elena-1.jpg   ← fondo de la portada
  santa-elena-2.jpg   ← fondo del bloque "la misión"
  portada.jpg         ← la foto de los dos, chica y redonda al final
```

## Antes de publicar

1. Pon las 3 fotos en `fotos/` con esos nombres exactos.
2. En `index.html`, reemplaza `HORA` por la hora en que quedaron.
3. Listo: la canción y tu número ya están puestos en `script.js`.

## Sobre la música

La canción no puede sonar sola al abrir: los navegadores bloquean el audio
hasta que la persona toca algo. Por eso la portada tiene un botón. Cuando Ro
lo toca, Aire arranca en 0:00 y sigue sonando mientras baja por la página.
Abajo aparece una barra chica para pausarla si quiere.

Las fotos conviene que sean verticales, porque van a pantalla completa.

## Publicar en GitHub Pages

1. Sube los archivos a la raíz del repo.
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: `main`, carpeta `/ (root)` → Save.
4. Queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
