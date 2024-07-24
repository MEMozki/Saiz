document.getElementById('search-button')?.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const searchQuery = searchInput.value.toLowerCase();
    const blockedSites: string[] = ['yandex.ru', 'yandex.com'];
    
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
        const ipAddressElement = document.getElementById('ip-address') as HTMLElement;
        ipAddressElement.innerText = data.ip;
    })
    .catch(error => {
        console.error('Ошибка при получении IP-адреса:', error);
    });
