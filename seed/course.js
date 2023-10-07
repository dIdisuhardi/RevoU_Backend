const {createMateriService} = require('../services/materiService')
const data = [
    {
        judul : "Pengenalan Masalah yang akan di Analysis",
        deskripsi: "Analisis pemasaran (marketing analysis) adalah proses pengumpulan, pengolahan, interpretasi, dan penggunaan data untuk mendapatkan pemahaman mendalam tentang pasar, pelanggan, dan kinerja kampanye pemasaran. Tujuannya adalah untuk mendukung pengambilan keputusan yang lebih cerdas dan efektif dalam strategi pemasaran.",
        link: "https://youtu.be/KrF84RTLPzo",
        kategori : 1,
    },
    {
        judul : "Pengecekan Kualitas Data",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/vxnTfwMqhEk",
        kategori : 1,
    },
    {
        judul : "Data Insights Part 1",
        deskripsi: "Data insight (wawasan dari data) merujuk pada pemahaman atau pengetahuan yang dihasilkan dari analisis data. Ini melibatkan proses mengidentifikasi, memahami, dan menafsirkan pola atau informasi penting dari kumpulan data untuk mendapatkan wawasan yang berharga.",
        link: "https://youtu.be/FGjR8xmGvbY",
        kategori : 1,
    },
    {
        judul : "Data Insights Part 2",
        deskripsi: "Penting untuk mencatat bahwa insight dari data tidak dapat dihasilkan tanpa analisis yang cermat dan pemahaman mendalam tentang konteks di mana data tersebut digunakan. Ini membutuhkan kombinasi dari keterampilan analitis, pengetahuan domain, dan alat analisis data yang tepat.",
        link: "https://youtu.be/qIEe5Vnq40w",
        kategori : 1,
    },
    {
        judul : "Modelling: Train, Valid, and Test",
        deskripsi: "Dalam konteks analitika data dan pembelajaran mesin (machine learning), \"Train, Validation, dan Test\" adalah pendekatan umum yang digunakan untuk  membangun dan menguji model prediktif. Metode ini memungkinkan untuk mengukur seberapa baik model akan berkinerja pada data baru yang tidak pernah  dilihat sebelumnya.",
        link: "https://youtu.be/34Y2KXdPEmo",
        kategori : 1,
    },
    {
        judul : "Modelling: Data Preprocessing I",
        deskripsi: "\"Data Preprocessing\" adalah istilah yang secara umum mengacu pada tahap awal dalam mempersiapkan data untuk digunakan dalam proses pemodelan. Ini termasuk serangkaian langkah yang dilakukan sebelum data dimasukkan ke dalam model untuk melatih atau menguji.",
        link: "https://youtu.be/9PQ2mehF3Js",
        kategori : 1,
    },
    {
        judul : "Modelling: Data Preprocessing II",
        deskripsi: "Penting untuk diingat bahwa setiap langkah ini harus disesuaikan dengan jenis data dan tujuan pemodelan. Selain itu, tahap preprocessing data merupakan proses iteratif dan eksploratif, artinya Anda mungkin perlu kembali dan melakukan penyesuaian setelah melihat hasil dari model awal.",
        link: "https://youtu.be/T-kjiXW9WEw",
        kategori : 1,
    },
    {
        judul : "Modelling: Pemodelan",
        deskripsi: "Pemodelan (modeling) adalah proses membangun representasi matematis atau komputasional dari suatu sistem atau fenomena dalam dunia nyata. Tujuan dari pemodelan adalah untuk memahami, menganalisis, dan memprediksi perilaku sistem atau fenomena tersebut. Dalam konteks analitika data dan pembelajaran mesin, pemodelan sering kali mengacu pada pembangunan algoritma atau model statistik yang dapat memproses data masukan dan menghasilkan output atau prediksi yang diinginkan.",
        link: "https://youtu.be/aMzsobEKa_o",
        kategori : 1,
    },
    {
        judul : "Modelling: Conclusion",
        deskripsi: "Dalam konteks pemodelan, kesimpulan memegang peran penting dalam mengakhiri proses analisis data. Pemodelan melibatkan penciptaan representasi matematis atau komputasional  dari suatu sistem atau fenomena dengan tujuan memahami, menganalisis, dan memprediksi perilaku atau pola yang terkandung dalam data.",
        link: "https://youtu.be/IuoIzADAUik",
        kategori : 1,
    },
    {
        judul : "Pengenalan apa itu Frond End Developer",
        deskripsi: "Frond end development adalah proses pembuatan tampilan dan interaksi pengguna pada sebuah situs web atau aplikasi. Tugasnya melibatkan pengkodean elemen-elemen seperti HTML, CSS JavaScript untuk menciptakan antarmuka yang responsif, menarik, dan fungsional. Frond end development bertanggung jawab memastikan pengalaman pengguna yang baik dengan merancang dan mengimplementasikan desai yang sesuai, serta memastikan kompatibilitas lintas perangkat dan browser.",
        link: "https://youtu.be/qzMPvbL3GRQ",
        kategori : 2,
    },
    {
        judul : "HTML Dasar",
        deskripsi: "HTML singkatan dari HyperText Markup Language, adalah bahasa markup standar yang digunakan untuk membuat dan merancang halaman web. HTML memungkinkan pembuat situs web untuk menentukan struktur dasar sebuah dokumen dengan menggunakan elemen-elemen markup. Elemen-elemen ini disusun dalam bentuk tag (tanda) yang ditempatkan di dalam dokumen HTML untuk memberi petunjuk pada browser web tentang bagaimana menampilkan konten.",
        link: "https://youtu.be/hMDJyb7VkYw",
        kategori : 2,
    },
    {
        judul : "HTML Form",
        deskripsi: "Form adalah elemen HTML yang berfungsi untuk meminta informasi dari user misalnya form login untuk meminta informasi username dan password dari user untuk proses login, form pendaftaran untuk meminta informasi detail tentang user agar bisa mendaftar, form input data untuk disimpan di database dan lain sebagainya.",
        link: "https://youtu.be/mELDK1yS8iU",
        kategori : 2,
    },
    {
        judul : "CSS Dasar",
        deskripsi: "CSS singkatan dari Cascading Style Sheets, adalah bahasa gaya yang digunakan untuk mengontrol tata letak dan penampilan elemen-elemen HTML di halaman web. HTML bertanggung jawab untuk struktur dan konten dasar halaman, sedangkan CSS memberikan gaya dan tata letak visual untuk meningkatkan estetika dan pengalaman pengguna. Beberapa fungsi utama CSS melibatkan pemberian warna, pengaturan font, mengatur posisi elemen, dan menyesuaikan ukuran elemen. Dengan menggunakan CSS, pengembang web dapat dengan mudah mengubah penampilan situs web secara konsisten di seluruh halaman web atau mengkustomisasi penampilan elemen-elemen tertentu.",
        link: "https://youtu.be/tBD8XlgXlus",
        kategori : 2,
    },
    {
        judul : "JavaScript Dasar",
        deskripsi: "JavaScript adalah bahasa pemrograman tingkat tinggi yang bersifat interpretatif dan berorientasi objek. JavaScript awalnya dikembangkan untuk memberikan kemampuan interaktif pada halaman web di sisi klien (browser). Seiring waktu, penggunaan JavaScript telah berkembang, dan sekarang juga digunakan di berbagai konteks pengembangan perangkat lunak, termasuk pengembangan server-side menggunakan platform seperti Node.js.",
        link: "https://youtu.be/SDROba_M42g",
        kategori : 2,
    },
    {
        judul : "JavaScript Modules",
        deskripsi: "Module adalah file Javascript yang di dalamnya terdapat value dari objects, functions, dan variables. Kemudian file tersebut dapat diexport dan diimport oleh file lain. Yang mana file lain yang mengimportnya dapat menggunakan values yang ada di file tersebut.",
        link: "https://youtu.be/RjdKpxhAtI4",
        kategori : 2,
    },
    {
        judul : "JavaScript DOM",
        deskripsi: "DOM singkatan dari Document Object Model merupakan salah satu bahasa pemrograman. DOM merupakan objek model standar bagi XML dan HTML yang memiliki sifat platform independent. Saat membuka sebuah halaman web pada browser, maka file HTML dari web akan dimuat serta ditampilkan pada layar perangkat.",
        link: "https://youtu.be/vaPutSH0sYg",
        kategori : 2,
    },
    {
        judul : "JavaScript Async",
        deskripsi: "Async ( Asynchronous Function) adalah sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang synchronous (function biasa). ",
        link: "https://youtu.be/qwL6ISjbaaE",
        kategori : 2,
    },
    {
        judul : "Version Control System (GIT)",
        deskripsi: "Git adalah sistem kontrol versi distribusi yang dirancang untuk melacak perubahan dalam kode sumber selama pengembangan perangkat lunak. Git dikembangkan oleh Linus Torvalds pada tahun 2005 dan telah menjadi salah satu alat pengelolaan kode sumber terpopuler di dunia pengembangan perangkat lunak.",
        link: "https://youtu.be/fQbTeNX1mvM",
        kategori : 2,
    },
    {
        judul : "Belajar Desain di Figma",
        deskripsi: "Figma adalah salah satu tools atau aplikasi desain yang dapat digunakan pada windows dan Mac OS untuk membuat prototype aplikasi serta berbagai desain lainnya. Aplikasi ini berbasis vektor, sehingga memang sangat cocok digunakan untuk membuat user interface aplikasi atau website.",
        link: "https://youtu.be/qk3R3mYiuPA",
        kategori : 2,
    },
    {
        judul : "Cara Slicing Desain Figma Ke Codingan",
        deskripsi: "Slicing desain Figma mengacu pada proses mempersiapkan desain atau elemen desain untuk implementasi atau pengembangan lebih lanjut di dalam kode. Proses slicing ini melibatkan ekstraksi elemen desain tertentu dari file desain Figma dan menyimpannya dalam format yang dapat digunakan oleh pengembang, seperti gambar PNG, SVG, atau file lainnya.",
        link: "https://youtu.be/4ghGLoxLP9o",
        kategori : 2,
    },
    {
        judul : "Contoh Membuat Website Portofolio Sederhana",
        deskripsi: "Sebuah website portofolio adalah situs web yang dirancang untuk menampilkan dan mempromosikan karya atau proyek seseorang. Portofolio ini biasanya digunakan oleh individu seperti desainer, pengembang web, fotografer, penulis, seniman, dan profesional kreatif lainnya untuk menunjukkan kemampuan, pencapaian, dan potensi mereka kepada calon klien, atasan, atau pengunjung lainnya.",
        link: "https://youtu.be/lypsd9m8Lnw",
        kategori : 2,
    },
    {
        judul : "Pengenalan apa itu Back End Developer",
        deskripsi: "Backend developer (pengembang backend) adalah seorang profesional dalam pengembangan perangkat lunak yang fokus pada pengembangan dan pemeliharaan bagian dari aplikasi web yang tidak terlihat oleh pengguna akhir. Backend merupakan bagian dari sistem yang berurusan dengan pemrosesan logika, manajemen database, dan komunikasi antara komponen frontend dan database. Tujuan utama seorang backend developer adalah membangun dan mendukung \"server side\" dari aplikasi web.",
        link: "https://youtu.be/mRttyh1GQ5I",
        kategori : 3,
    },
    {
        judul : "Belajar Node.js",
        deskripsi: "Node.js adalah sebuah runtime lingkungan (runtime environment) untuk menjalankan JavaScript di luar konteks peramban web (browser). Dengan kata lain, Node.js memungkinkan Anda menjalankan JavaScript di sisi server, yang biasanya dijalankan di lingkungan peramban web. Ini membuatnya menjadi pilihan yang populer untuk pengembangan aplikasi server-side.",
        link: "https://youtu.be/b39Xqf5iyjo",
        kategori : 3,
    },
    {
        judul : "Belajar Node.js NPM",
        deskripsi: "NPM adalah Node Package Manager, yaitu pengelola package JavaScript bawaan Node.js. Package manager sendiri merupakan tools yang fungsinya untuk mengelola package secara otomatis. NPM adalah sebuah repository. Artinya, NPM berlaku sebagai platform tempat orang dapat berbagi package JavaScript buatan mereka di npmjs.org. Anda pun dapat melakukannya dengan package buatan Anda. NPM juga berfungsi sebagai command line interface (CLI). Ini adalah tools untuk mengetikkan perintah untuk mengelola, mengunduh, dan meng-upload package JavaScript. Tampilannya mirip dengan Command Prompt di Windows atau Terminal di Linux.",
        link: "https://youtu.be/7t7CJwQlmGc",
        kategori : 3,
    },
    {
        judul : "Belajar Express.js",
        deskripsi: "Express JS adalah framework dari NodeJS yang dirancang secara fleksibel dan sederhana untuk membantu tahap pengembangan aplikasi back end. Express JS juga sangat berbeda dengan framework Laravel, dimana library ini memberikan kebebasan bagi para developer untuk mendesain aplikasi, sehingga memungkinan bagi setiap pengembang memiliki rancangan arsitektur yang berbeda dalam software yang dibangun.",
        link: "https://youtu.be/L7-u0CHm1GI",
        kategori : 3,
    },
    {
        judul : "MySQL Database",
        deskripsi: "MySQL adalah sebuah sistem manajemen basis data relasional (RDBMS) yang sangat populer. Ini adalah perangkat lunak open-source yang berarti Anda dapat menggunakannya tanpa membayar biaya lisensi. MySQL digunakan oleh banyak aplikasi web dan bisnis sebagai basis data penyimpanan dan pengelolaan data.",
        link: "https://youtu.be/xYBclb-sYQ4",
        kategori : 3,
    },
    {
        judul : "PostgreSQL Database",
        deskripsi: "PostgreSQL adalah sistem manajemen database relasional (RDBMS) yang bersifat open source. Manajemen database ini dapat mengolah data dalam tabel yang memiliki relasi satu sama lain dan dapat digunakan secara gratis serta bebas dimodifikasi. PostgreSQL adalah database yang banyak digunakan pada web app, aplikasi mobile, dan aplikasi analytics. Itulah kenapa aplikasi yang membutuhkan pengolahan data yang lebih kompleks akan lebih cocok menggunakan postgreSQL.",
        link: "https://youtu.be/iEeveYoD0SA",
        kategori : 3,
    },
    {
        judul : "Belajar RESTful API",
        deskripsi: "RESTful API (Representational State Transferful Application Programming Interface) adalah pendekatan desain arsitektural untuk membuat API web yang sesuai dengan prinsip-prinsip REST. REST (Representational State Transfer) sendiri adalah suatu gaya arsitektural yang diperkenalkan oleh Roy Fielding dalam disertasinya pada tahun 2000. API yang mengikuti prinsip REST sering disebut sebagai \"RESTful API.\"",
        link: "https://youtu.be/9ed3b0tSRvI",
        kategori : 3,
    },
    {
        judul : "Belajar Testing Api menggunakan postman untuk pemula",
        deskripsi: "API, atau Application Programming Interface, adalah serangkaian aturan dan protokol yang memungkinkan satu perangkat lunak berinteraksi dengan perangkat lunak lainnya. API memungkinkan berbagai aplikasi dan sistem untuk saling berkomunikasi, bertukar data, dan menggunakan fungsionalitas satu sama lain tanpa harus memahami detail internal dari masing-masing aplikasi. Postman adalah alat pengembangan API yang sangat populer yang memungkinkan pengembang untuk menguji, mengelola, dan mendokumentasikan API.",
        link: "https://youtu.be/bBUNP2YVIQA?si=dwws3T9oi3NqZ2aG",
        kategori : 3,
    }
]



// to store seeder into databse
for(let i=0; i<data.length; i++){
    createMateriService(data[i]);
}