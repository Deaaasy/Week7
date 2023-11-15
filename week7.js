
// luas persegi
const luasPersegi = (sisi) => {
    return sisi * sisi;
  };
  
  // keliling persegi
  const kelilingPersegi = (sisi) => {
    return 4 * sisi;
  };
  
  //  luas persegi panjang
  const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
  };
  
  //keliling persegi panjang
  const kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar);
  };
  
  // Ekspor 
  module.exports = {
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang
  };
  