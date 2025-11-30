import React, { useEffect, useState } from "react";
import OptionBox from "./component/OptionBox.jsx";
import BackgroundContainer from "./component/BackgroundContainer.jsx";
const QUESTIONS = [
  {
    id: 1,
    text: "TIM KAMU TERJEBAK DI DALAM MAZE!! INSTING PERTAMAMU APA?",
    options: [
      "Cari petunjuk pelan-pelan sambil nginget jalurnya.", 
      "Lontarin ide secepet kilat — yang penting tim gerak dulu.", 
      "Naikin mood tim dulu, “Santai guys, kita pasti bisa!”", 
      "Langsung ambil alih, bagi peran biar maze nggak makan waktu."
    ],
    images: "/ic_question_1.png",
  },
  {
    id: 2,
    text: "TIBA-TIBA KAMU DAPET BANYAK MISI, TAPI ENERGY KAMU MENURUN TERUS...",
    options: [
      "Pecah semuanya jadi mini-mission. Kerjain satu per satu.",
      "Multitasking mode chaos — anehnya selalu berhasil.",
      "Ajak temen buat brainstorming bareng.",
      "Tentuin prioritas, fokus total, dunia disilent dulu."
    ],
    images: "/ic_question_2.png",
  },
  {
    id: 3,
    text: "KAMU LAGI MILIH TIM BUAT MISI BESAR, KAMU PILIH YANG...",
    options: [
      "Pikirannya dalem dan suka notice detail kecil.", 
      "Bawa hype + kreativitas di tiap misi.", 
      "Jaga mood tim tetap adem dan kompak.", 
      "Efisien, bisa diandelin, dan fokus ke hasil."
    ],
    images: "/ic_question_3.png",
  },
  {
    id: 4,
    text: "KAMU KETEMU NPC BARU YANG CEREWET BANGET. REAKSI KAMU?",
    options: [
      "Dengerin sambil observasi, ngomong seperlunya aja.", 
      "Nyamain energi mereka—langsung cocok banget.", 
      "Dengerin dengan hangat, pengen ngerti ceritanya.", 
      "Singkat aja; kamu lagi fokus ke quest."
    ],
    images: "/ic_question_4.png",
  },
  {
    id: 5,
    text: "BOSS FIGHT DI DEPAN MATA!! PERAN KAMU DALAM TIM APA?",
    options: [
      "Strategist — analisis pola, cari jalan aman buat menang.", 
      "Damage Dealer — all out, percaya insting sendiri.", 
      "Support/Healer — pastiin semua tetap tenang & stabil.", 
      "Leader/Tank — maju duluan, atur formasi, lindungi tim."
    ],
    images: "/ic_question_5.png",
  },
  {
    id: 6,
    text: "ADA MINI-MISSION BARU WAKTU KAMU LAGI NGERJAIN MISI UTAMA...",
    options: [
      "Skip dulu. Selesaikan main mission.", 
      "Ambil langsung—kayanya seru.", 
      "Tanya siapa yang mau join dulu.", 
      "Lihat worth it atau enggaknya, baru decide."
    ],
    images: "/ic_question_6.png",
  },
  {
    id: 7,
    text: "INVENTORY FULL!! TAS KAMU ISINYA APA AJA?",
    options: [
      "Tools, notebook, item puzzle.", 
      "Barang random yang kamu ambil “siapa tau kepake”.", 
      "Hadiah / barang dari temen.", 
      "Barang penting doang—rapi, efisien, terurut."
    ],
    images: "/ic_question_7.png",
  },
  {
    id: 8,
    text: "KAMU MASUK AREA BARU, HAL PERTAMA YANG KAMU LAKUIN?",
    options: [
      "Jalan pelan, observasi sekitar dulu.", 
      "Lari ke mana-mana biar lihat semuanya.", 
      "Cari orang buat diajak ngobrol.", 
      "Tandain area penting dan bikin rute."
    ],
    images: "/ic_question_8.png",
  },
  {
    id: 9,
    text: "TEMEN PARTY KAMU TIBA-TIBA CURHAT TENTANG STRUGGLE MEREKA...",
    options: [
      "Dengerin dalam-dalam dan kasih insight yang mikir banget.", 
      "Bercanda atau nge-hype mereka biar mood naik lagi.", 
      "Kasih kenyamanan dan nemenin sampai mereka better.", 
      "Langsung bantu cari solusi yang praktis."
    ],
    images: "/ic_question_9.png",
  },
  {
    id: 10,
    text: "LEVEL UP!! KAMU DAPET +1 SKILL POINT, MAU UPGRADE APA?",
    options: [
      "Insight & analisis", 
      "Kreativitas & spontanitas", 
      "Empati & harmoni", 
      "Disiplin & pengambilan keputusan"
    ],
    images: "/ic_question_10.png",
  },
];

export default function QuestionPage({ questionIndex, answers, setAnswers, onNext }) {
  const question = QUESTIONS[questionIndex];
  const [selected, setSelected] = useState(answers[questionIndex] || "");

  function handleSelect(option) {
    setSelected(option);
    handleNext(option);
  }

  function handleNext(selected) {
    if (selected === undefined || selected === null) return;
    console.log("Handling next for question index:", questionIndex, "with selected:", selected);
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selected;
    console.log("New answers array:", newAnswers);
    setAnswers(newAnswers);
    onNext(newAnswers);
  }

  return (
    <BackgroundContainer
      background="/images/ic_background_ground.png"
    >

      <div style={{ marginTop: '-2rem', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/ic_windsona_logo.png"
          style={{ height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          alt=""
        />
      </div>

      <p 
        className="font-pixelify"
        style={{
          zIndex: 10,
          marginTop: '-3rem'
      }}>
        {questionIndex + 1 < 10 ? `0${questionIndex + 1}` : questionIndex + 1}/10
      </p>


      <div style={{ position: 'relative', width: '65%', margin: '0 auto', zIndex: 2  }}>
        <img
          src="/images/ic_question_box.png"
          style={{ width: '100%', display: 'block' }}
        />
        {question.images && (
          <img
            src={`/images${question.images}`}
            alt="Question Visual"
            style={{
              position: 'absolute',
              top: '44%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              zIndex: 3
            }}
          />
        )}
      </div>

      <p 
        className="font-pixelify"
        style={{fontSize: "16px", paddingLeft: "16px", paddingRight:  "16px"}}
      >
        {question.text}
      </p>

      <div style={{ width: '80%', zIndex: 5, margin: '0 auto' }}>
        <OptionBox optionText={`A. ${question.options[0]}`} onClick={() => handleSelect(0)} />
        <OptionBox optionText={`B. ${question.options[1]}`} onClick={() => handleSelect(1)} />
        <OptionBox optionText={`C. ${question.options[2]}`} onClick={() => handleSelect(2)} />
        <OptionBox optionText={`D. ${question.options[3]}`} onClick={() => handleSelect(3)} />
      </div>


    </BackgroundContainer>
  );
}

export { QUESTIONS };
