const contents = {
  page1: `
    <h2>A. Pengertian Share Hosting Server</h2>
    <p>Layanan shared hosting sangat dipengaruhi oleh perilaku dari semua penyewa ...</p>
    <p>...</p>
    <h2>B. Prinsip Kerja Share Hosting Server</h2>
    <p>Prinsip Kerja Shared Hosting (atau biasa disebut web hosting saja) memberi ...</p>
    <p><em>Selengkapnya dapat dipahami melalui analogi dan pengalaman pengguna secara langsung.</em></p>
  `,

  page2: `
    <h2>C. Jenis-jenis Layanan Hosting</h2>
    <p>Layanan hosting menyediakan tempat untuk menampung, menjalankan aplikasi ...</p>
    <h3>1. Shared Hosting</h3>
    <p>Shared hosting adalah layanan hosting dimana sebuah server digunakan ...</p>
    <ul>
      <li><strong>Kelebihan:</strong> Biaya hemat, support 24 jam, mudah untuk pemula.</li>
      <li><strong>Kekurangan:</strong> Akses terbatas, dampak dari user lain.</li>
    </ul>
  `,

  page3: `
    <h3>2. VPS Hosting / VPS Server</h3>
    <p>VPS Hosting/VPS Server merupakan server hosting fisik yang dibagi-bagi ...</p>
    <ul>
      <li><strong>Kelebihan:</strong> Akses root, scalable, bisa dikustomisasi.</li>
      <li><strong>Kekurangan:</strong> Perlu pengetahuan teknis, biaya lebih mahal.</li>
    </ul>
  `,

  page4: `
    <h3>3. Cloud Hosting</h3>
    <p>Web hosting jenis cloud merupakan paket yang paling banyak disukai karena tanpa downtime ...</p>

    <h3>4. Dedicated Server & Colocation Server</h3>
    <ul>
      <li><strong>Kelebihan:</strong> Akses penuh, resource besar, kontrol total.</li>
      <li><strong>Kekurangan:</strong> Biaya tinggi, perlu pengetahuan teknis, downtime saat upgrade.</li>
    </ul>
  `,

  page5: `
    <h3>5. WordPress Hosting</h3>
    <p>Web hosting jenis WordPress adalah bentuk shared hosting yang dibuat khusus untuk pengguna WordPress ...</p>
    <ul>
      <li><strong>Kelebihan:</strong> Instalasi cepat, dukungan tema/plugin, mudah digunakan.</li>
      <li><strong>Kekurangan:</strong> Hanya untuk WordPress.</li>
    </ul>
    <hr>
    <p><strong>Penutup:</strong> Semoga penjelasan materi ini bermanfaat dan menambah wawasan Anda tentang berbagai jenis layanan hosting. Jangan ragu untuk bereksplorasi sesuai kebutuhan dan skala website Anda.</p>
  `
};

function loadContent(page) {
  const content = contents[page] || "<p>Halaman tidak ditemukan.</p>";
  document.getElementById("content").innerHTML = content;
}

// Muat halaman pertama secara default
window.onload = () => loadContent('page1');
