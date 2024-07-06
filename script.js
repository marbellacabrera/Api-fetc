document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const userTableBody = document.getElementById("userTableBody");
  
    // Mostrar loader
    loader.style.display = "block";
  
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(data => {
        const users = data.data;
        
        // Ocultar loader
        
        loader.style.display = "none";
        
        // Insertar datos en la tabla
        
        users.forEach(user => {
          const row = document.createElement("tr");
          
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src="${user.avatar}" class="img-fluid rounded" alt="Avatar"></td>
          `;
          
          userTableBody.appendChild(row);
        });
        //Clase para bordes azules de la tabla
        const table = document.querySelector('.table');
        table.classList.add('blue-border-table');
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Ocultar loader en caso de error
        loader.style.display = "none";
      });
  });
  