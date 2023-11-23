var map;

document.getElementById('searchButton').addEventListener('click', function () {
    var inputValue = document.getElementById('searchInput').value;

    const apiKey = 'at_DVNXuCKAYZ5FClmhDYmG5a1OUwyvg';
    const ipAddress = inputValue;

    const apiUrl = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var region = data.location.region;

            if (region.includes(' ')) {
                var words = region.split(' ');
                var initials = words[0][0] + words[words.length - 1][0];
            } else {
                var initials = region.substr(0, 2);
            }

            const ipAddressElement = document.getElementById('ip_address')
            const locationElement = document.getElementById('location')
            const timezoneElement = document.getElementById('timezone')
            const ispElement = document.getElementById('isp')

            ipAddressElement.textContent = data.ip
            locationElement.textContent = `${data.location.city},${initials} ${data.location.geonameId}`
            timezoneElement.textContent = `UTC ${data.location.timezone}`
            ispElement.textContent = data.isp

            const latitude = data.location.lat;
            const longitude = data.location.lng;

            if (!map) {
                map = L.map('map').setView([latitude, longitude], 13);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            } else {
                map.setView([latitude, longitude], 13);
            }

            L.marker([latitude, longitude]).addTo(map);
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
});
