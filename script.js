document.addEventListener("DOMContentLoaded", function () {
  // Initial load
  getFact();

  // Event listener for button click
  document.getElementById("newFactBtn").addEventListener("click", getFact);

  function getFact() {
    fetch("https://dogapi.dog/api/facts")
      .then((response) => response.json())
      .then((data) => {
        // Check if API call was successful
        if (data.success) {
          const fact = data.facts[0];
          document.getElementById("fact").textContent = fact;
        } else {
          document.getElementById("fact").textContent = "Failed to fetch data";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        document.getElementById("fact").textContent = "Error fetching data";
      });
  }
});
