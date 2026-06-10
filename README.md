# Yiğit Kutup — Kişisel Portfolyo Web Sitesi (Firebase Sürümü)

Bu proje, bilgisayar programcılığı dönem sonu Web Projesi ödevi kapsamında geliştirilmiş; "Granit" temalı statik bir portfolyo sitesinin modern JavaScript dinamik özellikleri ve **Firebase** altyapısı ile güçlendirilmiş halidir.

Bu sürümde veritabanı (Firestore) ve oturum yönetimi (Firebase Auth) tamamen bulut üzerinden çalışmaktadır. Bu sayede yerel bilgisayarda XAMPP veya MySQL çalıştırmaya gerek kalmadan, doğrudan **GitHub Pages** veya herhangi bir statik sunucudan (Vercel, Netlify) tüm özellikleriyle canlı olarak çalışmaktadır.

## 🔗 Canlı Önizleme
* **GitHub Pages Canlı Linki:** [https://web-projesi-2026.github.io/yigit_kutup_portfolyo/](https://web-projesi-2026.github.io/yigit_kutup_portfolyo/)

---

## 🛠️ Kullanılan Teknolojiler

* **Arayüz (Frontend):** 
  * Saf HTML5 (Semantik Yapı)
  * Saf CSS3 (Granit Temalı Özel Değişkenler, Responsive Grid & Flexbox, Animasyonlar)
  * Saf JavaScript (ES6+, DOM Manipülasyonu, AJAX/Fetch API)
* **Veritabanı & Oturum Yönetimi (Backend / BaaS):**
  * **Firebase Cloud Firestore:** Mesajların gerçek zamanlı kaydedilmesi ve yönetilmesi için.
  * **Firebase Authentication:** Yönetici girişi için güvenli e-posta/şifre oturumu.
* **Harici API:**
  * [wttr.in](https://wttr.in) Hava Durumu Servisi (Kırşehir ve İstanbul için anlık veri çekimi)

---

## ⚡ Proje Özellikleri

### 1. Kullanıcı Deneyimi & Dinamik Filtreleme (JavaScript)
* **Kategori Filtreleme:** Projeler sayfasında yer alan Web, Mobil, Tasarım ve Oyun butonları aracılığıyla projeler sayfa yenilenmeden CSS geçişleriyle dinamik olarak filtrelenir.
* **Anlık Arama Kutusu (Search Bar):** Arama kutusuna yazılan anahtar kelimelere göre proje başlıkları ve açıklamalarında anlık arama yapılır. Filtrelenmiş kategori içinde arama yapabilme kabiliyetine sahiptir. Eşleşme bulunamadığında şık bir "Sonuç bulunamadı" uyarısı gösterilir.

### 2. API Entegrasyonu (Dinamik Hava Durumu Kartları)
* **Kırşehir & İstanbul Hava Durumu:** Ana sayfanın alt kısmında `wttr.in` API'si kullanılarak asenkron (`fetch`) olarak çekilen anlık hava durumu verileri gösterilir.
* Sıcaklık derecesi, gökyüzü durumu (Bulutlu, Güneşli vb.), nem oranı, rüzgar hızı ve hava durumuna uygun ikon/emoji otomatik olarak listelenir.
* Veriler her 30 dakikada bir arka planda otomatik olarak yenilenir.

### 3. İletişim Formu & Bulut Veritabanı Kaydı (Firebase Firestore)
* İletişim sayfasında yer alan "Mesaj Gönder" formu doldurulduğunda, veriler sayfa yenilenmeden asenkron olarak Firebase Firestore veritabanındaki `mesajlar` koleksiyonuna kaydedilir.
* Başarılı/başarısız durum bildirimi kullanıcıya dinamik olarak gösterilir.

### 4. Şifre Korumalı Yönetim Paneli (Admin Panel)
* Yönetici girişi Firebase Authentication ile korunmaktadır.
* **Oturum Yönetimi:** Tüm admin sayfaları giriş kontrolü yapar. Yetkisiz erişimler otomatik olarak login (`admin/index.html`) sayfasına yönlendirilir.
* **Gerçek Zamanlı Mesaj Listeleme:** Gelen tüm mesajlar Firestore'dan gerçek zamanlı (`onSnapshot`) olarak en yeni tarihten başlayarak listelenir.
* **Okundu Durumu:** Yönetici mesajın yanındaki "Okundu" butonuna basarak durumunu güncelleyebilir.
* **Mesaj Silme:** Gereksiz mesajlar veritabanından kalıcı olarak silinebilir.

---

## 📂 Dosya ve Klasör Yapısı

```
yigit_kutup_portfolyo/
│
├── index.html                   # Ana sayfa (Beceriler, Hobiler & Hava Durumu Kartları)
├── README.md                    # Proje Açıklaması ve Kurulum Klavuzu
│
├── pages/
│   ├── about.html               # Hakkımda Sayfası (Biyografi & İş Deneyimleri)
│   ├── projects.html            # Projeler Sayfası (Kategori Filtreleme & Arama)
│   └── contact.html             # İletişim Sayfası (İletişim Formu)
│
├── admin/
│   ├── index.html               # Yönetim Paneli Giriş Sayfası (Firebase Auth)
│   └── panel.html               # Yönetim Paneli Dashboard (Mesaj Listesi & İstatistikler)
│
└── assets/
    ├── css/
    │   └── style.css            # Sitenin Tüm Granit Tema CSS Kodları ve Yeni Eklentiler
    └── js/
        ├── jScript.js           # Sayfa İçi Temel JS (Hamburger Menü, Parallax, Cursor Glow)
        ├── filter.js            # Proje Filtreleme & Arama Algoritması
        ├── widgets.js           # Hava Durumu API İstek Yönetimi
        └── firebase-config.js   # Firebase Bağlantı Yapılandırması
```

---

## ⚙️ Kurulum ve Firebase Entegrasyon Adımları

Projeyi kendi Firebase hesabınızla bağlayıp tam işlevsel çalıştırmak için şu adımları takip edin:

### 1. Firebase Projesi Oluşturun
1. [Firebase Console](https://console.firebase.google.com/) adresine gidin ve Google hesabınızla giriş yapın.
2. **"Project add"** butonuna basarak yeni bir proje oluşturun (örn: `yigit-kutup-portfolyo`).
3. Google Analytics seçeneğini isteğe bağlı olarak işaretleyip projeyi oluşturun.

### 2. E-Posta / Şifre Giriş Yöntemini Etkinleştirin
1. Firebase sol menüsünden **Build > Authentication** seçeneğine gidin.
2. **Get Started** butonuna tıklayın.
3. Giriş Yöntemleri (Sign-in method) sekmesinden **Email/Password** seçeneğini bulun ve etkinleştirip (Enable) kaydedin.
4. **Users** sekmesine gelin ve **Add user** butonuna basarak yönetim panelinde kullanacağınız e-posta ve şifrenizi tanımlayın:
   * **E-Posta:** `admin@domain.com` (veya istediğiniz herhangi bir e-posta)
   * **Şifre:** `admin123`

### 3. Firestore Veritabanını Etkinleştirin ve Kurallarını Ayarlayın
1. Firebase sol menüsünden **Build > Firestore Database** seçeneğine gidin.
2. **Create database** butonuna tıklayın.
3. Bölge seçip **Start in test mode** seçeneğini seçerek veritabanını oluşturun.
4. Veritabanı oluştuktan sonra üstteki **Rules** (Kurallar) sekmesine gelin ve güvenlik kurallarını aşağıdaki gibi güncelleyin (Herkes mesaj gönderebilsin ama sadece giriş yapan admin mesajları okuyup silebilsin):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /mesajlar/{document} {
         allow create: if true;
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
5. **Publish** butonuna basarak kuralları yayınlayın.

### 4. Yapılandırma Bilgilerini Projeye Ekleyin
1. Firebase ana sayfasına dönün (Project Overview).
2. Web ikona tıklayarak projenize bir Web uygulaması ekleyin.
3. Karşınıza çıkan `firebaseConfig` kod bloğundaki anahtarları kopyalayın.
4. Projenizdeki `assets/js/firebase-config.js` dosyasını açın ve kopyaladığınız değerleri ilgili alanlara yapıştırın:
   ```javascript
   const firebaseConfig = {
     apiKey: "KENDİ_API_KEY_DEĞERİNİZ",
     authDomain: "KENDİ_PROJECT_ID.firebaseapp.com",
     projectId: "KENDİ_PROJECT_ID",
     storageBucket: "KENDİ_PROJECT_ID.appspot.com",
     messagingSenderId: "KENDİ_SENDER_ID",
     appId: "KENDİ_APP_ID"
   };
   ```

Tebrikler! Kurulum tamamlandı. Artık projenizi doğrudan çift tıklayarak tarayıcıda veya GitHub Pages'e yükleyerek canlıda çalıştırabilirsiniz.
