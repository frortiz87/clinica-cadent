# Landing Page Development Container

Este es un entorno de desarrollo Docker para crear landing pages con HTML, CSS y JavaScript.

## Uso

### Iniciar el servidor de desarrollo:
```bash
docker-compose up
```

### Acceder a la aplicación:
http://localhost:8080

### Detener el servidor:
```bash
docker-compose down
```

## Estructura del proyecto
```
.
├── Dockerfile
├── docker-compose.yml
├── workspace/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
```

## Características

- Live reload automático
- Servidor web integrado
- Entorno aislado con Docker
- Fácil de modificar y extender

## Desarrollo

Todos los archivos en la carpeta `workspace/` se sincronizan automáticamente con el contenedor.
Los cambios se reflejan inmediatamente en el navegador gracias a live-server.
