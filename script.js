document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value;
    const blockedSites = ['yandex.ru', 'yandex.com'];
    
    if (blockedSites.some(site => searchQuery.includes(site))) {
        alert('This site is blocked.');
    } else {
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(url, '_blank');
    }
});

// Mock IP display
document.getElementById('ip-address').innerText = '0.0.0.0';
