function saatGuncelle() {
    var simdi = new Date();
    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();
    var saniye = simdi.getSeconds();
  
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;
  
    var saatMetni = saat + ":" + dakika + ":" + saniye;
    document.getElementById("saat").textContent = saatMetni;
  }
  
  setInterval(saatGuncelle, 1000);
  