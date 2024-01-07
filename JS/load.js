function search() {
    fetch('search.php')
        .then(response => response.text())
        .then(data => {
            // Inject the fetched HTML content into an element on the page
            document.getElementById('contentContainer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
};