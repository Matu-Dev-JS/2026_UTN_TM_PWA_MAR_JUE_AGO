/* USUARIOS */
CREATE TABLE usuarios (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT true,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/* ESPACIO DE TRABAJO */
CREATE TABLE espacio_de_trabajo(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT(1000)
)


/* MIEMBROS*/
CREATE TABLE miembros_espacio_trabajo(
	id int AUTO_INCREMENT not null PRIMARY KEY,
    fk_id_user int not null,
    fk_id_espacio_de_trabajo int not null,
    CONSTRAINT fk_id_user_miembros FOREIGN KEY (fk_id_user) REFERENCES usuarios(id) ON DELETE CASCADE on UPDATE CASCADE,
    CONSTRAINT fk_id_espacio_de_trabajo_espacio_de_trabajo FOREIGN KEY(fk_id_espacio_de_trabajo) REFERENCES espacio_de_trabajo(id) ON DELETE CASCADE on UPDATE CASCADE
);

/* Canales */
CREATE TABLE canales ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(30) NOT NULL, 
    fk_id_espacio_trabajo INT NOT NULL, 
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    descripcion TEXT(3000),
    CONSTRAINT fk_id_espacio_de_trabajo_canales FOREIGN KEY(fk_id_espacio_trabajo) REFERENCES espacio_de_trabajo(id) ON DELETE CASCADE on UPDATE CASCADE
);


/* Mensajes_Canales */
CREATE TABLE mensajes_canales (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    contenido TEXT(10000) NOT NULL, 
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, 
    fk_id_miembro INT NOT NULL,
    fk_id_canal INT NOT NULL,
    CONSTRAINT fk_id_miembro_mensajes_canales FOREIGN KEY(fk_id_miembro) REFERENCES miembros_espacio_trabajo(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_id_canal_mensajes_canales FOREIGN KEY(fk_id_canal) REFERENCES canales(id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Mensajes_Directos */
CREATE TABLE mensajes_directos(
	id int AUTO_INCREMENT not null PRIMARY KEY,
	contenido TEXT(10000) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	fk_id_receptor int not null,
	fk_id_emisor int not null,
	CONSTRAINT fk_id_receptor_mensajes_directos FOREIGN KEY (fk_id_receptor) REFERENCES miembros_espacio_trabajo(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_id_emisor_mensajes_directos FOREIGN KEY (fk_id_emisor) REFERENCES miembros_espacio_trabajo(id) ON DELETE CASCADE ON UPDATE CASCADE
)


/*
Crear las tablas:
	Canales
    	- id PK
        - nombre
        - descripcion
        - fecha_creacion
        - fk_id_espacio_trabajo -> espacio_de_trabajo(id)
        
    Mensajes_Canales
    	- id PK
        - contenido
        - fecha_creacion
        - fk_id_miembro -> miembros_espacio_trabajo(id)
        - fk_id_canal -> canales(id)
        
    Mensajes_Directos
    	- id PK
        - contenido
        - fk_id_receptor -> miembros_espacio_trabajo(id)
        - fk_id_emisor -> miembros_espacio_trabajo(id)
*/