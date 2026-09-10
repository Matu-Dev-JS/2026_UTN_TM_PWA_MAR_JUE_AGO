# Solucionar error de puerto en XAMPP (Windows)

## Problema

Al iniciar MySQL en XAMPP, aparecen errores como:

```
11:29:57  [mysql]  This may be due to a blocked port, missing dependencies,
```

```
10:48:28  [mysql]  Port 3306 in use by "Unable to open process"!
10:48:28  [mysql]  MySQL WILL NOT start without the configured ports free!
```

Esto indica que **otro proceso ya está usando el puerto 3306** (puerto por defecto de MySQL).

## Solución

### 1. Identificar el proceso que bloquea el puerto

Abrir **CMD como administrador** y ejecutar:

```cmd
netstat -ano | findstr :3306
```

**Ejemplo de salida:**

```
TCP    0.0.0.0:3306           0.0.0.0:0              LISTENING       6412
TCP    0.0.0.0:33060          0.0.0.0:0              LISTENING       6412
TCP    [::]:3306              [::]:0                 LISTENING       6412
TCP    [::]:33060             [::]:0                 LISTENING       6412
```

El número al final es el **PID** (Process ID). En este ejemplo: `6412`.

### 2. Terminar el proceso

Ejecutar el siguiente comando reemplazando `<PID>` con el número obtenido:

```cmd
taskkill /PID 6412 /F
```

**Salida esperada:**

```
Correcto: se terminó el proceso con PID 6412.
```

### 3. Iniciar XAMPP

Una vez cerrado el proceso, iniciar MySQL desde XAMPP normalmente.