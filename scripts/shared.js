// Shared functionality for all pages, such as handling the search bar.

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-button");
    const searchBar = document.querySelector(".search-bar");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter a search term.");
        }
    });
});
