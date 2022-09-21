var i = 0;
var tulisan = "SELAMAT DATANG DI WEBSITE KU..";
var kecepatan = 50;

function tulis() {
    if (i < tulisan.length) {
        document.getElementById('textwr').innerHTML += tulisan.charAt(i);
        i++;
        setTimeout(tulis, kecepatan);
    }
};
