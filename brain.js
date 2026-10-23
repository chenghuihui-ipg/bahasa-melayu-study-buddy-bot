(function () {
  "use strict";

  const TOPICS = [
    {
      key: "tatabahasa",
      title: "Tatabahasa",
      icon: "📝",
      shortLabel: "Asas",
      description: "Peraturan asas ayat dan penggunaan bahasa yang betul.",
      notes: "Tatabahasa ialah peraturan penggunaan bahasa yang membantu kita membina ayat dengan betul, jelas dan gramatis.",
      examples: [
        "Ali membaca buku di perpustakaan.",
        "Ibu memasak nasi dengan berhati-hati.",
        "Kamu mesti menulis ayat dengan tanda baca yang betul."
      ],
      practice: [
        "Bina satu ayat yang lengkap dengan subjek dan predikat.",
        "Tuliskan dua ayat dengan tanda baca yang betul.",
        "Nyatakan perbezaan antara ayat yang betul dan tidak betul."
      ]
    },
    {
      key: "kata-nama-am-khas",
      title: "Kata Nama Am dan Kata Nama Khas",
      icon: "🏷️",
      shortLabel: "Nama",
      description: "Kenali benda umum serta nama khas yang ditulis dengan huruf besar.",
      notes: "Kata nama am merujuk kepada benda, orang, tempat atau haiwan secara umum. Kata nama khas merujuk kepada nama tertentu seperti nama orang, tempat, atau institusi dan biasanya ditulis dengan huruf besar.",
      examples: [
        "Kata nama am: buku, sekolah, ikan, guru.",
        "Kata nama khas: Ali, Kuala Lumpur, Malaysia, Puan Salmah."
      ],
      practice: [
        "Senaraikan lima kata nama am yang ada di sekolah.",
        "Tulis tiga kata nama khas untuk nama orang.",
        "Bezakan kata nama am dan kata nama khas dalam dua ayat."
      ]
    },
    {
      key: "kata-ganti-nama-diri",
      title: "Kata Ganti Nama Diri",
      icon: "🧑",
      shortLabel: "Diri",
      description: "Belajar menggantikan nama orang dengan kata ganti yang tepat.",
      notes: "Kata ganti nama diri menggantikan nama orang supaya ayat lebih ringkas dan lancar. Contohnya saya, awak, dia, kami, kamu, mereka.",
      examples: [
        "Saya pergi ke sekolah setiap hari.",
        "Dia suka membaca buku cerita.",
        "Kami menyiapkan kerja rumah bersama-sama."
      ],
      practice: [
        "Tukarkan nama orang kepada kata ganti nama diri yang sesuai.",
        "Bina ayat menggunakan 'kamu' dan 'kami'.",
        "Nyatakan satu ayat yang menggunakan kata ganti nama diri orang ketiga."
      ]
    },
    {
      key: "kata-kerja",
      title: "Kata Kerja",
      icon: "🏃",
      shortLabel: "Tindakan",
      description: "Perkataan yang menunjukkan perbuatan, proses atau keadaan.",
      notes: "Kata kerja ialah perkataan yang menunjukkan perbuatan, proses atau keadaan. Contohnya membaca, menulis, berjalan, menangis, dan tertidur.",
      examples: [
        "Ali membaca buku di perpustakaan.",
        "Ibu memasak nasi untuk keluarga.",
        "Adik sedang tidur dengan lena."
      ],
      practice: [
        "Tuliskan lima kata kerja yang biasa anda lakukan di sekolah.",
        "Bina ayat yang menggunakan kata kerja 'melukis'.",
        "Kenal pasti kata kerja dalam ayat yang diberikan."
      ]
    },
    {
      key: "kata-adjektif",
      title: "Kata Adjektif",
      icon: "✨",
      shortLabel: "Sifat",
      description: "Menerangkan ciri, warna, bentuk atau keadaan sesuatu.",
      notes: "Kata adjektif menerangkan sifat atau keadaan sesuatu benda, orang, atau haiwan. Ia boleh menggambarkan warna, bentuk, saiz, keadaan, atau ciri lain.",
      examples: [
        "Rumah itu besar dan cantik.",
        "Baju itu berwarna biru.",
        "Kucing itu comel dan aktif."
      ],
      practice: [
        "Berikan lima kata adjektif yang menggambarkan keadaan cuaca.",
        "Tulis ayat menggunakan kata adjektif 'cerdas'.",
        "Nyatakan kata adjektif dalam satu ayat yang anda tulis."
      ]
    },
    {
      key: "kosa-kata",
      title: "Kosa Kata",
      icon: "📖",
      shortLabel: "Kosa",
      description: "Tambah perkataan baru untuk menjadikan ayat lebih menarik.",
      notes: "Kosa kata ialah himpunan perkataan yang kita faham dan gunakan dalam komunikasi harian. Memperkaya kosa kata membantu kita bercakap dan menulis dengan lebih berkesan.",
      examples: [
        "gembira, tenang, semangat, berhati-hati, bersih.",
        "Saya berasa gembira apabila mendapat markah yang baik.",
        "Kita perlu menjaga kebersihan kelas."
      ],
      practice: [
        "Senaraikan sepuluh perkataan yang berkaitan dengan sekolah.",
        "Bina ayat menggunakan perkataan 'semangat'.",
        "Tulis ayat yang menggambarkan perasaan anda di hari pertama sekolah."
      ]
    },
    {
      key: "binaan-ayat",
      title: "Binaan Ayat",
      icon: "🧩",
      shortLabel: "Ayat",
      description: "Susun subjek, predikat dan objek dengan betul.",
      notes: "Binaan ayat melibatkan susunan subjek, predikat, dan objek agar ayat menjadi lengkap dan gramatis. Subjek ialah pelaku, predikat ialah perbuatan, dan objek ialah benda yang terlibat.",
      examples: [
        "Subjek: Ali. Predikat: membaca buku. Objek: buku.",
        "Ali membaca buku di perpustakaan.",
        "Syafiq menyelesaikan kerja rumah dengan tenang."
      ],
      practice: [
        "Bina ayat dengan subjek dan predikat yang betul.",
        "Susun perkataan berikut supaya menjadi ayat yang betul.",
        "Nyatakan tiga komponen utama dalam binaan ayat."
      ]
    },
    {
      key: "pemahaman",
      title: "Pemahaman",
      icon: "💡",
      shortLabel: "Minda",
      description: "Fahami isi cerita dan jawab soalan berdasarkan petikan.",
      notes: "Pemahaman melibatkan membaca petikan dengan teliti, mengenal pasti idea utama, dan menjawab soalan berdasarkan maklumat yang diberikan.",
      examples: [
        "Baca petikan dengan teliti dan cari idea utama.",
        "Kenal pasti watak utama dan peristiwa penting.",
        "Jawab soalan berdasarkan maklumat dalam petikan."
      ],
      practice: [
        "Baca petikan ringkas dan jelaskan maksud utama.",
        "Nyatakan satu idea utama daripada cerita pendek.",
        "Jawab soalan tentang tindakan watak utama dalam petikan."
      ]
    }
  ];

  const LETTERS = ["A", "B", "C", "D"];

  const QUIZ_BANKS = {
    tatabahasa: [
      {
        question: "Apakah yang perlu diberi perhatian dalam tatabahasa supaya ayat menjadi gramatis?",
        options: { A: "Membaca sahaja", B: "Penggunaan huruf besar, tanda baca, dan susunan ayat", C: "Jumlah halaman", D: "Warna buku" },
        correctAnswer: "B",
        explanation: "Tatabahasa menitikberatkan penggunaan huruf besar, tanda baca, dan susunan ayat agar ayat jelas dan betul."
      },
      {
        question: "Ayat yang betul dari segi tanda baca ialah _______.",
        options: { A: "Ali pergi ke sekolah", B: "Ali pergi ke sekolah!", C: "Ali pergi ke sekolah?", D: "Ali pergi ke sekolah," },
        correctAnswer: "B",
        explanation: "Ayat itu lengkap dan mempunyai tanda seru yang sesuai untuk menunjukkan kenyataan yang lengkap."
      },
      {
        question: "Manakah ayat yang paling gramatis?",
        options: { A: "Saya suka makan nasi lemak.", B: "Saya suka makan makanan nasi lemak.", C: "Saya suka nasi makan lemak.", D: "Saya nasi lemak makan suka." },
        correctAnswer: "A",
        explanation: "Ayat A mempunyai susunan yang betul dan mudah difahami."
      },
      {
        question: "Apakah fungsi utama tatabahasa?",
        options: { A: "Membuat tulisan lebih cantik", B: "Membantu kita menulis dan bercakap dengan betul", C: "Menyusun nombor", D: "Mewarnakan teks" },
        correctAnswer: "B",
        explanation: "Tatabahasa membantu kita menyampaikan idea dengan betul dan jelas."
      },
      {
        question: "Dalam ayat 'Buku itu tebal.', perkataan 'tebal' ialah _______.",
        options: { A: "kata kerja", B: "kata nama", C: "kata adjektif", D: "kata sendi" },
        correctAnswer: "C",
        explanation: "'Tebal' menerangkan sifat buku, jadi ia termasuk dalam kata adjektif."
      }
    ],
    "kata-nama-am-khas": [
      {
        question: "Yang manakah kata nama khas?",
        options: { A: "sekolah", B: "kucing", C: "Kuala Lumpur", D: "buku" },
        correctAnswer: "C",
        explanation: "Kuala Lumpur ialah nama tempat tertentu, jadi ia kata nama khas."
      },
      {
        question: "Manakah contoh kata nama am?",
        options: { A: "Malaysia", B: "Ali", C: "rumah", D: "Selangor" },
        correctAnswer: "C",
        explanation: "Rumah ialah benda umum, manakala Malaysia dan Selangor ialah nama tempat khas."
      },
      {
        question: "Ayat yang manakah menggunakan kata nama khas dengan betul?",
        options: { A: "Saya tinggal di johor.", B: "Saya tinggal di Johor.", C: "Saya tinggal di rumah.", D: "Saya tinggal di jalan." },
        correctAnswer: "B",
        explanation: "Johor ialah nama tempat khas dan ditulis dengan huruf besar."
      },
      {
        question: "Pilih perkataan yang merupakan kata nama khas untuk orang.",
        options: { A: "guru", B: "Ahmad", C: "pokok", D: "bunga" },
        correctAnswer: "B",
        explanation: "Ahmad ialah nama orang tertentu, jadi ia kata nama khas."
      },
      {
        question: "Manakah ayat yang mengandungi kata nama am?",
        options: { A: "Kuala Lumpur sangat besar.", B: "Aina pergi ke pasar.", C: "Amir suka membaca buku.", D: "Puan Siti mengajar Bahasa Melayu." },
        correctAnswer: "C",
        explanation: "Buku ialah kata nama am kerana merujuk kepada benda umum."
      }
    ],
    "kata-ganti-nama-diri": [
      {
        question: "'Saya' ialah kata ganti nama diri untuk _______.",
        options: { A: "orang ketiga", B: "orang pertama", C: "orang kedua", D: "tempat" },
        correctAnswer: "B",
        explanation: "'Saya' digunakan oleh orang yang bercakap, jadi ia kata ganti nama diri orang pertama."
      },
      {
        question: "Manakah contoh kata ganti nama diri orang kedua?",
        options: { A: "kami", B: "dia", C: "kamu", D: "mereka" },
        correctAnswer: "C",
        explanation: "'Kamu' merujuk kepada orang yang diajak bercakap, iaitu orang kedua."
      },
      {
        question: "Ayat yang betul menggunakan kata ganti nama diri ialah _______.",
        options: { A: "Dia suka membaca buku.", B: "Buku saya sudah rosak.", C: "Mereka bermain bola di padang.", D: "Semua jawapan betul" },
        correctAnswer: "D",
        explanation: "Semua contoh itu menggunakan kata ganti nama diri dengan tepat."
      },
      {
        question: "'Kami' merujuk kepada _______.",
        options: { A: "satu orang sahaja", B: "dua orang atau lebih yang termasuk diri kita", C: "hanya haiwan", D: "tempat" },
        correctAnswer: "B",
        explanation: "'Kami' merujuk kepada sekumpulan orang yang termasuk diri kita sendiri."
      },
      {
        question: "Pilih kata ganti nama diri orang ketiga.",
        options: { A: "saya", B: "kami", C: "dia", D: "kamu" },
        correctAnswer: "C",
        explanation: "'Dia' merujuk kepada orang ketiga, bukan diri kita atau orang yang kita bercakap dengan."
      }
    ],
    "kata-kerja": [
      {
        question: "Manakah perkataan berikut ialah kata kerja?",
        options: { A: "cantik", B: "lari", C: "biru", D: "sangat" },
        correctAnswer: "B",
        explanation: "'Lari' menunjukkan perbuatan, maka ia kata kerja."
      },
      {
        question: "Ayat yang manakah mengandungi kata kerja dengan betul?",
        options: { A: "Rumah itu besar.", B: "Dia menulis karangan.", C: "Bunga itu cantik.", D: "Adik saya pintar." },
        correctAnswer: "B",
        explanation: "'Menulis' ialah perbuatan, jadi ia merupakan kata kerja."
      },
      {
        question: "'Membaca' termasuk dalam kategori _______.",
        options: { A: "kata nama", B: "kata kerja", C: "kata adjektif", D: "kata sendi" },
        correctAnswer: "B",
        explanation: "'Membaca' adalah tindakan, jadi ia kategori kata kerja."
      },
      {
        question: "Pilih kata kerja yang sesuai untuk melengkapkan ayat: 'Ibu _______ nasi di dapur.'",
        options: { A: "besar", B: "masak", C: "biru", D: "cepat" },
        correctAnswer: "B",
        explanation: "'Masak' ialah kata kerja yang sesuai dalam ayat itu."
      },
      {
        question: "'Menyanyi' berfungsi sebagai _______.",
        options: { A: "kata nama", B: "kata kerja", C: "kata adjektif", D: "kata hubung" },
        correctAnswer: "B",
        explanation: "'Menyanyi' menunjukkan perbuatan, jadi ia kata kerja."
      }
    ],
    "kata-adjektif": [
      {
        question: "Apakah kata adjektif dalam ayat: 'Bunga itu sangat cantik.'?",
        options: { A: "bunga", B: "itu", C: "sangat", D: "cantik" },
        correctAnswer: "D",
        explanation: "'Cantik' ialah kata adjektif yang menerangkan sifat bunga itu."
      },
      {
        question: "Manakah perkataan yang merupakan kata adjektif?",
        options: { A: "lari", B: "makan", C: "cerdas", D: "sekolah" },
        correctAnswer: "C",
        explanation: "'Cerdas' menerangkan sifat seseorang, jadi ia kata adjektif."
      },
      {
        question: "Ayat yang menggunakan kata adjektif dengan betul ialah _______.",
        options: { A: "Kucing itu tidur.", B: "Kucing itu sangat comel.", C: "Kucing itu suka makan.", D: "Kucing itu di halaman." },
        correctAnswer: "B",
        explanation: "'Comel' ialah kata adjektif yang menerangkan keadaan kucing itu."
      },
      {
        question: "'Pintar' adalah contoh kata adjektif untuk _______.",
        options: { A: "buah", B: "orang", C: "rumah", D: "baju" },
        correctAnswer: "B",
        explanation: "'Pintar' menerangkan sifat orang."
      },
      {
        question: "Pilih kata adjektif yang sesuai: 'Saya melihat awan yang _______.'",
        options: { A: "menyanyi", B: "banyak", C: "putih", D: "berlari" },
        correctAnswer: "C",
        explanation: "'Putih' ialah kata adjektif yang menerangkan warna awan."
      }
    ],
    "kosa-kata": [
      {
        question: "Apakah maksud kosa kata?",
        options: { A: "Himpunan perkataan yang kita tahu dan gunakan", B: "Tanda baca dalam ayat", C: "Nombor dalam matematik", D: "Gambar yang cantik" },
        correctAnswer: "A",
        explanation: "Kosa kata ialah himpunan perkataan yang kita faham dan gunakan dalam komunikasi."
      },
      {
        question: "Perkataan yang berfungsi untuk menggambarkan perasaan ialah _______.",
        options: { A: "gembira", B: "meja", C: "kerusi", D: "tangan" },
        correctAnswer: "A",
        explanation: "'Gembira' menggambarkan perasaan seseorang."
      },
      {
        question: "Pilih ayat yang menggunakan kosa kata yang tepat.",
        options: { A: "Saya merasa semangat untuk belajar.", B: "Saya merasa meja untuk belajar.", C: "Saya merasa kerusi untuk belajar.", D: "Saya merasa sekolah untuk belajar." },
        correctAnswer: "A",
        explanation: "'Semangat' ialah kosa kata yang sesuai dalam konteks belajar."
      },
      {
        question: "Perkataan 'tenang' bermaksud _______.",
        options: { A: "cepat", B: "tenang dan tidak gelisah", C: "besar", D: "mudah" },
        correctAnswer: "B",
        explanation: "'Tenang' menggambarkan keadaan yang aman dan tidak gelisah."
      },
      {
        question: "Jika kita mahu menulis ayat yang lebih menarik, kita boleh menambah _______.",
        options: { A: "lebih banyak kosa kata", B: "lebih banyak nombor", C: "lebih banyak warna", D: "lebih banyak gambar" },
        correctAnswer: "A",
        explanation: "Kosa kata yang kaya membuat ayat lebih menarik dan berkesan."
      }
    ],
    "binaan-ayat": [
      {
        question: "Unsur utama dalam binaan ayat ialah _______.",
        options: { A: "subjek, predikat, objek", B: "gambar, huruf, naskhah", C: "warna, bentuk, saiz", D: "nama, tempat, masa" },
        correctAnswer: "A",
        explanation: "Ayat yang lengkap biasanya mempunyai subjek, predikat, dan kadangkala objek."
      },
      {
        question: "Dalam ayat 'Amin membaca buku.', siapakah subjeknya?",
        options: { A: "Amin", B: "membaca", C: "buku", D: "di" },
        correctAnswer: "A",
        explanation: "'Amin' ialah pelaku dalam ayat itu, jadi ia subjek."
      },
      {
        question: "Apakah predikat dalam ayat 'Kucing itu tidur.'?",
        options: { A: "Kucing itu", B: "tidur", C: "itu", D: "Kucing" },
        correctAnswer: "B",
        explanation: "'Tidur' ialah perbuatan yang dilakukan oleh subjek, iaitu predikat."
      },
      {
        question: "Manakah ayat yang dibina dengan betul?",
        options: { A: "Saya sekolah ke pagi.", B: "Saya pergi ke sekolah pagi.", C: "Ke sekolah saya pergi pagi.", D: "Pagi pergi saya sekolah ke." },
        correctAnswer: "B",
        explanation: "Ayat B mempunyai susunan yang betul dan gramatis."
      },
      {
        question: "Objek dalam ayat 'Ibu membeli sayur.' ialah _______.",
        options: { A: "Ibu", B: "membeli", C: "sayur", D: "di" },
        correctAnswer: "C",
        explanation: "'Sayur' ialah benda yang dibeli, jadi ia objek."
      }
    ],
    pemahaman: [
      {
        question: "Apakah tujuan utama membaca petikan dalam pemahaman?",
        options: { A: "Mengira jumlah huruf", B: "Memahami makna dan isi teks", C: "Membuat lukisan", D: "Menulis karangan panjang" },
        correctAnswer: "B",
        explanation: "Pemahaman bertujuan untuk memahami isi dan maksud petikan."
      },
      {
        question: "Idea utama dalam petikan biasanya menjawab soalan _______.",
        options: { A: "apa yang berlaku atau perkara utama yang dibincangkan", B: "berapa harga buku", C: "siapa yang menangis", D: "di mana tarikh hari ini" },
        correctAnswer: "A",
        explanation: "Idea utama menerangkan perkara paling penting yang dibincangkan dalam teks."
      },
      {
        question: "Langkah pertama semasa menjawab soalan pemahaman ialah _______.",
        options: { A: "mengira perkataan", B: "membaca petikan dengan teliti", C: "menjawab tanpa membaca", D: "menyalin ayat rawak" },
        correctAnswer: "B",
        explanation: "Membaca petikan dengan teliti membantu kita memahami isi dan menjawab soalan dengan tepat."
      },
      {
        question: "Jika soalan menanya 'Apakah yang dilakukan watak utama?', jawapan terbaik ialah _______.",
        options: { A: "nama watak", B: "tindakan utama watak", C: "warna pakaian", D: "tarikh lahir" },
        correctAnswer: "B",
        explanation: "Soalan itu menumpukan tindakan yang dilakukan oleh watak utama."
      },
      {
        question: "Apakah maksud 'idea utama' dalam pemahaman?",
        options: { A: "cadangan yang tidak penting", B: "perkara paling penting dalam petikan", C: "semua perkataan yang terdapat dalam teks", D: "rujukan buku" },
        correctAnswer: "B",
        explanation: "Idea utama ialah perkara paling penting yang ingin disampaikan oleh penulis."
      }
    ]
  };

  const TOPIC_BY_KEY = Object.fromEntries(TOPICS.map((topic) => [topic.key, topic]));

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getTopicByKey(key) {
    return TOPIC_BY_KEY[key] || TOPICS[0];
  }

  function getTopicKeyFromText(rawText) {
    const text = normalizeText(rawText);
    const directMap = [
      ["tatabahasa", "tatabahasa"],
      ["kata nama", "kata-nama-am-khas"],
      ["kata nama am", "kata-nama-am-khas"],
      ["kata nama khas", "kata-nama-am-khas"],
      ["kata ganti", "kata-ganti-nama-diri"],
      ["kata ganti nama diri", "kata-ganti-nama-diri"],
      ["kata kerja", "kata-kerja"],
      ["kata adjektif", "kata-adjektif"],
      ["kosa kata", "kosa-kata"],
      ["binaan ayat", "binaan-ayat"],
      ["pemahaman", "pemahaman"],
      ["bahasa melayu", "tatabahasa"]
    ];

    for (const [needle, key] of directMap) {
      if (text.includes(needle)) return key;
    }

    for (const topic of TOPICS) {
      if (text.includes(normalizeText(topic.title))) return topic.key;
    }

    return null;
  }

  function isGreeting(text) {
    const normalized = normalizeText(text);
    return /^(hi|hey|hello|hai|hye|helo|salam|asalamualaikum|selamat pagi|selamat petang|selamat siang|apa khabar|apa khabar hari ini)$/.test(normalized)
      || /(hi|hey|hello|hai|hye|helo|apa khabar|salam)/.test(normalized);
  }

  function isAnswerChoice(text) {
    const normalized = normalizeText(text);
    if (!normalized) return null;
    const match = normalized.match(/\b(a|b|c|d)\b/);
    if (match) return match[1].toUpperCase();
    return null;
  }

  function validateQuestion(question) {
    if (!question || typeof question !== "object") return false;
    const questionText = String(question.question || question.q || "").trim();
    const explanation = String(question.explanation || "").trim();
    if (!questionText || !explanation) return false;
    if (!question.options || typeof question.options !== "object") return false;
    for (const letter of LETTERS) {
      if (!question.options[letter] || !String(question.options[letter]).trim()) return false;
    }
    const correctAnswer = String(question.correctAnswer || question.answer || "").trim().toUpperCase();
    if (!LETTERS.includes(correctAnswer)) return false;
    if (!question.options[correctAnswer]) return false;
    return true;
  }

  function getValidQuizQuestions(topicKey) {
    const bank = QUIZ_BANKS[topicKey] || [];
    return bank.filter(validateQuestion);
  }

  function detectIntent(rawText, state) {
    const text = String(rawText || "").trim();
    if (!text) return { intent: "unknown", topicKey: state.currentTopic || null };

    const normalized = normalizeText(text);
    const topicKeyFromText = getTopicKeyFromText(text) || state.currentTopic || null;

    if (state.isQuizActive) {
      if (isGreeting(normalized)) {
        return { intent: "greeting", topicKey: topicKeyFromText };
      }
      if (/(mana soalan|soalan di mana|abcd di mana|tak nampak soalan|saya tak nampak soalan|mana question|where is the question)/.test(normalized)) {
        return { intent: "quiz_show_current", topicKey: topicKeyFromText };
      }
      if (/(soalan seterusnya|next question|next|question seterusnya)/.test(normalized)) {
        return { intent: "quiz_next_question", topicKey: topicKeyFromText };
      }
      if (/(menu utama|menu|pilih tajuk|kembali ke menu)/.test(normalized)) {
        return { intent: "return_to_menu", topicKey: topicKeyFromText };
      }
      if (/(terima kasih|bye|goodbye|jumpa lagi|selamat tinggal)/.test(normalized)) {
        return { intent: "goodbye", topicKey: topicKeyFromText };
      }
      const answerChoice = isAnswerChoice(text);
      if (answerChoice) {
        return { intent: "quiz_answer", topicKey: topicKeyFromText, answer: answerChoice };
      }
      return { intent: "unknown", topicKey: topicKeyFromText };
    }

    if (isGreeting(normalized)) {
      return { intent: "greeting", topicKey: topicKeyFromText };
    }

    if (/(help|bantuan|tolong|saya tak faham|saya tidak faham|saya tak paham|apa yang boleh saya buat)/.test(normalized)) {
      return { intent: "help", topicKey: topicKeyFromText };
    }

    if (/(menu utama|menu|senarai topik|pilih tajuk|tunjuk topic|topik utama)/.test(normalized)) {
      return { intent: "return_to_menu", topicKey: topicKeyFromText };
    }

    if (/(terima kasih|selamat tinggal|bye|goodbye|jumpa lagi)/.test(normalized)) {
      return { intent: "goodbye", topicKey: topicKeyFromText };
    }

    if (topicKeyFromText) {
      if (/(apa itu|apakah|terangkan|jelaskan|faham|tak faham|apa maksud|apa itu|maksud)/.test(normalized)) {
        return { intent: "explain_topic", topicKey: topicKeyFromText };
      }
      if (/(contoh lain|contoh lagi|lain contoh|beri contoh|bagi contoh|contoh)/.test(normalized)) {
        return {
          intent: /(contoh lain|contoh lagi|lain contoh)/.test(normalized) ? "request_more_examples" : "request_example",
          topicKey: topicKeyFromText
        };
      }
      if (/(lebih mudah|mudah|ringkas|terangkan lebih mudah|saya tak faham)/.test(normalized)) {
        return { intent: "request_simpler_explanation", topicKey: topicKeyFromText };
      }
      if (/(nota|nota ringkas|ringkasan|ringkas)/.test(normalized)) {
        return { intent: "request_notes", topicKey: topicKeyFromText };
      }
      if (/(latihan|practice|soalan latihan|latihan soalan)/.test(normalized)) {
        return { intent: "request_practice", topicKey: topicKeyFromText };
      }
      if (/(kuiz|quiz|nak kuiz|ujian)/.test(normalized)) {
        return { intent: "request_quiz", topicKey: topicKeyFromText };
      }
      if (/(tukar topic|tukar tajuk|change topic|pilih topik lain|tajuk lain|topik lain)/.test(normalized)) {
        return { intent: "change_topic", topicKey: topicKeyFromText };
      }
      return { intent: "topic_selection", topicKey: topicKeyFromText };
    }

    if (/(contoh lain|contoh lagi|lain contoh|beri contoh|bagi contoh|contoh)/.test(normalized)) {
      return { intent: "request_example", topicKey: state.currentTopic || null };
    }

    if (/(nota|ringkasan|nota ringkas)/.test(normalized)) {
      return { intent: "request_notes", topicKey: state.currentTopic || null };
    }

    if (/(latihan|practice|soalan latihan)/.test(normalized)) {
      return { intent: "request_practice", topicKey: state.currentTopic || null };
    }

    if (/(kuiz|quiz|nak kuiz|ujian)/.test(normalized)) {
      return { intent: "request_quiz", topicKey: state.currentTopic || null };
    }

    if (/(apa itu|apakah|terangkan|jelaskan|faham|tak faham|apa maksud|lebih mudah)/.test(normalized)) {
      return { intent: "explain_topic", topicKey: state.currentTopic || null };
    }

    return { intent: "unknown", topicKey: state.currentTopic || null };
  }

  window.StudyBuddyBrain = {
    TOPICS,
    QUIZ_BANKS,
    LETTERS,
    getTopicByKey,
    getTopicKeyFromText,
    normalizeText,
    validateQuestion,
    getValidQuizQuestions,
    detectIntent,
    isGreeting,
    isAnswerChoice
  };
})();
