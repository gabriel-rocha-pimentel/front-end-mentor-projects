document.getElementById("submit_btn").addEventListener("click", function() {
    // When the submit button is clicked, get the values of the input fields
    const inputDayValue = document.querySelector("#input_day").value;
    const inputMonthValue = document.querySelector("#input_month").value;
    const inputYearValue = document.querySelector("#input_year").value;

    // Call the Flask application to process the form submission
    document.getElementById("data_content").submit();
});

document.addEventListener("DOMContentLoaded", function() {
    function simulateTyping(element, value) {
        const delay = 260; // Delay entre cada caractere (em milissegundos)
        let i = 0;
    
        function addCharacter() {
          if (i <= value.length) {
            element.textContent = value.slice(0, i);
            i++;
            setTimeout(addCharacter, delay);
          }
        }
    
        addCharacter();
      }
    
      // Obter os elementos de resultado (output) na tela
      const outputDayElement = document.querySelector("#contain_results h2:nth-of-type(1) span");
      const outputMonthElement = document.querySelector("#contain_results h2:nth-of-type(2) span");
      const outputYearElement = document.querySelector("#contain_results h2:nth-of-type(3) span");
    
      // The code to retrieve input values is moved inside the click event listener
      document.getElementById("submit_btn").addEventListener("click", function() {
        const inputDayValue = document.querySelector("#input_day").value;
        const inputMonthValue = document.querySelector("#input_month").value;
        const inputYearValue = document.querySelector("#input_year").value;
    
        // Call the Flask application to process the form submission
        document.getElementById("data_content").submit();
      });

      // Simular a escrita dos números na tela após o carregamento da página
      simulateTyping(outputDayElement, inputDayValue);
      simulateTyping(outputMonthElement, inputMonthValue);
      simulateTyping(outputYearElement, inputYearValue);
});
