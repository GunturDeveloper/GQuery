function searchGoogle() {
    var query = document.getElementById('searchQuery').value;
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    document.getElementById('searchResultsIframe').src = googleSearchUrl;
}
