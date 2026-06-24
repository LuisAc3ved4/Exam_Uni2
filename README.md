# Examen Recuperación Unidad 2 
## Instrucciones de Prueba (Validación del Balanceo)

Para comprobar el correcto funcionamiento del algoritmo Round-Robin de NGINX (que distribuye el tráfico de forma alternada entre ambos contenedores), ejecuta el siguiente comando secuencial en tu terminal:

```bash
curl http://localhost/api/v1/saludo && echo "" && sleep 1 && curl http://localhost/api/v1/saludo
