// document.addEventListener('DOMContentLoaded', function() {
//     const checkboxes = document.querySelectorAll('.checkbox');
    
//     checkboxes.forEach(function(checkbox) {
//       checkbox.addEventListener('change', function() {
//         const inputContainer = this.parentNode.nextElementSibling;
//         if (this.checked) {
//           inputContainer.style.display = 'block';
//         } else {
//           inputContainer.style.display = 'none';
//         }
//       });
//     });
    
//     const saveButtons = document.querySelectorAll('.save-button');
    
//     saveButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         const textarea = this.previousElementSibling;
//         console.log('Texto guardado:', textarea.value);
//         // Aquí puedes agregar la lógica para guardar el texto en el servidor o realizar otras acciones
//       });
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        const inputContainer = this.parentNode.nextElementSibling;
        if (this.checked) {
          inputContainer.style.display = 'block';
        } else {
          inputContainer.style.display = 'none';
        }
      });
    });
    
    const saveButtons = document.querySelectorAll('.save-button');
    
    saveButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        const textarea = this.previousElementSibling;
        const text = textarea.value;
        
        const curvedTextElement = document.getElementById(`curvedText${index + 1}`);
        curvedTextElement.textContent = text;
        
        textarea.value = '';
      });
    });
  });