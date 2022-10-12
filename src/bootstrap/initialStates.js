import book1 from '../images/books/how-inovation-work.png';
import book2 from '../images/books/hea-kid.png';
import book3 from '../images/books/anwar.png';
import book4 from '../images/books/newton.png';

const datas = {
  books: [
    {
      id: 1,
      name: "How Inovation Work",
      penerbit: "Matt Ridley",
      kategori: "Motivation",
      "tahun terbit": 2019,
      deskripsi: "Deskripsi 1",
      image: book1
    },
    {
      id: 2,
      name: "Head Kid",
      penerbit: "David Baddiel",
      kategori: "Cartoon",
      "tahun terbit": 2018,
      deskripsi: "Deskripsi 2",
      image: book2
    },
    {
      id: 3,
      name: "Aku CHAIRIL ANWAR",
      penerbit: "Sjuman Djaya",
      kategori: "Sastra",
      "tahun terbit": 2019,
      deskripsi: "Deskripsi 3",
      image: book3
    },
    {
      id: 4,
      name: "Why? People - Isaac Newton",
      penerbit: "Yearimdang",
      kategori: "Biografi",
      "tahun terbit": 2020,
      deskripsi: "Deskripsi 4",
      image: book4
    },
  ],

  user: {
    username: "",
    password: "",
    access_token: "",
  }
}

const loginState = {
  // loading
  loginFetch: false,
  // if Success
  loginResponse: {},
  // if failed
  loginError: {},
};

// Create Buku
const createState = {
  buku: {},
}

export const states = {
  ...datas,
  ...loginState,
  ...createState,
};