
const userInput = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div");

    // Regex for valid US phone numbers
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    checkBtn.addEventListener("click", () => {
      const input = userInput.value.trim();
      if (!input) {
        alert("Please provide a phone number");
        return;
      }
      const isValid = regex.test(input);
      resultsDiv.textContent = isValid
        ? `Valid US number: ${input}`
        : `Invalid US number: ${input}`;
    });

    clearBtn.addEventListener("click", () => {
      resultsDiv.textContent = "";
      userInput.value = "";
    });
