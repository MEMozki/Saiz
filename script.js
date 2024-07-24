document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const blockedSites = ['yandex.ru', 'yandex.com'];
    
    if (blockedSites.some(site => searchQuery.includes(site))) {
        alert('Этот сайт заблокирован.');
    } else {
        const url = `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`;
        window.open(url, '_blank');
    }
});

// Имитация получения IP-адреса VPN
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').innerText = data.ip;
    })
    .catch(error => {
        console.error('Ошибка при получении IP-адреса:', error);
    });
