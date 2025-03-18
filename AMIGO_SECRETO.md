### **Descripción del Programa**

Este programa es una aplicación simple de "Amigo Secreto" que permite a los usuarios agregar nombres de amigos a una lista y luego sortear un amigo secreto de esa lista. A continuación, se describen las partes clave del código:

1. **Array de Amigos**:
    
    ```
    javascriptRunCopy code
    1let amigos = [];
    
    ```
    
    - Se crea un array vacío llamado **`amigos`** que se utilizará para almacenar los nombres de los amigos que el usuario ingresa.
2. **Función para Agregar Amigos**:
    
    ```
    javascriptRunCopy code
    1function agregarAmigo() {
    2    const input = document.getElementById("amigo");
    3    const nombre = input.value.trim();
    4
    5    if (nombre && !amigos.includes(nombre)) {
    6        amigos.push(nombre);
    7        input.value = ""; // Limpiar el campo de entrada
    8        mostrarListaAmigos();
    9    } else {
    10        alert("Por favor, ingresa un nombre válido o el amigo ya está en la lista.");
    11    }
    12}
    
    ```
    
    - Esta función se activa cuando el usuario hace clic en el botón "Añadir".
    - Obtiene el valor del campo de entrada, lo limpia de espacios en blanco y verifica si el nombre no está vacío y no está ya en la lista.
    - Si el nombre es válido, se agrega al array **`amigos`**, se limpia el campo de entrada y se llama a la función **`mostrarListaAmigos`** para actualizar la lista visible en la interfaz.
    - Si el nombre no es válido, se muestra un mensaje de alerta.
3. **Función para Mostrar la Lista de Amigos**:
    
    ```
    javascriptRunCopy code
    1function mostrarListaAmigos() {
    2    const listaAmigos = document.getElementById("listaAmigos");
    3    listaAmigos.innerHTML = ""; // Limpiar la lista actual
    4
    5    amigos.forEach(amigo => {
    6        const li = document.createElement("li");
    7        li.textContent = amigo;
    8        listaAmigos.appendChild(li);
    9    });
    10}
    
    ```
    
    - Esta función actualiza la lista de amigos en la interfaz.
    - Limpia la lista actual en el HTML y luego itera sobre el array **`amigos`**, creando un nuevo elemento de lista (**`<li>`**) para cada amigo y añadiéndolo a la lista visible.
4. **Función para Sortear un Amigo**:
    
    ```
    javascriptRunCopy code
    1function sortearAmigo() {
    2    if (amigos.length < 2) {
    3        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
    4        return;
    5    }
    6
    7    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    8    const resultadoList = document.getElementById("resultado");
    9    resultadoList.innerHTML = ""; // Limpiar resultados anteriores
    10
    11    const li = document.createElement("li");
    12    li.textContent = `Tu amigo secreto es: ${amigoAleatorio}`;
    13    resultadoList.appendChild(li);
    14}
    
    ```
    
    - Esta función se activa cuando el usuario hace clic en el botón "Sortear amigo".
    - Primero, verifica si hay al menos dos amigos en la lista. Si no, muestra un mensaje de alerta.
    - Si hay suficientes amigos, selecciona uno al azar del array **`amigos`** utilizando **`Math.random()`**.
    - Limpia cualquier resultado anterior en la lista de resultados y muestra el nombre del amigo secreto en la interfaz.

### **Lo Que Falta para Completar el Programa**

1. **Actualización de Amigos**:
    - Actualmente, no hay una función para actualizar el nombre de un amigo en la lista. Podrías agregar una funcionalidad que permita al usuario cambiar el nombre de un amigo ya existente.
2. **Eliminar Amigos**:
    - No hay una opción para eliminar amigos de la lista. Sería útil permitir a los usuarios eliminar nombres si se cometen errores.
3. **Interfaz de Usuario**:
    - Aunque el código JavaScript está bien estructurado, la interfaz de usuario (HTML y CSS) no está incluida aquí. Asegúrate de que el HTML tenga los elementos necesarios (como el campo de entrada y los botones) y que el CSS esté diseñado para que la aplicación sea visualmente atractiva.
4. **Manejo de Errores**:
    - Aunque hay algunas validaciones, podrías mejorar el manejo de errores para proporcionar una mejor experiencia al usuario.
5. **Persistencia de Datos**:
    - Actualmente, los datos se pierden si se recarga la página. Podrías considerar usar **`localStorage`** para guardar la lista de amigos y recuperarla al cargar la página.
6. **Sorteo de Amigos Sin Repetición**:
    - La función de sorteo actual permite que un amigo sea seleccionado varias veces en diferentes sorteos. Podrías implementar una lógica para asegur
