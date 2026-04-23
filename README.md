# Caslo - Family Legacy App Frontend

Frontend completo de la aplicación Caslo en Vue 3 + Vite. UI-only ready para presentar al cliente.

## 🚀 Características

- ✅ 8 pantallas principales completamente funcionales
- ✅ Navegación fluida con Vue Router
- ✅ Diseño responsivo (mobile, tablet, desktop)
- ✅ Colores y tipografía exactos del prototipo
- ✅ Componentes reutilizables
- ✅ Mock data para visualización

## 📦 Pantallas Incluidas

1. **Dashboard** - Centro de notificaciones y eventos
2. **Mi Perfil** - Perfil personal con historia
3. **Árbol Familiar** - Visualización de la estructura familiar
4. **Mi Viaje** - Journal con contenido multimedia
5. **Feed Familiar** - Feed social tipo Facebook
6. **Árbol de Memoria** - Perfiles de fallecidos
7. **Bóveda** - Almacenamiento privado
8. **Mensajes** - Chat privado y grupal

## 🛠️ Setup

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📁 Estructura

```
src/
├── components/
│   ├── common/          # Layout components (Sidebar, Topbar, MainLayout)
│   ├── dashboard/       # Dashboard components
│   ├── feed/           # Feed components
│   ├── memory/         # Memory tree components
│   └── ...
├── pages/              # Page components
├── router/             # Vue Router configuration
├── styles/             # Global styles
├── App.vue             # Root component
└── main.js             # Entry point
```

## 🎨 Colores

- **Primario (Azul)**: #0c1335
- **Secundario (Dorado)**: #dcae45
- **Blanco**: #ffffff
- **Gris**: #c5c5cb
- **Fondo**: #f0f2f5

## 🔤 Tipografía

- **Headings**: Poppins (600-700)
- **Body**: Inter (400-500)

## ⚙️ Próximos Pasos

1. Presentar al cliente para feedback
2. Una vez aprobado, desarrollar backend en Laravel
3. Conectar frontend a APIs

## 📝 Notas

- Actualmente sin conexión a backend (mock data)
- Todas las pantallas son navegables
- El proyecto está listo para ser extendido con lógica real

---

**Servidor de desarrollo**: http://localhost:5173/
