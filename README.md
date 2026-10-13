# Inventory · App de gestión de inventario y ventas

Aplicación móvil para **iOS y Android** construida con **React Native y Expo** que permite a un pequeño negocio gestionar su inventario de productos, su cartera de clientes y el registro de ventas desde el celular.

La app consume una **API REST propia con autenticación JWT**: todos los datos (productos, categorías, clientes y ventas) se guardan en un backend remoto, por lo que la información se mantiene sincronizada entre dispositivos.

<p align="center">
<img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM" src="https://github.com/user-attachments/assets/b2824114-64ba-4795-a42a-81e39169a67f" />
<img width="220" alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (2)" src="https://github.com/user-attachments/assets/19cba7bb-1335-4411-8eb3-3fbe5f244017" />
<img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 02 AM (2)" src="https://github.com/user-attachments/assets/5d33c5f6-3971-4cc2-bd90-a609ebc9710c" />

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
| <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM" src="https://github.com/user-attachments/assets/117fe0fb-afef-4742-9890-ab24843dd374" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (1)" src="https://github.com/user-attachments/assets/0b2703ef-a2c3-49ab-91c8-a552d8d9fe95" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (2)" src="https://github.com/user-attachments/assets/7ebf8e96-f916-4e0f-be59-264e789be786" />
 |

| Productos | Agregar producto | Clientes |
|:---:|:---:|:---:|
| <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (3)" src="https://github.com/user-attachments/assets/2ccba7e4-372c-4321-a9fc-2cfd6c8f00c3" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (4)" src="https://github.com/user-attachments/assets/77d8f24e-4a85-43ee-b42b-4dfabca5af52" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (5)" src="https://github.com/user-attachments/assets/77a706f7-6602-4fc7-996b-3f636abdfcc8" />
 |

| Agregar cliente | Escoger productos | Detalle de venta |
|:---:|:---:|:---:|
| <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 01 AM (6)" src="https://github.com/user-attachments/assets/73d8dd18-3056-4ee9-af99-ea7ec1bbdea9" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 02 AM" src="https://github.com/user-attachments/assets/4b7e7bdb-e711-45b7-b6f1-4238226f8e69" />
 | <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 02 AM (1)" src="https://github.com/user-attachments/assets/ec0e5252-ef2e-4866-b00a-e857d6281801" />
 |

| Historial de ventas |
|:---:|
| <img width="220"  alt="WhatsApp Image 2026-10-13 at 11 59 02 AM (2)" src="https://github.com/user-attachments/assets/d0b8bda4-a11a-42be-b95e-7c934cf2b9cd" />
 |

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
