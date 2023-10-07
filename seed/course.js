const {createMateriService} = require('../services/materiService')
const data = [
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/KrF84RTLPzo",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/vxnTfwMqhEk",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/FGjR8xmGvbY",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/qIEe5Vnq40w",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/34Y2KXdPEmo",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/9PQ2mehF3Js",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/T-kjiXW9WEw",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/aMzsobEKa_o",
        kategori : 1,
    },
    {
        judul : "Data Analitycs",
        deskripsi: "Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.",
        link: "https://youtu.be/IuoIzADAUik",
        kategori : 1,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/qzMPvbL3GRQ",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/hMDJyb7VkYw",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/mELDK1yS8iU",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/tBD8XlgXlus",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/SDROba_M42g",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/RjdKpxhAtI4",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/vaPutSH0sYg",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/qwL6ISjbaaE",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/fQbTeNX1mvM",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/qk3R3mYiuPA",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/4ghGLoxLP9o",
        kategori : 2,
    },
    {
        judul : "Menjadi Front End Developer untuk Pemula",
        deskripsi: "Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.",
        link: "https://youtu.be/lypsd9m8Lnw",
        kategori : 2,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/mRttyh1GQ5I",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/b39Xqf5iyjo",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/7t7CJwQlmGc",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/L7-u0CHm1GI",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/xYBclb-sYQ4",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/iEeveYoD0SA",
        kategori : 3,
    },
    {
        judul : "Menjadi Back End Developer untuk Pemula",
        deskripsi: "Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.",
        link: "https://youtu.be/9ed3b0tSRvI",
        kategori : 3,
    }
]



// to store seeder into databse
for(let i=0; i<data.length; i++){
    createMateriService(data[i]);
}