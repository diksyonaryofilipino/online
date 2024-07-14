// Fetch JSON data and store it in a variable
let localWords = [];

fetch('words.json')  // Assuming words.json is in the same folder
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        localWords = data;
        console.log(localWords); // This line will log the fetched data to the console for verification
    })
    .catch(error => console.error('Error fetching the JSON:', error));

// Function to search for a word in the JSON data
function searchWord(word) {
    return localWords.find(entry => entry.word.toLowerCase() === word.toLowerCase());
}

// Event listener for the search bar
document.getElementById('search-bar').addEventListener('input', function() {
    let query = this.value.trim();
    let resultsDiv = document.getElementById('results');

    if (query.length > 2) {
        let result = searchWord(query);
        if (result) {
            resultsDiv.innerHTML = `<h2>${result.word}</h2><p>${result.definition}</p>`;
        } else {
            resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    } else {
        resultsDiv.innerHTML = '';
    }
});
