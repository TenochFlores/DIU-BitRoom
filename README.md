# DIU-BitRoom
Plataforma de apoyo al aprendizaje al aprendizaje ya sea guiado o autodidacta. 

# Instrucciones para correr el proyecto

    - Colocarse en terminal en la carpeta BitRoom y correr los siguientes comandos

    - npm install

    - ng serve

    - Si llega aparecer el siguiente error: 

    ✘ [ERROR] Could not resolve "~cropperjs/dist/cropper.css"

    node_modules/ngx-photo-editor/photo-editor.css:1:8:
      1 │ @import "~cropperjs/dist/cropper.css";
        ╵         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    You can mark the path "~cropperjs/dist/cropper.css" as external to exclude it from the bundle, which will remove this error and leave the unresolved path in the bundle.

    - Dirigirse a "BitRoom/node_modules/ngx-photo-editor/photo-editor.css" y borrar el simbolo "~" antes de 
    "~cropperjs/dist/cropper.css" en la primera linea.
