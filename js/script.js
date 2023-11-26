let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

function showalert() {
    alert("Formu Doldurarak Daha Fazla Bilgi Ala Bilirsiniz ");
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
function showAlert(event) {
    event.preventDefault(); // Formun varsayılan gönderme davranışını engeller
    // Form elemanlarından değerleri al
    const name = document.getElementById('name').value;
    const telephonecode = document.getElementById('telephonecode').value;
    const telephone = document.getElementById('telephone').value;
    const hizmet = document.getElementById('hizmet').value;
    const isletmeolcu = document.getElementById('isletmeolcu').value;
    const country = document.getElementById('country').value;

    const subject = 'Sipariş Bilgilendirme Talebi';
    const emailContent = `İsim: ${name}\n Telefon Numarası: ${telephonecode}${telephone}\n Hizmet Almak İstediğiniz Sektör: ${hizmet}\n İşletmenizin Büyüklüğü : ${isletmeolcu} \n İstenen Teslimat Ülkesi : ${country}\n  
    Siz değerli müşterilerimize daha iyi hizmet verebilmek amacıyla, firmamızın sunduğu avantajlı paketler ve hizmetler hakkında size bilgi sunmak istiyoruz. Siz de bize ulaşarak ihtiyaçlarınızı belirtebilir, size özel olarak hazırladığımız en uygun paketleri öğrenebilirsiniz. \n
    Sizinle daha yakından ilgilenmek ve hayatınızı daha da kolaylaştırmak için buradayız. Size özel paket seçeneklerimiz ve temassız hizmetlerimizle, ihtiyaçlarınıza en uygun çözümleri sunmak için sabırsızlanıyoruz.\n
    Her zaman yanınızda olmaktan memnuniyet duyuyoruz. İhtiyaçlarınız için bize ulaşın, sizin için en iyi hizmeti sunabilmek için buradayız.\n
    Saygılarımla,\n
    Tekçip Donanım ve Yazılım Şirketi`;
    const mailtoLink = `mailto:info@xn--tekip-0ra.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
     alert("Mail Uygulamanıza yönlendiriliyorsunuz Talebiniz En Kısa Sürede Cevaplandırılacaktır (Maili Göndermeniz Yeterlidir)");
    window.location.href = mailtoLink; 
    form.reset();
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})