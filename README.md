

# Mi Tienda

Bienvenido a **Mi Tienda**, una aplicación de e-commerce que permite a los usuarios ver productos en tiempo real, agregar nuevos productos y eliminarlos. Utiliza **Node.js**, **Express**, **Socket.IO** y **Handlebars** para proporcionar una experiencia dinámica y fluida.

## Características

- Visualización de productos en tiempo real.
- Agregar nuevos productos a la lista.
- Eliminar productos existentes.
- Interfaz sencilla y fácil de usar.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **Socket.IO**: Biblioteca para aplicaciones web en tiempo real.
- **Handlebars**: Motor de plantillas para generar HTML dinámicamente.
- **HTML/CSS**: Para la estructura y el estilo de la aplicación.

## Estructura del Proyecto
             


```
mi-tienda/
│
├── src/
│   ├── app.js                
│   ├── data/
│   │   └── products.js       
│   ├── views/
│   │   ├── layouts/                  
│   │   ├── home.handlebars    
│   │   └── realTimeProducts.handlebars 
│   └── public/               
│       └── styles.css        
│
├── package.json              
└── README.md                 


```


### Uso
Al iniciar la aplicación, verás la lista de productos.

Puedes acceder a la página de "Productos en Tiempo Real" para ver la lista actualizada automáticamente.

Puedes agregar productos enviando una solicitud POST a 
```bash
  /products
```
Puedes eliminar productos enviando una solicitud DELETE a 
```bash
  /products/:name.
