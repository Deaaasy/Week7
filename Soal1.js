
const shapes = require('./week7.js'); 

// Contoh penggunaan untuk persegi
const sisiPersegi = 5;
console.log(`Luas Persegi: ${shapes.luasPersegi(sisiPersegi)}`);
console.log(`Keliling Persegi: ${shapes.kelilingPersegi(sisiPersegi)}`);

// Contoh penggunaan untuk persegi panjang
const panjangPersegiPanjang = 7;
const lebarPersegiPanjang = 3;
console.log(`Luas Persegi Panjang: ${shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling Persegi Panjang: ${shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
