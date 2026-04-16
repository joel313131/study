const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function () {
  const value = searchBar.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    const match = title.includes(value) || desc.includes(value) || category.includes(value);
    card.style.display = match ? "block" : "none";
  });
});