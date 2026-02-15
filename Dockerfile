FROM node:20-alpine

# Instalar herramientas útiles
RUN apk add --no-cache git curl vim

WORKDIR /workspace

# Instalar live-server para desarrollo
RUN npm install -g live-server

# Exponer puerto para el servidor web
EXPOSE 8080

# Comando por defecto
CMD ["sh"]
