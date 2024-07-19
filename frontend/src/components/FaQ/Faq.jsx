import React from 'react';
import CategoryAccordion from './CategoryAccor';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer'

const FAQ = () => {
  const faqs = [
    {
      category: 'Belanja di Sekencois',
      questions: [
        {
          title: 'Bagaimana cara melakukan checkout?',
          answer: 'Untuk melakukan checkout, Anda perlu...',
        },
        {
          title: 'Apakah saya dapat mengubah isi dari halaman keranjang saya?',
          answer: 'Anda dapat mengubah isi keranjang...',
        },
        {
          title: 'Bagaimana cara mencari produk di Sekencois?',
          answer: 'Untuk mencari produk di Sekencois...',
        },
      ],
    },
    {
      category: 'Informasi Umum',
      questions: [
        {
          title: 'Bagaimana cara mengubah dan memperbaharui nomor telepon?',
          answer: 'Untuk mengubah atau memperbarui nomor telepon...',
        },
        {
          title: 'Bagaimana cara mengubah password?',
          answer: 'untuk mengubah password...',
        },
        {
          title: 'Apakah saya bisa mengubah username saya?',
          answer:
            'Ketika aku mengalihkan pandangan dari layang-layang, aku melihat Bapak dan tiga orang lainnya berada di bibir pantai, bersiap untuk berlayar. Seingatku, Bapak sudah berlayar tadi malam, dan baru kembali tadi subuh. Kenapa sekarang mereka siap-siap ingin berlayar lagi? Apa tiba-tiba radar di kapal milik Haji Miun menangkap segerombolan ikan tuna di tengah laut sana? Eiy … itu pemikiran bodoh! Satu-satunya alat canggih yang mereka gunakan adalah naluri nelayan mereka yang sudah berpuluh-puluh tahun lamanya Ketika aku mengalihkan pandangan dari layang-layang, aku melihat Bapak dan tiga orang lainnya berada di bibir pantai, bersiap untuk berlayar. Seingatku, Bapak sudah berlayar tadi malam, dan baru kembali tadi subuh. Kenapa sekarang mereka siap-siap ingin berlayar lagi? Apa tiba-tiba radar di kapal milik Haji Miun menangkap segerombolan ikan tuna di tengah laut sana? Eiy … itu pemikiran bodoh! Satu-satunya alat canggih yang mereka gunakan adalah naluri nelayan mereka yang sudah berpuluh-puluh tahun lamanya',
        },
        {
          title: 'Bagaimana cara membuat akun sekencois?',
          answer: 'Cara membuat akun...',
        },
        {
          title: 'Mengapa akun saya ter log out otomatis?',
          answer: 'Akun anda ter log out...',
        },
        {
          title: 'Mengapa permintaan penghapusan akun saya ditolak?',
          answer: 'Permintaan penghapusan akun...',
        },
        {
          title: 'Mengapa saya tidak bisa login ke akun sekencois saya?',
          answer: 'Anda tidak bisa login ...',
        },
        {
          title: 'Mengapa akun saya dibatasi?',
          answer: 'Akun anda dibatasi karena...',
        },
        {
          title: 'Bagaimana cara mengatur ulang password akun jika saya lupa password?',
          answer: 'Cara mengatur ulang password...',
        },
        {
          title: 'Bagaimana cara menambah/mengedit/menghapus alamat saya?',
          answer: 'Cara menambah/mengedit/menghapus...',
        },
        {
          title: 'Bagaimana cara menghapus akun sekencois?',
          answer: 'Cara menghapus akun...',
        },
        {
          title: 'Bagaimana cara menambahkan/memverifikasi nomor telepon?',
          answer: 'Cara menambah/memverifikasi...',
        },
      ],
    },
    {
      category: 'Pembayaran',
      questions: [
        {
          title: 'Apa saja metode pembayaran untuk pembelian produk?',
          answer: 'Metode pembayaran yang tersedia...',
        },
        {
          title: 'Apakah saya dapat mengubah metode pembayaran saya?',
          answer: 'Anda dapat mengubah metode pembayaran...',
        },
        {
          title: 'Apa yang terjadi jika saya tidak membayar pesanan setelah batas waktu pembayaran berakhir?',
          answer: 'Anda dapat mengubah metode pembayaran...',
        },
        {
          title: 'Apa saja metode pembayaran yang didukung oleh sekencois?',
          answer: 'Metode pembayaran yang tersedia...',
        },
        {
          title: 'Apakah saya akan dikenakan pajak jika membeli produk di sekencois?',
          answer: 'Anda dapat mengubah metode pembayaran...',
        },
      ],
    },
    {
      category: 'Pesanan dan Pengiriman',
      questions: [
        {
          title: 'Bagaimana cara melihat riwayat pesanan?',
          answer: 'Anda dapat melihat riwayat pesanan Anda...',
        },
        {
          title: 'Bagaimana cara mendapatkan faktur pesanan saya?',
          answer: 'Faktur pesanan Anda akan tersedia...',
        },
      ],
    },
  ];

  return (
    <div className="mt-16">
      <Navbar />
      <div className="p-4 px-12  bg-gray-200 pb-16">
        {faqs.map((faqCategory, index) => (
          <CategoryAccordion key={index} category={faqCategory.category} questions={faqCategory.questions} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;
