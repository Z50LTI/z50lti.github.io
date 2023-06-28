var map = L.map('map').setView([-19.243107806586487, 25.18550486521771], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 7,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-20.243107806586487, 25.18550486521771]).addTo(map);
marker.bindPopup("<b>Day 1-4</b> <br> Jack's Camp, Makgadikgadi Pans").openPopup();

var marker2 = L.marker([-19.09363831282719, 23.864346245417845]).addTo(map);
marker2.bindPopup("<b>Day 4-7</b>  <br> Khwai Leadwood, Khwai Community Area")

var marker3 = L.marker([-18.36086771897742, 24.702499871109225]).addTo(map);
marker3.bindPopup("<b>Day 7-10</b>  <br> Chobe Game Lodge, Chobe")