# 1. Etapa de Construcción: Crea una imagen para compilar y empaquetar la aplicación
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias de producción
RUN npm ci

# Copia el resto de los archivos del proyecto
COPY . .

# Compila la aplicación Next.js
RUN npm run build

# 2. Etapa de Producción: Crea una imagen ligera solo con los archivos necesarios
FROM node:18-alpine AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Define variables de entorno para la configuración de Next.js
ENV NODE_ENV=production

# Copia los archivos de la etapa de construcción a la etapa de producción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expone el puerto por defecto de Next.js
EXPOSE 3000

# Comando para iniciar el servidor de Next.js
CMD ["npm", "start"]