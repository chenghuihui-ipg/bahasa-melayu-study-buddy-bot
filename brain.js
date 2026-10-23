(function () {
  "use strict";

  const TOPICS = [
    {
      key: "tatabahasa",
      label: "Tatabahasa",
      keywords: ["tatabahasa", "tatabahasa bm", "tatabahasa bahasa melayu", "bahasa melayu"],
      explanation: "Tatabahasa ialah peraturan penggunaan bahasa yang membantu kita membina ayat dengan betul, jelas dan gramatis.",
      examples: ["Ayat yang betul menggunakan tanda baca yang tepat.", "Kata kerja berubah mengikut masa dan subjek."],
      practice: [
        "Bina satu ayat yang menggunakan subjek, predikat dan objek dengan betul.",
        "Kenal pasti kata kerja dalam ayat: 'Amir membaca buku di perpustakaan.'.",
        "Tuliskan satu ayat yang mengandungi kata adjektif."
      ]
    },
    {
      key: "kata-nama-am-khas",
      label: "Kata Nama Am & Khas",
      keywords: ["kata nama", "kata nama am", "kata nama khas", "nama am", "nama khas"],
      explanation: "Kata nama am merujuk kepada benda, orang, tempat atau haiwan secara umum. Kata nama khas merujuk kepada nama tertentu dan biasanya ditulis dengan huruf besar.",
      examples: ["Kata nama am: buku, sekolah, ayam, guru.", "Kata nama khas: Ali, Kuala Lumpur, Malaysia, Puan Salmah."],
      practice: [
        "Senaraikan lima kata nama am yang boleh anda lihat di sekolah.",
        "Tulis tiga kata nama khas untuk orang.",
        "Bezakan kata nama am dan kata nama khas dalam satu ayat."
      ]
    },
    {
      key: "kata-ganti-nama-diri",
      label: "Kata Ganti Nama Diri",
      keywords: ["kata ganti nama", "kata ganti nama diri", "ganti nama diri"],
      explanation: "Kata ganti nama diri menggantikan nama orang untuk menjadikan ayat lebih ringkas dan lancar.",
      examples: ["Saya, awak, kami, mereka, dia, kita."],
      practice: [
        "Bina ayat yang menggunakan 'saya' dan 'kami'.",
        "Tukarkan nama orang kepada kata ganti nama yang sesuai.",
        "Nyatakan penggunaan kata ganti nama diri dalam ayat."
      ]
    },
    {
      key: "kata-kerja",
      label: "Kata Kerja",
      keywords: ["kata kerja", "kerja"],
      explanation: "Kata kerja ialah perkataan yang menunjukkan perbuatan, proses atau keadaan. Contohnya membaca, menulis, berjalan, menangis.",
      examples: ["Ali membaca buku.", "Ibu memasak nasi.", "Adik tidur dengan lena."],
      practice: [
        "Tuliskan lima kata kerja yang biasa anda lakukan di sekolah.",
        "Bina ayat menggunakan kata kerja 'melukis'.",
        "Kenal pasti kata kerja dalam ayat: 'Kucing itu melompat ke atas meja.'."
      ]
    },
    {
      key: "kata-adjektif",
      label: "Kata Adjektif",
      keywords: ["kata adjektif", "adjektif"],
      explanation: "Kata adjektif menerangkan sifat atau keadaan sesuatu benda, orang atau haiwan.",
      examples: ["besar, kecil, cantik, ceria, pintar, cepat."],
      practice: [
        "Berikan lima kata adjektif yang menggambarkan keadaan cuaca.",
        "Tuliskan ayat menggunakan kata adjektif 'cerdas'.",
        "Nyatakan kata adjektif dalam ayat: 'Rumah itu besar dan cantik.'."
      ]
    },
    {
      key: "kosa-kata",
      label: "Kosa Kata",
      keywords: ["kosa kata", "perkataan baru", "vocabulary"],
      explanation: "Kosa kata ialah himpunan perkataan yang kita tahu dan gunakan dalam komunikasi harian.",
      examples: ["gembira, tenang, semangat, berhati-hati, bersih."],
      practice: [
        "Senaraikan sepuluh perkataan yang berkaitan dengan sekolah.",
        "Bina ayat menggunakan perkataan 'semangat'.",
        "Tukarkan ayat mudah kepada ayat yang lebih menarik dengan kosa kata yang sesuai."
      ]
    },
    {
      key: "binaan-ayat",
      label: "Binaan Ayat",
      keywords: ["binaan ayat", "membina ayat", "susun ayat"],
      explanation: "Binaan ayat melibatkan susunan subjek, predikat dan objek agar ayat menjadi lengkap dan gramatis.",
      examples: ["Subjek: Ali. Predikat: membaca buku. Objek: buku.", "Ali membaca buku di rumah."],
      practice: [
        "Bina ayat dengan subjek dan predikat yang betul.",
        "Susun perkataan berikut: 'saya / ke / sekolah / pagi / setiap'.",
        "Nyatakan tiga komponen utama dalam binaan ayat."
      ]
    },
    {
      key: "pemahaman",
      label: "Pemahaman",
      keywords: ["pemahaman", "membaca pemahaman", "soalan pemahaman"],
      explanation: "Pemahaman melibatkan menilai makna teks, mengenal pasti idea utama dan menjawab soalan berdasarkan petikan.",
      examples: ["Baca petikan, cari idea utama, jawap soalan yang dikemukakan."],
      practice: [
        "Baca satu petikan ringkas dan jelaskan maksud utama.",
        "Nyatakan satu idea utama daripada cerita pendek.",
        "Jawab soalan: 'Apakah yang dilakukan watak utama?'"
      ]
    }
  ];

  const LETTERS = ["A", "B", "C", "D"];

  const RAW_QUIZZES = {
    "kata-nama-am-khas": [
      {
        q: "Manakah yang merupakan kata nama khas?",
        choices: ["sekolah", "rumah", "Ali", "buku"],
        answer: "C",
        explanation: "'Ali' ialah nama orang, jadi ia kata nama khas."
      },
      {
        q: "Yang manakah merupakan kata nama am?",
        choices: ["Selangor", "Kuala Lumpur", "ahli", "Malaysia"],
        answer: "C",
        explanation: "'Ahli' ialah perkataan umum untuk orang, jadi ia kata nama am."
      },
      {
        q: "Ayat yang manakah mengandungi kata nama khas dengan betul?",
        choices: ["Siti pergi ke pasar.", "Amin membeli buku.", "Saya tinggal di Johor.", "Anak itu menangis."],
        answer: "C",
        explanation: "'Johor' ialah nama tempat khusus dan ditulis dengan huruf besar."
      },
      {
        q: "Manakah perkataan ini menandakan kata nama am?",
        choices: ["Miri", "Kota Kinabalu", "sungai", "Aina"],
        answer: "C",
        explanation: "'Sungai' ialah nama umum, bukan nama tempat tertentu."
      },
      {
        q: "Pilih contoh kata nama khas yang betul.",
        choices: ["gunung", "bunga", "Puan Lee", "buah"],
        answer: "C",
        explanation: "'Puan Lee' ialah nama orang tertentu, maka ia kata nama khas."
      }
    ],
    "kata-ganti-nama-diri": [
      {
        q: "'Saya' ialah contoh kata ganti nama diri untuk _______.",
        choices: ["orang ketiga", "orang pertama", "orang kedua", "nama benda"],
        answer: "B",
        explanation: "'Saya' digunakan oleh orang yang bercakap, jadi ia kata ganti nama diri orang pertama."
      },
      {
        q: "'Kamu' sesuai digunakan untuk _______.",
        choices: ["orang yang dilawati", "orang yang bercakap", "binatang", "tempat"],
        answer: "A",
        explanation: "'Kamu' merujuk kepada orang yang dituju atau diajak bercakap."
      },
      {
        q: "Pilih ayat yang betul menggunakan kata ganti nama diri.",
        choices: ["Dia suka membaca buku.", "Buku saya sudah rosak.", "Mereka bermain bola di padang.", "Semua jawapan betul"],
        answer: "D",
        explanation: "Semua contoh tersebut betul kerana menggunakan kata ganti nama diri dengan tepat."
      },
      {
        q: "'Kami' merujuk kepada _______.",
        choices: ["satu orang", "dua orang atau lebih termasuk diri", "haiwan", "tempat"],
        answer: "B",
        explanation: "'Kami' merujuk kepada sekumpulan orang termasuk diri kita."
      },
      {
        q: "Manakah yang merupakan kata ganti nama diri orang ketiga?",
        choices: ["saya", "kami", "dia", "kamu"],
        answer: "C",
        explanation: "'Dia' merujuk kepada orang ketiga yang bukan diri kita atau orang yang kita bercakap dengan."
      }
    ],
    "kata-kerja": [
      {
        q: "Manakah perkataan yang merupakan kata kerja?",
        choices: ["cerah", "lari", "cantik", "sangat"],
        answer: "B",
        explanation: "'Lari' ialah perbuatan, maka ia kata kerja."
      },
      {
        q: "Ayat yang manakah mengandungi kata kerja dengan betul?",
        choices: ["Bunga itu sangat cantik.", "Dia menulis karangan.", "Rumah itu besar.", "Adik saya pintar."],
        answer: "B",
        explanation: "'Menulis' menunjukkan perbuatan, jadi ia kata kerja."
      },
      {
        q: "'Membaca' termasuk dalam kategori _______.",
        choices: ["kata nama", "kata kerja", "kata adjektif", "kata sendi"],
        answer: "B",
        explanation: "'Membaca' adalah tindakan yang dilakukan oleh seseorang."
      },
      {
        q: "Pilih kata kerja yang sesuai dalam ayat: 'Ibu _______ nasi di dapur.'",
        choices: ["baju", "masak", "cantik", "sekolah"],
        answer: "B",
        explanation: "'Masak' ialah kata kerja yang sesuai dalam ayat itu."
      },
      {
        q: "Manakah perkataan 'menyanyi' berfungsi sebagai?",
        choices: ["kata nama", "kata kerja", "kata adjektif", "kata hubung"],
        answer: "B",
        explanation: "'Menyanyi' menunjukkan perbuatan, jadi ia kata kerja."
      }
    ],
    "kata-adjektif": [
      {
        q: "Apakah kata adjektif dalam ayat: 'Bunga itu sangat cantik.'?",
        choices: ["bunga", "itu", "sangat", "cantik"],
        answer: "D",
        explanation: "'Cantik' ialah kata adjektif yang menerangkan sifat bunga itu."
      },
      {
        q: "Manakah perkataan yang merupakan kata adjektif?",
        choices: ["lari", "makan", "cerdas", "sekolah"],
        answer: "C",
        explanation: "'Cerdas' menerangkan sifat seseorang."
      },
      {
        q: "Ayat yang menggunakan kata adjektif dengan betul ialah _______.",
        choices: ["Kucing itu tidur.", "Kucing itu sangat comel.", "Kucing itu suka makan.", "Kucing itu di halaman."],
        answer: "B",
        explanation: "'Comel' ialah kata adjektif yang menerangkan keadaan kucing."
      },
      {
        q: "'Pintar' adalah contoh kata adjektif untuk _______.",
        choices: ["buah", "orang", "rumah", "baju"],
        answer: "B",
        explanation: "'Pintar' menerangkan sifat orang."
      },
      {
        q: "Pilih kata adjektif yang sesuai: 'Saya melihat awan yang _______.'",
        choices: ["menyanyi", "banyak", "putih", "berlari"],
        answer: "C",
        explanation: "'Putih' ialah kata adjektif yang menerangkan warna awan."
      }
    ],
    "binaan-ayat": [
      {
        q: "Unsur utama dalam binaan ayat ialah _____.",
        choices: ["subjek, predikat, objek", "gambar, huruf, naskhah", "warna, bentuk, saiz", "nama, tempat, masa"],
        answer: "A",
        explanation: "Ayat lengkap biasanya mempunyai subjek, predikat dan kadangkala objek."
      },
      {
        q: "Dalam ayat 'Amin membaca buku.', siapakah subjeknya?",
        choices: ["Amin", "membaca", "buku", "di"],
        answer: "A",
        explanation: "'Amin' ialah pelaku atau subjek dalam ayat itu."
      },
      {
        q: "Apakah predikat dalam ayat 'Kucing itu tidur.'?",
        choices: ["Kucing itu", "tidur", "itu", "Kucing"],
        answer: "B",
        explanation: "'Tidur' ialah tindakan yang dibuat oleh subjek."
      },
      {
        q: "Manakah ayat yang dibina dengan betul?",
        choices: ["Saya sekolah ke pagi.", "Saya pergi ke sekolah pagi.", "Ke sekolah saya pergi pagi.", "Pagi pergi saya sekolah ke."],
        answer: "B",
        explanation: "Ayat itu menunjukkan susunan yang betul dan gramatis."
      },
      {
        q: "Objek dalam ayat 'Ibu membeli sayur.' ialah _______.",
        choices: ["Ibu", "membeli", "sayur", "di"],
        answer: "C",
        explanation: "'Sayur' ialah benda yang dibeli, jadi ia objek."
      }
    ],
    "pemahaman": [
      {
        q: "Apakah tujuan utama petikan dipelajari dalam pemahaman?",
        choices: ["mengira nombor", "memahami makna teks", "menghafal jadual", "membina lukisan"],
        answer: "B",
        explanation: "Pemahaman menumpukan pada memahami isi dan maksud dalam petikan."
      },
      {
        q: "Idea utama dalam petikan biasanya menjawab soalan _______.",
        choices: ["apa yang berlaku atau perkara utama yang dibincangkan", "berapa harga buku", "siapa yang menangis", "dimana tarikh hari ini"],
        answer: "A",
        explanation: "Idea utama menjelaskan tentang perkara utama yang dibincangkan dalam teks."
      },
      {
        q: "Apakah langkah pertama semasa menjawab soalan pemahaman?",
        choices: ["mengira perkataan", "membaca petikan dengan teliti", "menjawab tanpa membaca", "menyalin ayat secara rawak"],
        answer: "B",
        explanation: "Membaca petikan dengan teliti membantu kita memahami isi dan menjawab soalan dengan tepat."
      },
      {
        q: "Jika soalan bertanya 'Apakah yang dilakukan watak utama?', jawapan terbaik ialah _______.",
        choices: ["nama watak", "tindakan utama watak", "huraian warna", "tarikh kelahiran"],
        answer: "B",
        explanation: "Soalan itu menumpukan pada tindakan yang dilakukan oleh watak utama."
      },
      {
        q: "Apakah maksud perkataan 'idea utama' dalam pemahaman?",
        choices: ["cadangan yang tidak penting", "perkara paling penting dalam petikan", "semua perkataan dalam teks", "rujukan buku"],
        answer: "B",
        explanation: "Idea utama ialah perkara paling penting yang ingin disampaikan oleh penulis."
      }
    ]
  };

  function normalizeQuizQuestion(rawQuestion) {
    if (!rawQuestion || typeof rawQuestion !== "object") {
      return null;
    }

    const questionText = String(rawQuestion.question || rawQuestion.q || "").trim();
    let options = {};

    if (rawQuestion.options && typeof rawQuestion.options === "object") {
      LETTERS.forEach((letter) => {
        options[letter] = String(rawQuestion.options[letter] || "").trim();
      });
    } else if (Array.isArray(rawQuestion.choices)) {
      LETTERS.forEach((letter, index) => {
        options[letter] = String(rawQuestion.choices[index] || "").trim();
      });
    }

    const correctAnswer = String(rawQuestion.correctAnswer || rawQuestion.answer || "").trim().toUpperCase();
    const explanation = String(rawQuestion.explanation || "").trim();

    if (!questionText || !LETTERS.every((letter) => options[letter] && options[letter].length > 0)) {
      return null;
    }
    if (!LETTERS.includes(correctAnswer) || !options[correctAnswer]) {
      return null;
    }
    if (!explanation) {
      return null;
    }

    return {
      question: questionText,
      options,
      correctAnswer,
      explanation
    };
  }

  const QUIZZES = {};
  Object.keys(RAW_QUIZZES).forEach((topicKey) => {
    QUIZZES[topicKey] = (RAW_QUIZZES[topicKey] || [])
      .map(normalizeQuizQuestion)
      .filter(Boolean);
  });

  const KB = {};
  TOPICS.forEach((topic) => {
    KB[topic.key] = {
      ...topic,
      practice: topic.practice || []
    };
  });

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getTopicKeyFromText(text) {
    const norm = normalizeText(text);

    for (const topic of TOPICS) {
      if (topic.keywords.some((keyword) => norm.includes(normalizeText(keyword)))) {
        return topic.key;
      }
    }

    const directMap = {
      "kata nama": "kata-nama-am-khas",
      "kata ganti": "kata-ganti-nama-diri",
      "ganti nama": "kata-ganti-nama-diri",
      "kata kerja": "kata-kerja",
      "kata adjektif": "kata-adjektif",
      "kosa kata": "kosa-kata",
      "binaan ayat": "binaan-ayat",
      "pemahaman": "pemahaman",
      "tatabahasa": "tatabahasa"
    };

    for (const [needle, key] of Object.entries(directMap)) {
      if (norm.includes(needle)) return key;
    }

    return null;
  }

  function getSentenceText(topicKey, mode) {
    const topic = KB[topicKey] || TOPICS[0];
    const intro = `${topic.label}: ${topic.explanation}`;
    const examples = topic.examples ? `\n\nContoh: ${topic.examples.join(" • ")}` : "";
    const extra = mode === "practice" ? "\n\nCuba jawab soalan latihan yang saya berikan." : "\n\nBoleh tanya saya untuk contoh lain, latihan, atau kuiz.";
    return intro + examples + extra;
  }

  function createSession() {
    return {
      state: "idle",
      topic: null,
      quizTopic: null,
      quizQuestions: [],
      quizIndex: 0,
      quizScore: 0,
      quizAnswered: false,
      lastAnswer: "",
      practiceIndex: 0,
      practiceTopic: null,
      lastPrompt: ""
    };
  }

  function validateQuizQuestion(question) {
    if (!question || typeof question !== "object") return false;
    if (!question.question || !question.explanation) return false;
    if (!question.options || typeof question.options !== "object") return false;
    if (!LETTERS.every((letter) => typeof question.options[letter] === "string" && question.options[letter].trim().length > 0)) {
      return false;
    }
    const correctAnswer = String(question.correctAnswer || "").trim().toUpperCase();
    if (!LETTERS.includes(correctAnswer) || !question.options[correctAnswer]) {
      return false;
    }
    return true;
  }

  function getValidQuizQuestions(topicKey) {
    if (!topicKey || !QUIZZES[topicKey]) return [];
    return QUIZZES[topicKey].filter(validateQuizQuestion);
  }

  function getCurrentQuizQuestion(session) {
    const questions = session.quizQuestions || [];
    return questions[session.quizIndex] || null;
  }

  function chooseTopic(session, topicKey) {
    if (!topicKey || !KB[topicKey]) {
      return {
        session,
        reply: "Saya belum kenal topik itu. Sila pilih topik seperti Kata Nama, Kata Kerja, Binaan Ayat, atau taip 'menu'."
      };
    }

    session.state = "topic_selected";
    session.topic = topicKey;
    session.practiceTopic = topicKey;
    session.practiceIndex = 0;
    return {
      session,
      reply: getSentenceText(topicKey, "info")
    };
  }

  function startPractice(session, topicKey) {
    const key = topicKey || session.topic || "kata-nama-am-khas";
    const practiceList = KB[key]?.practice || [];
    if (!practiceList.length) {
      return {
        session,
        reply: `Maaf, latihan untuk topik ${KB[key]?.label || "ini"} belum tersedia. Sila pilih topik lain.`
      };
    }

    session.state = "practice_active";
    session.practiceTopic = key;
    session.practiceIndex = 0;
    session.lastPrompt = `Latihan ${KB[key].label}: ${practiceList[0]}`;
    return {
      session,
      reply: `${KB[key].label}\n\n${practiceList[0]}\n\nJawab dalam ayat anda sendiri, atau taip "Soalan Seterusnya" untuk teruskan.`
    };
  }

  function nextPractice(session) {
    const key = session.practiceTopic || session.topic || "kata-nama-am-khas";
    const practiceList = KB[key]?.practice || [];

    if (!practiceList.length) {
      return {
        session,
        reply: "Tiada soalan latihan untuk topik ini lagi."
      };
    }

    session.practiceIndex += 1;
    if (session.practiceIndex >= practiceList.length) {
      session.state = "topic_selected";
      session.practiceIndex = 0;
      return {
        session,
        reply: `Tahniah! Anda telah menyiapkan semua latihan ${KB[key].label}.\n\nBoleh pilih topik lain atau minta kuiz.`
      };
    }

    const nextQuestion = practiceList[session.practiceIndex];
    session.lastPrompt = `Latihan ${KB[key].label}: ${nextQuestion}`;
    return {
      session,
      reply: `${nextQuestion}\n\nTaip "Soalan Seterusnya" untuk teruskan atau jawab sekarang.`
    };
  }

  function startQuiz(session, topicKey) {
    const key = topicKey || session.topic || "kata-nama-am-khas";
    const validQuestions = getValidQuizQuestions(key);

    if (!validQuestions.length) {
      return {
        session,
        reply: `Maaf, kuiz untuk ${KB[key]?.label || "topik ini"} belum tersedia.`
      };
    }

    session.state = "quiz_active";
    session.quizTopic = key;
    session.quizQuestions = validQuestions;
    session.quizIndex = 0;
    session.quizScore = 0;
    session.quizAnswered = false;
    session.lastAnswer = "";
    session.lastPrompt = `Kuiz ${KB[key].label}: ${validQuestions[0].question}`;
    return {
      session,
      reply: `${KB[key].label} – Kuiz\n\nSila pilih jawapan yang betul untuk soalan berikut.`
    };
  }

  function extractAnswerChoice(rawText) {
    const clean = normalizeText(rawText);
    if (!clean) return null;
    const match = clean.match(/\b(a|b|c|d)\b|\b(?:jawapan|pilihan)\s*(a|b|c|d)\b/);
    if (!match) return null;
    const letter = (match[1] || match[match.length - 1] || "").toUpperCase();
    if (LETTERS.includes(letter)) return letter;
    return null;
  }

  function answerQuiz(session, rawText) {
    const key = session.quizTopic;
    const list = getValidQuizQuestions(key);
    if (!list.length) {
      return {
        session,
        reply: "Tiada soalan kuiz sedang dijalankan."
      };
    }

    const current = list[session.quizIndex];
    if (!current) {
      session.state = "topic_selected";
      return {
        session,
        reply: "Kuiz sudah tamat. Pilih topik lain atau mulakan kuiz baru."
      };
    }

    if (session.quizAnswered) {
      return {
        session,
        reply: "Anda sudah menjawab soalan ini. Tekan \"Soalan Seterusnya\" untuk teruskan."
      };
    }

    const selected = extractAnswerChoice(rawText);
    if (!selected) {
      return {
        session,
        reply: "Sila pilih jawapan A, B, C atau D."
      };
    }

    const correctText = current.options[current.correctAnswer];
    const isCorrect = selected === current.correctAnswer;
    session.quizAnswered = true;
    session.lastAnswer = selected;
    if (isCorrect) session.quizScore += 1;

    const feedback = isCorrect
      ? "Betul! Tahniah!"
      : `Belum tepat. Jawapan yang betul ialah ${correctText}.`;
    const detail = `${feedback}\n\n${current.explanation}`;

    if (session.quizIndex >= list.length - 1) {
      const total = list.length;
      const finalScore = session.quizScore;
      const percentage = Math.round((finalScore / total) * 100);
      const starText = percentage >= 80 ? "★ ★ ★" : percentage >= 60 ? "★ ★" : "★";
      session.state = "topic_selected";
      session.quizTopic = null;
      session.quizQuestions = [];
      session.quizIndex = 0;
      session.quizScore = 0;
      session.quizAnswered = false;
      session.lastAnswer = "";
      return {
        session,
        reply: `${detail}\n\nSkor akhir: ${finalScore}/${total}\n\nAhli: ${starText}\n\nTahniah! Anda telah menamatkan kuiz.\n\nAnda boleh pilih topik lain atau teruskan dengan latihan.`
      };
    }

    return {
      session,
      reply: `${detail}\n\nTekan "Soalan Seterusnya" untuk meneruskan kuiz.`
    };
  }

  function nextQuizQuestion(session) {
    const list = getValidQuizQuestions(session.quizTopic);
    if (!list.length) {
      return {
        session,
        reply: "Tiada soalan kuiz aktif pada masa ini."
      };
    }

    if (!session.quizAnswered) {
      return {
        session,
        reply: "Sila jawab soalan semasa dahulu sebelum meneruskan ke soalan seterusnya."
      };
    }

    if (session.quizIndex >= list.length - 1) {
      const total = list.length;
      const finalScore = session.quizScore;
      const percentage = Math.round((finalScore / total) * 100);
      const starText = percentage >= 80 ? "★ ★ ★" : percentage >= 60 ? "★ ★" : "★";
      session.state = "topic_selected";
      session.quizTopic = null;
      session.quizQuestions = [];
      session.quizIndex = 0;
      session.quizScore = 0;
      session.quizAnswered = false;
      session.lastAnswer = "";
      return {
        session,
        reply: `Skor akhir: ${finalScore}/${total}\n\nAhli: ${starText}\n\nTahniah! Anda telah menamatkan kuiz.`
      };
    }

    session.quizIndex += 1;
    session.quizAnswered = false;
    session.lastAnswer = "";
    const nextQuestion = list[session.quizIndex];
    return {
      session,
      reply: `Soalan ${session.quizIndex + 1} daripada ${list.length}\n\n${nextQuestion.question}\n\nA. ${nextQuestion.options.A}\nB. ${nextQuestion.options.B}\nC. ${nextQuestion.options.C}\nD. ${nextQuestion.options.D}`
    };
  }

  function fallbackClarify() {
    return "Saya faham anda mahu belajar Bahasa Melayu. Sila pilih topik seperti Kata Nama, Kata Kerja, Kosa Kata, Binaan Ayat, atau ketik 'Menu'.";
  }

  function processMessage(session, rawMessage) {
    const text = String(rawMessage || "").trim();
    if (!text) {
      return { session, reply: "Sila masukkan soalan atau pilih topik." };
    }

    const norm = normalizeText(text);

    if (session.state === "quiz_active") {
      if (/berhenti|stop|henti/.test(norm)) {
        session.state = "idle";
        session.quizTopic = null;
        session.quizQuestions = [];
        session.quizIndex = 0;
        session.quizScore = 0;
        session.quizAnswered = false;
        session.lastAnswer = "";
        return { session, reply: "Kuiz ditamatkan. Anda boleh memilih topik lain atau taip 'menu'." };
      }

      if (/soalan s|seterusnya|next/.test(norm)) {
        return nextQuizQuestion(session);
      }

      return answerQuiz(session, text);
    }

    if (session.state === "practice_active") {
      if (/berhenti|stop|henti/.test(norm)) {
        session.state = "idle";
        session.practiceTopic = null;
        session.practiceIndex = 0;
        return { session, reply: "Latihan ditamatkan. Anda boleh pilih topik lain atau taip 'menu'." };
      }
      if (/soalan s|seterusnya|next/.test(norm)) {
        return nextPractice(session);
      }
      const key = session.practiceTopic || session.topic || "kata-nama-am-khas";
      return {
        session,
        reply: `Bagus! Jawapan anda telah diterima.\n\nUntuk latihan selanjutnya, taip "Soalan Seterusnya".\n\nTip: Fokus pada jawapan yang jelas dan lengkap.\n\nTopik: ${KB[key]?.label || "Bahasa Melayu"}`
      };
    }

    if (/^menu$|senarai topik|topik|pilihan/.test(norm)) {
      const menu = TOPICS.map((topic, index) => `${index + 1}. ${topic.label}`).join("\n");
      return {
        session,
        reply: `Menu topik Bahasa Melayu:\n\n${menu}\n\nPilih topik dengan nama atau nombor 1–8.`
      };
    }

    if (/^(latihan|practice)$/.test(norm) || /latihan/.test(norm) && !/kuiz/.test(norm)) {
      const topicKey = session.topic || getTopicKeyFromText(text) || "kata-nama-am-khas";
      return startPractice(session, topicKey);
    }

    if (/kuiz/.test(norm) || /quiz/.test(norm)) {
      const topicKey = getTopicKeyFromText(text) || session.topic || "kata-nama-am-khas";
      return startQuiz(session, topicKey);
    }

    if (/contoh lain|beri contoh|contoh/.test(norm)) {
      const topicKey = getTopicKeyFromText(text) || session.topic || "kata-nama-am-khas";
      return {
        session,
        reply: getSentenceText(topicKey, "info")
      };
    }

    if (/kenapa|why|terangkan/.test(norm) || /apa itu/.test(norm) || /apakah/.test(norm) || /terangkan/.test(norm)) {
      const topicKey = getTopicKeyFromText(text) || session.topic || "tatabahasa";
      return {
        session,
        reply: getSentenceText(topicKey, "info")
      };
    }

    const topicKey = getTopicKeyFromText(text) || session.topic;
    if (topicKey) {
      return chooseTopic(session, topicKey);
    }

    if (/^1$|^2$|^3$|^4$|^5$|^6$|^7$|^8$/.test(norm)) {
      const index = Number.parseInt(norm, 10) - 1;
      const selected = TOPICS[index];
      if (selected) {
        return chooseTopic(session, selected.key);
      }
    }

    return {
      session,
      reply: fallbackClarify()
    };
  }

  window.StudyBuddyBrain = {
    TOPICS,
    QUIZZES,
    KB,
    processMessage,
    createSession,
    getTopicKeyFromText,
    validateQuizQuestion,
    getValidQuizQuestions,
    getCurrentQuizQuestion,
    normalizeQuizQuestion
  };
})();
