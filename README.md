# Inventory · App de gestión de inventario y ventas

Aplicación móvil para **iOS y Android** construida con **React Native y Expo** que permite a un pequeño negocio gestionar su inventario de productos, su cartera de clientes y el registro de ventas desde el celular.

La app consume una **API REST propia con autenticación JWT**: todos los datos (productos, categorías, clientes y ventas) se guardan en un backend remoto, por lo que la información se mantiene sincronizada entre dispositivos.

<p align="center">
  <img src="screenshots/01-login.jpg" width="200" />
  <img src="screenshots/03-inicio.jpg" width="200" />
  <img src="screenshots/04-productos.jpg" width="200" />
  <img src="screenshots/09-detalle-venta.jpg" width="200" />
</p>

---

## Funcionalidades

### Autenticación
- Registro de usuarios (usuario, contraseña, nombre, apellido, email y teléfono).
- Inicio de sesión contra la API, que devuelve un **token JWT**.
- El token se guarda de forma segura en el dispositivo con **Expo SecureStore** (Keychain en iOS y Keystore en Android).
- Si el token **expira**, la app lo detecta, avisa al usuario y cierra la sesión automáticamente.
- Las rutas internas están protegidas: sin sesión válida, el usuario vuelve al login.

### Productos
- Listado de productos con búsqueda por nombre.
- Creación de productos con nombre, SKU, descripción, precio, cantidad y categoría.
- **Carga de imagen** del producto desde la galería del teléfono.
- Vista de detalle y eliminación de productos.

### Categorías
- Crear, listar, editar y eliminar categorías para organizar los productos.

### Clientes
- Listado de clientes con búsqueda.
- Registro de clientes con nombre, apellido, email y teléfono.
- Vista de detalle y eliminación.

### Ventas
- Flujo de venta paso a paso: **escoger cliente → agregar productos → revisar detalle → finalizar venta**.
- Cálculo automático del **total** de la venta.
- Historial de ventas con id, fecha y total.

---

## Tecnologías

| Área | Herramientas |
|---|---|
| Framework | React Native 0.76 (New Architecture), Expo SDK 52 |
| Navegación | Expo Router (rutas basadas en archivos, tabs y stacks) |
| Estado | React Context API (sesión, productos, categorías, clientes, ventas) |
| Autenticación | JWT, `jwt-decode`, Expo SecureStore |
| Multimedia | Expo Image Picker (subida de imágenes de productos) |
| Backend | API REST propia desplegada en Railway, consumida con `fetch` |
| Builds | EAS Build y EAS Update (OTA), configurados en `eas.json` |

---

## Estructura del proyecto

```
app/                 Pantallas y rutas (Expo Router)
  login.js, register.js
  (app)/(tabs)/      Tabs principales: Home, Productos, Cliente, Ventas, Sign Out
  (app)/producto/    Agregar y detalle de producto
  (app)/cliente/     Agregar y detalle de cliente
  (app)/categoria/   Gestión de categorías
  (app)/ventas/      Flujo de venta
components/          Componentes de UI por módulo
Contexto/            Contextos de React (estado global)
service/             Capa de acceso a la API (un servicio por recurso)
auth/                Validación de expiración del token
hooks/               Hook de almacenamiento seguro (useStorageState)
```

La lógica de red está separada en la carpeta `service/`, con un archivo por recurso. Gracias a eso, cambiar el backend (por ejemplo, a otra API REST u OData) solo requiere modificar esa capa, sin tocar las pantallas.

---

## Capturas de pantalla

| Login | Registro | Inicio |
|:---:|:---:|:---:|
| <img src="screenshots/01-login.jpg" width="220" /> | <img src="screenshots/02-registro.jpg" width="220" /> | <img src="screenshots/03-inicio.jpg" width="220" /> |

| Productos | Agregar producto | Clientes |
|:---:|:---:|:---:|
| <img src="screenshots/04-productos.jpg" width="220" /> | <img src="screenshots/05-agregar-producto.jpg" width="220" /> | <img src="screenshots/06-clientes.jpg" width="220" /> |

| Agregar cliente | Escoger productos | Detalle de venta |
|:---:|:---:|:---:|
| <img src="screenshots/07-agregar-cliente.jpg" width="220" /> | <img src="screenshots/08-escoger-productos.jpg" width="220" /> | <img src="screenshots/09-detalle-venta.jpg" width="220" /> |

| Historial de ventas |
|:---:|
| <img src="screenshots/10-ventas.jpg" width="220" /> |

*Capturas tomadas en un iPhone.*

---

## Instalación y ejecución

**Requisitos:** Node.js 18 o superior y la app **Expo Go** en el celular (o un emulador de Android o simulador de iOS).

```bash
# 1. Clonar el repositorio
git clone https://github.com/sebasrb08/app-inventory-front.git
cd app-inventory-front

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npx expo start
```

Después, escanea el código QR con Expo Go (Android) o con la cámara (iOS), o presiona `a` para abrir el emulador de Android o `i` para el simulador de iOS.

### Generar builds instalables

```bash
npm install -g eas-cli
eas build --platform android --profile preview   # APK para pruebas internas
eas build --platform ios --profile production    # Build para App Store
eas submit --platform ios                        # Envío a App Store Connect
```

---

## Autor

**Sebastián Rueda**: desarrollador FileMaker y React Native.
GitHub: [@sebasrb08](https://github.com/sebasrb08)
