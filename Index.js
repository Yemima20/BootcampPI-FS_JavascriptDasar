// // JS-Dasar introduction nomor 1
// // Deklarasi variabel nama
// const nama = "Gloriaza Yemima L. O";
// // Deklarasi variabel asal daerah
// const asalDaerah = "Jawa Barat";
// // Deklarasi variabel tanggal lahir
// const tanggalLahir = "2 Februari 2004";
// // Deklarasi variabel umur
// const umur = 19;
// // Deklarasi variabel posisi pekerjaan
// const posisiPekerjaan = "Mahasiswa";

//// console log untuk nomor 5
// console.log(nama, asalDaerah, tanggalLahir, umur, posisiPekerjaan);

// JS-Dasar introduction nomor 2
/*let inputUsername = prompt("Masukan nama user:");
let inputCountry = prompt("Masukan asal negara:");
let cekData = confirm("Apakah data yang diisi sudah benar?");
if (cekData == true && inputUsername && inputCountry != "") {
    alert("Terima kasih sudah mengisi form");
} else {
    alert("Tolong isi data dengan benar");
}*/

//JS-Dasar introduction nomor 6
let tambah = 25 + 10;
let kali = 100 * 2;
let bagi = 99 / 2;
let modulus = 99 % 2;
console.log("hasil penjumlahan: " + tambah + ",", " hasil kali: " + kali + ",", " hasil bagi: " + bagi + ",",
    " hasil modulus: " + modulus);

// JS Dasar - Conditional nomor 1
let divisi = "CEO";

if (divisi === "CEO") {
    console.log("Jika saya sebagai CEO maka tugas saya adalah menyusun visi-misi, membuat perencanaan strategik, dan membuat serta memelihara budaya di perusahaan");
} else if (divisi === "CTO") {
    console.log("Jika saya sebagai CTO maka tugas saya adalah mengatur dan mengembangkan dari pelaksanaan rencana dari segi teknologi di perusahaan");
} else if (divisi === "Content Manager") {
    console.log("Jika saya sebagai Content Manager maka tugas saya adalah bertanggung jawab dalam merancang, mengelola, dan mengawasi strategi konten");
} else {
    console.log("Tugas dari divisi yang anda cari tidak ada");
}

// JS Dasar - Conditional nomor 2
let a = 7;
let b = 7;

console.log("a lebih besar dari b: " + a > b);
console.log("a lebih kecil dari b: " + a < b);
console.log("a sama dengan b: " + a == b);

// JS Dasar - Conditional nomor 3
let angkaPerHari = 7;

switch (angkaPerHari) {
    case 1:
        console.log("Hari Minggu");
        break;
    case 2:
        console.log("Hari Senin");
        break;
    case 3:
        console.log("Hari Selasa");
        break;
    case 4:
        console.log("Hari Rabu");
        break;
    case 5:
        console.log("Hari Kamis");
        break;
    case 6:
        console.log("Hari Jumat");
        break;
    case 7:
        console.log("Hari Sabtu");
        break;
    default:
        console.log("Hari berdasarkan angka tidak ditemukan");
        break;
}

// JS Dasar - Conditional nomor 4
let arahKarakter = "RIGHT";

switch (arahKarakter) {
    case "UP":
        console.log("Karakter berjalan keatas");
        break;
    case "RIGHT":
        console.log("Karakter berjalan kekanan");
        break;
    case "DOWN":
        console.log("Karakter berjalan kebawah");
        break;
    case "LEFT":
        console.log("Karakter berjalan kekiri");
        break;
    default:
        console.log("Karakter tidak bergerak ke arah manapun");
        break;
}

// JS Dasar - Looping nomor 1
/*let userInnerHtml = document.getElementById("jumlah-user");

for (let user = 1; user <= 100; user++) {
    userInnerHtml.innerHTML += (`<p style = "margin: 0 1rem;">User ke-${user}</p><br/>`);
}*/

// JS Dasar - Looping nomor 2
let increment = 0;
for (let i = 0; i < 10; i++) {
    increment += 2;
    console.log(increment);
}

// JS Dasar - Looping nomor 3
for (let j = 0; j <= 20; j++) {
    if (j % 2 === 0) {
        console.log(j + " = genap");
    } else {
        console.log(j + " = ganjil");
    }
}

// JS Dasar - Looping nomor 4
/*let yesClick = 0;
let Perulangan = confirm("Apakah anda mau mengulang");

while (Perulangan == true) {
    yesClick++;
    Perulangan = confirm("Apakah anda mau mengulang");
}
alert("Perulangan sudah dilakukan sebanyak " + yesClick + " kali");
*/

// JS Dasar - Looping nomor 5
/*let questionCheck = prompt("Sebutkan kepanjangan dari nama IB?");

while (questionCheck != "Impact Byte") {
    questionCheck = prompt("Sebutkan kepanjangan dari nama IB?");
}
alert("Selamat jawaban kamu benar");
*/