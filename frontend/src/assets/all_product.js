import p1_img from "./product_1.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p2_img from "./product_2.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p3_img from "./product_3.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";

let all_product = [
  {
    id: 1,
    name: "Hoodie ala Jepang",
    category: "women",
    image: p1_img,
    new_price: "Rp. 80.000",
    old_price: "Rp. 100.000",
    description: "Bett'r Peanut Butter Cups 39 Gr Permen coklat dengan isian yang lembut,Bagian tengah selai kacang yang lembut dipadukan dengan coklat vegan yang tak tertahankan membuat rangkaian produk BARU Bett'r menjadi godaan yang tak tertahankan! Sentuhan terakhir adalah sedikit garam dalam resep setiap hidangan penutup untuk lebih menonjolkan rasa menawan secara keseluruhan Vegan OrganikGluten FreeLactose FreWith Coconut SugarSaran penyimpanan: Simpan di kulkas, jauhkan dari paparan sinar matahari langsung",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Modern", "Fashionable"],
    colors: ["Merah", "Hitam", "Putih"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-29'
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p2_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Striped Flutter Sleeve Blouse...",
    sizes: ["XS", "S", "M", "L"],
    tags: ["Casual", "Chic"],
    colors: ["Putih", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2023-06-29'
  },
  {
    id: 3,
    name: "Modern Elegant Dress",
    category: "women",
    image: p3_img,
    new_price: "Rp. 60.000",
    old_price: "Rp. 100.500",
    description: "Deskripsi produk untuk Modern Elegant Dress...",
    sizes: ["S", "M", "L"],
    tags: ["Elegant", "Modern"],
    colors: ["Merah", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-09'
  },
  {
    id: 4,
    name: "Casual Summer Blouse",
    category: "women",
    image: p4_img,
    new_price: "Rp. 100.000",
    old_price: "Rp. 150.000",
    description: "Deskripsi produk untuk Casual Summer Blouse...",
    sizes: ["M", "L", "XL"],
    tags: ["Casual", "Summer"],
    colors: ["Kuning", "Putih"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-02-22'
  },
  {
    id: 5,
    name: "Chic Autumn Sweater",
    category: "women",
    image: p5_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Chic Autumn Sweater...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Chic", "Autumn"],
    colors: ["Coklat", "Hijau"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-25'
  },
  {
    id: 6,
    name: "Vintage Polka Dot Dress",
    category: "women",
    image: p6_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Vintage Polka Dot Dress...",
    sizes: ["XS", "S", "M"],
    tags: ["Vintage", "Polka Dot"],
    colors: ["Hitam", "Putih"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-03-11'
  },
  {
    id: 7,
    name: "Elegant Evening Gown",
    category: "women",
    image: p7_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Elegant Evening Gown...",
    sizes: ["M", "L", "XL"],
    tags: ["Elegant", "Evening"],
    colors: ["Biru", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-03-11'
  },
  {
    id: 8,
    name: "Summer Beach Dress",
    category: "women",
    image: p8_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Summer Beach Dress...",
    sizes: ["S", "M", "L"],
    tags: ["Summer", "Beach"],
    colors: ["Putih", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-11'
  },
  {
    id: 9,
    name: "Winter Knit Sweater",
    category: "women",
    image: p9_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Winter Knit Sweater...",
    sizes: ["M", "L", "XL"],
    tags: ["Winter", "Knit"],
    colors: ["Abu-abu", "Putih"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-05-28'
  },
  {
    id: 10,
    name: "Formal Office Blazer",
    category: "women",
    image: p10_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Formal Office Blazer...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Formal", "Office"],
    colors: ["Hitam", "Abu-abu"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-02-20'
  },
  {
    id: 11,
    name: "Sporty Fitness Jacket",
    category: "women",
    image: p11_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Sporty Fitness Jacket...",
    sizes: ["XS", "S", "M", "L"],
    tags: ["Sporty", "Fitness"],
    colors: ["Biru", "Putih"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2023-12-20'
  },
  {
    id: 12,
    name: "Casual Denim Jacket",
    category: "women",
    image: p12_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Casual Denim Jacket...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Casual", "Denim"],
    colors: ["Biru", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2023-09-09'
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: "Rp. 91.000",
    old_price: "Rp. 120.000",
    description: "Deskripsi produk untuk Men Green Solid Zippered Jacket...",
    sizes: ["M", "L", "XL"],
    tags: ["Modern", "Bomber"],
    colors: ["Hijau", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-01-09'
  },
  {
    id: 14,
    name: "Elegant Long Coat",
    category: "men",
    image: p14_img,
    new_price: "Rp. 95.000",
    old_price: "Rp. 150.500",
    description: "Deskripsi produk untuk Elegant Long Coat...",
    sizes: ["M", "L", "XL"],
    tags: ["Elegant", "Coat"],
    colors: ["Hitam", "Abu-abu"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-03-29'
  },
  {
    id: 15,
    name: "Casual Spring Jacket",
    category: "men",
    image: p15_img,
    new_price: "Rp. 60.000",
    old_price: "Rp. 100.500",
    description: "Deskripsi produk untuk Casual Spring Jacket...",
    sizes: ["S", "M", "L"],
    tags: ["Casual", "Spring"],
    colors: ["Biru", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2022-03-16'
  },
  {
    id: 16,
    name: "Formal Office Suit",
    category: "men",
    image: p16_img,
    new_price: "Rp. 100.000",
    old_price: "Rp. 150.000",
    description: "Deskripsi produk untuk Formal Office Suit...",
    sizes: ["M", "L", "XL"],
    tags: ["Formal", "Office"],
    colors: ["Hitam", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2023-01-11'
  },
  {
    id: 17,
    name: "Casual T-shirt",
    category: "men",
    image: p17_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Casual T-shirt...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Casual", "T-shirt"],
    colors: ["Putih", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2022-11-20'
  },
  {
    id: 18,
    name: "Elegant Men Suit",
    category: "men",
    image: p18_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Elegant Men Suit...",
    sizes: ["M", "L", "XL"],
    tags: ["Elegant", "Suit"],
    colors: ["Hitam", "Abu-abu"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-05-02'
  },
  {
    id: 19,
    name: "Men Casual Jacket",
    category: "men",
    image: p19_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Men Casual Jacket...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Casual", "Jacket"],
    colors: ["Coklat", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-09-19'
  },
  {
    id: 20,
    name: "Vintage Leather Jacket",
    category: "men",
    image: p20_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Vintage Leather Jacket...",
    sizes: ["M", "L", "XL"],
    tags: ["Vintage", "Leather"],
    colors: ["Hitam", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-09-20'
  },
  {
    id: 21,
    name: "Casual Polo Shirt",
    category: "men",
    image: p21_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Casual Polo Shirt...",
    sizes: ["S", "M", "L"],
    tags: ["Casual", "Polo"],
    colors: ["Putih", "Abu-abu"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2023-05-12'
  },
  {
    id: 22,
    name: "Summer Linen Shirt",
    category: "men",
    image: p22_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Summer Linen Shirt...",
    sizes: ["S", "M", "L"],
    tags: ["Summer", "Linen"],
    colors: ["Putih", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-02-12'
  },
  {
    id: 23,
    name: "Elegant Men Blazer",
    category: "men",
    image: p23_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Elegant Men Blazer...",
    sizes: ["M", "L", "XL"],
    tags: ["Elegant", "Blazer"],
    colors: ["Hitam", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-02-23'
  },
  {
    id: 24,
    name: "Casual Men Hoodie",
    category: "men",
    image: p24_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Casual Men Hoodie...",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Casual", "Hoodie"],
    colors: ["Biru", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-12-09'
  },
  {
    id: 25,
    name: "Winter Warm Coat",
    category: "men",
    image: p25_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Winter Warm Coat...",
    sizes: ["M", "L", "XL"],
    tags: ["Winter", "Warm"],
    colors: ["Coklat", "Abu-abu"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2022-09-29'
  },
  {
    id: 26,
    name: "Modern Fit Men Suit",
    category: "men",
    image: p26_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Modern Fit Men Suit...",
    sizes: ["M", "L", "XL"],
    tags: ["Modern", "Suit"],
    colors: ["Hitam", "Biru"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-07-01'
  },
  {
    id: 27,
    name: "Sporty Men Jacket",
    category: "men",
    image: p27_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Sporty Men Jacket...",
    sizes: ["S", "M", "L"],
    tags: ["Sporty", "Jacket"],
    colors: ["Biru", "Hitam"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-04-21'
  },
  {
    id: 28,
    name: "Classic Trench Coat",
    category: "men",
    image: p28_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Classic Trench Coat...",
    sizes: ["M", "L", "XL"],
    tags: ["Classic", "Trench"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-03'
  },
  {
    id: 29,
    name: "Boys Green Shorts",
    category: "kid",
    image: p29_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Boys Green Shorts...",
    sizes: ["S", "M", "L"],
    tags: ["Green", "Shorts"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-01-09'
  },
  {
    id: 30,
    name: "Girls Purple Skirt",
    category: "kid",
    image: p30_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Girls Purple Skirt...",
    sizes: ["S", "M", "L"],
    tags: ["Purple", "Skirt"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2021-07-16'
  },
  {
    id: 31,
    name: "Boys Red Hoodie",
    category: "kid",
    image: p31_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Boys Red Hoodie...",
    sizes: ["M", "L", "XL"],
    tags: ["Red", "Hoodie"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-16'
  },
  {
    id: 32,
    name: "Girls Blue Dress",
    category: "kid",
    image: p32_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Girls Blue Dress...",
    sizes: ["XS", "S", "M"],
    tags: ["Blue", "Dress"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-05-10'
  },
  {
    id: 33,
    name: "Boys Yellow Shirt",
    category: "kid",
    image: p33_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Boys Yellow Shirt...",
    sizes: ["M", "L", "XL"],
    tags: ["Yellow", "Shirt"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-05-09'
  },
  {
    id: 34,
    name: "Girls Green Hoodie",
    category: "kid",
    image: p34_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Girls Green Hoodie...",
    sizes: ["S", "M", "L"],
    tags: ["Green", "Hoodie"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2022-10-20'
  },
  {
    id: 35,
    name: "Boys Orange T-Shirt",
    category: "kid",
    image: p35_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Boys Orange T-Shirt...",
    sizes: ["XS", "S", "M"],
    tags: ["Orange", "T-Shirt"],
    colors: ["Beige", "Coklat"],
    images: [p32_img, p34_img, p3_img, p6_img, p31_img],
    added_date:'2024-06-16'
  },
  {
    id: 36,
    name: "Girls Red Dress",
    category: "kid",
    image: p36_img,
    new_price: "Rp. 85.000",
    old_price: "Rp. 120.500",
    description: "Deskripsi produk untuk Girls Red Dress...",
    sizes: ["S", "M", "L"],
    tags: ["Red", "Dress"],
    colors: ["Beige", "Coklat"],
    images: [p36_img, p36_img, p36_img, p36_img, p36_img],
    added_date:'2024-06-16'
  }
];

export default all_product;
