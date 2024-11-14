
let mesaj = 
`
Migros'a hoşgeldiniz.
Money Kartınız varmı ?
1-Evet
2-Hayır
`;

//335
const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 220
    }
]


//true veya false
let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money kartı vardır.
    let isim = prompt("Adınızı Giriniz :");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    
     odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar : ${odenecekTutar}
        `);


}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}