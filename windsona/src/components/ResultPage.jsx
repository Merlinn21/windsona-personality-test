import React, { useEffect } from "react";

const WINDSONA_MAP = {
  INFP: {
    name: "Dreamy Breeze",
    keywords: ["Soft", "Poetic", "Warm", "Dreamy"],
    characteristics: [
      "Empathic",
      "Idealistic",
      "Gentle",
      "Imaginative",
      "Quiet",
      "Hopeful"
    ],
    masukAnginRate: 72,
    stats: {
      Energy: 6,
      Focus: 7,
      Social: 5,
      Stamina: 4
    },
    compatibleWith: ["INFJ", "ENFP", "ISFP"],
    image: "/images/personality/INFP Dreamy Breeze.png"
  },
  INFJ: {
    name: "Whisper Wind",
    keywords: ["Quiet", "Wise", "Steady", "Warm"],
    characteristics: [
      "Insightful",
      "Calm",
      "Deep",
      "Loyal",
      "Intuitive",
      "Protective"
    ],
    masukAnginRate: 69,
    stats: {
      Energy: 6,
      Focus: 9,
      Social: 5,
      Stamina: 5
    },
    compatibleWith: ["INFP", "ENFJ", "INTJ"],
    image: "/images/personality/INFJ Whisper Wind.png"
  },
  ENFP: {
    name: "Spark Gust",
    keywords: ["Bright", "Chaotic", "Fun", "Sparkly"],
    characteristics: [
      "Energetic",
      "Curious",
      "Playful",
      "Passionate",
      "Idealistic",
      "Spontaneous"
    ],
    masukAnginRate: 58,
    stats: {
      Energy: 9,
      Focus: 5,
      Social: 9,
      Stamina: 6
    },
    compatibleWith: ["INFP", "INFJ", "ENTP"],
    image: "/images/personality/ENFP Spark Gust.png"
  },
  ENFJ: {
    name: "Harmony Wind",
    keywords: ["Kind", "Guiding", "Bright", "Balanced"],
    characteristics: [
      "Warm",
      "Encouraging",
      "Organized",
      "Empathic",
      "Visionary",
      "Charismatic"
    ],
    masukAnginRate: 62,
    stats: {
      Energy: 8,
      Focus: 7,
      Social: 9,
      Stamina: 6
    },
    compatibleWith: ["INFP", "INFJ", "ISFJ"],
    image: "/images/personality/ENFJ Harmony Wind.png"
  },
  ISFP: {
    name: "Meadow Breeze",
    keywords: ["Soft", "Aesthetic", "Gentle", "Calm"],
    characteristics: [
      "Artistic",
      "Quiet",
      "Sensitive",
      "Flexible",
      "Warm",
      "Peaceful"
    ],
    masukAnginRate: 76,
    stats: {
      Energy: 6,
      Focus: 6,
      Social: 6,
      Stamina: 5
    },
    compatibleWith: ["INFP", "ESFP", "ENFP"],
    image: "/images/personality/ISFP Meadow Breeze.png"
  },
  ESFP: {
    name: "Carnival Wind",
    keywords: ["Loud", "Sparkly", "Bold", "Joyful"],
    characteristics: [
      "Fun",
      "Expressive",
      "Social",
      "Fearless",
      "Energetic",
      "Spontaneous"
    ],
    masukAnginRate: 41,
    stats: {
      Energy: 10,
      Focus: 4,
      Social: 10,
      Stamina: 7
    },
    compatibleWith: ["ISFP", "ESTP", "ENFP"],
    image: "/images/personality/ESFP Carnival Wind.png"
  },
  ISTP: {
    name: "Chill Draft",
    keywords: ["Calm", "Quiet", "Sharp", "Smooth"],
    characteristics: [
      "Cool",
      "Independent",
      "Tactical",
      "Practical",
      "Stoic",
      "Unbothered"
    ],
    masukAnginRate: 34,
    stats: {
      Energy: 7,
      Focus: 8,
      Social: 4,
      Stamina: 8
    },
    compatibleWith: ["ESTP", "INTP", "ISFP"],
    image: "/images/personality/ISTP Chill Draft.png"
  },
  ESTP: {
    name: "Turbo Wind",
    keywords: ["High-speed", "Daring", "Loud", "Fun"],
    characteristics: [
      "Bold",
      "Fast",
      "Adventurous",
      "Competitive",
      "Charming",
      "Tactical"
    ],
    masukAnginRate: 29,
    stats: {
      Energy: 10,
      Focus: 6,
      Social: 8,
      Stamina: 9
    },
    compatibleWith: ["ESFP", "ISTP", "ENTP"],
    image: "/images/personality/ESTP Turbo Wind.png"
  },
  ISFJ: {
    name: "Hearth Breeze",
    keywords: ["Warm", "Safe", "Soft", "Steady"],
    characteristics: [
      "Caring",
      "Gentle",
      "Loyal",
      "Responsible",
      "Observant",
      "Supportive"
    ],
    masukAnginRate: 81,
    stats: {
      Energy: 5,
      Focus: 8,
      Social: 6,
      Stamina: 5
    },
    compatibleWith: ["ESFJ", "ENFJ", "ISTJ"],
    image: "/images/personality/ISFJ Hearth Breeze.png"
  },
  ESFJ: {
    name: "Blossom Wind",
    keywords: ["Bright", "Kind", "Tidy", "Soft"],
    characteristics: [
      "Cheerful",
      "Helpful",
      "Organized",
      "Warm",
      "Sociable",
      "Nurturing"
    ],
    masukAnginRate: 67,
    stats: {
      Energy: 8,
      Focus: 7,
      Social: 10,
      Stamina: 6
    },
    compatibleWith: ["ISFJ", "ESTJ", "ENFJ"],
    image: "/images/personality/ESFJ Blossom Wind.png"
  },
  INTP: {
    name: "Spiral Wind",
    keywords: ["Weird", "Brilliant", "Floaty", "Quiet"],
    characteristics: [
      "Analytical",
      "Curious",
      "Detached",
      "Inventive",
      "Quirky",
      "Independent"
    ],
    masukAnginRate: 54,
    stats: {
      Energy: 5,
      Focus: 9,
      Social: 3,
      Stamina: 6
    },
    compatibleWith: ["ENTP", "INTJ", "INFP"],
    image: "/images/personality/INTP Spiral Wind.png"
  },
  ENTP: {
      name: "Whirlwind",
      keywords: ["Chaotic", "Smart", "Funny", "Restless"],
      characteristics: [
        "Witty",
        "Experimental",
        "Bold",
        "Playful",
        "Unpredictable",
        "Clever"
      ],
      masukAnginRate: 43,
      stats: {
        Energy: 9,
        Focus: 7,
        Social: 8,
        Stamina: 7
      },
      compatibleWith: ["ENFP", "INTP", "ESTP"],
      image: "/images/personality/ENTP Whirlwind.png"
  },
  INTJ: {
      name: "North Wind",
      keywords: ["Sharp", "Cold", "Precise", "Driven"],
      characteristics: [
        "Strategic",
        "Focused",
        "Private",
        "Ambitious",
        "Logical",
        "Determined"
      ],
      masukAnginRate: 48,
      stats: {
        Energy: 6,
        Focus: 10,
        Social: 3,
        Stamina: 8
      },
      compatibleWith: ["INFJ", "INTP", "ENTJ"],
      image: "/images/personality/INTJ North Wind.png"
  },
  ENTJ: {
      name: "Command Wind",
      keywords: ["Powerful", "Loud", "Sharp", "Leader"],
      characteristics: [
        "Confident",
        "Driven",
        "Assertive",
        "Decisive",
        "Visionary",
        "Bold"
      ],
      masukAnginRate: 36,
      stats: {
        Energy: 9,
        Focus: 9,
        Social: 7,
        Stamina: 9
      },
      compatibleWith: ["INTJ", "ENTP", "ESTJ"],
      image: "/images/personality/ENTJ Command Wind.png"
  },
  ISTJ: {
        name: "Steady Wind",
        keywords: ["Stable", "Grounded", "Quiet", "Neat"],
        characteristics: [
          "Reliable",
          "Disciplined",
          "Practical",
          "Honest",
          "Structured",
          "Calm"
        ],
        masukAnginRate: 74,
        stats: {
          Energy: 6,
          Focus: 9,
          Social: 4,
          Stamina: 7
        },
        compatibleWith: ["ISFJ", "ESTJ", "ESFJ"],
        image: "/images/personality/ISTJ Steady Wind.png"
  },
  ESTJ: {
        name: "Cyclone Wind",
        keywords: ["Firm", "Structured", "Loud", "Stable"],
        characteristics: [
          "Organized",
          "Strong",
          "Direct",
          "Efficient",
          "Grounded",
          "Responsible"
        ],
        masukAnginRate: 52,
        stats: {
          Energy: 9,
          Focus: 8,
          Social: 7,
          Stamina: 8
        },
        compatibleWith: ["ISTJ", "ESFJ", "ENTJ"],
        image: "/images/personality/ESTJ Cyclone Wind.png"
  }
};

export default function ResultPage({ result }) {
  useEffect(() => {
    console.log("ResultPage received result:", result);
    
  }, [result]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh', padding: '0 2rem', boxSizing: 'border-box', width: '100vw', overflowY: 'auto', overflowX: 'hidden' }}>
      <div style={{
          backgroundColor: "#ffffffff",
          margin: "2rem 0",
          width: "100%",
          padding: "2rem 1rem",
          boxSizing: "border-box",
          borderWidth: "3px",
          borderColor: "#331D0E",
          borderStyle: "solid",
          borderRadius: "8px",
          display: 'flex',
          flexDirection: 'column',
          alignContent:'flex-start'
        }}>
          <div className="flex-row" style={{ width: '100%', alignItems: 'flex-start'}}>
            <div className="flex-column flex-fill">
              <p className="font-courier-prime">
                Your windsona is...
              </p>

              <p className="font-pixelify" style={{ lineHeight:0.8 ,fontSize:  'clamp(24px, 3vw, 16px)', marginTop: '0.5rem', color: "#FFD200", textAlign: 'start' }}>
                {WINDSONA_MAP[result].name.toUpperCase()}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.15rem, 2vw, 0.3rem)', marginTop: '0.5rem', width: '100%' }}>
                {WINDSONA_MAP[result].keywords.map((keyword, index) => (
                  <div key={index} style={{
                    backgroundColor: "#FFD200",
                    borderWidth: "2px",
                    borderColor: "#331D0E",
                    borderStyle: "solid",
                    borderRadius: "16px",
                    padding: 'clamp(0.3rem, 2vw, 0.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'clamp(35px, 8vw, 50px)',
                    minWidth: 'clamp(55px, 8vw, 80px)'
                  }}>
                    <p className={"font-courier-prime"} style={{ margin: 0, fontSize: 'clamp(12px, 3vw, 16px)', textAlign: 'center' }}>{keyword}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-fill"   style={{
                backgroundColor: "#FFD200",
                borderWidth: "2px",
                borderColor: "#331D0E",
                borderStyle: "solid",
                borderRadius: "8px",
                flex: "0 0 clamp(90px, 20vw, 120px)", // FIX HERE
                aspectRatio: "7/8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              <img
                src={WINDSONA_MAP[result].image}
                style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                alt=""
              />
            </div>
          </div>

          <div className="flex-column" style={{ 
            marginTop: '1.5rem',
            borderWidth: "2px",
            borderColor: "#331D0E",
            borderStyle: "solid",
            borderRadius: "8px",
            backgroundColor: "#FFD200",
            padding: '0.5rem 1rem',
            }}>
              <p className="font-pixelify" style={{ fontSize: '24px', marginTop: '0.5rem', marginBottom: '0.5rem', color: "#ffffffff", textAlign: 'center' }}>
                CHARACTERISTIC
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.15rem, 2vw, 0.3rem)', margin: '0.5rem 0.5rem', width: '100%' }}>
                {WINDSONA_MAP[result].characteristics.map((characteristic, index) => (
                  <div key={index} style={{
                    backgroundColor: "#ffffffff",
                    borderWidth: "2px",
                    borderColor: "#331D0E",
                    borderStyle: "solid",
                    borderRadius: "16px",
                    padding: 'clamp(0.3rem, 2vw, 0.5rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'clamp(35px, 8vw, 50px)',
                    width: '100%'
                  }}>
                    <p className={"font-courier-prime"} style={{ margin: 0, fontSize: 'clamp(12px, 3vw, 16px)' }}>{characteristic}</p>
                  </div>
                ))}
              </div>
          </div>

          <div className="flex-row" style={{ marginTop: '1.5rem', gap: 'clamp(0.5rem, 2vw, 2rem)', width: '100%' }}>
            {/* Stats Box */}
            <div className="flex-column" style={{
              flex: 1,
              minWidth: '120px',
              borderWidth: "2px",
              borderColor: "#331D0E",
              borderStyle: "solid",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              padding: 'clamp(0.5rem, 2vw, 1rem)',
              alignItems: 'flex-start',
            }}>
              <p className="font-pixelify" style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginTop: '0', marginBottom: '0.5rem', color: "#FFD200", textAlign: 'left' }}>
                STAT:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                {Object.entries(WINDSONA_MAP[result].stats).map(([statName, statValue]) => (
                  <div key={statName} style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}>
                    <p className="font-courier-prime" style={{ margin: 0, fontSize: 'clamp(12px, 2.5vw, 14px)', minWidth: 'clamp(60px, 15vw, 80px)' }}>
                      {statName}
                    </p>
                    <div style={{
                      flex: 1,
                      height: '5px',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: '1px solid #331D0E'
                    }}>
                      <div style={{
                        width: `${statValue * 10}%`,
                        height: '100%',
                        backgroundColor: '#FFD200',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Masuk Angin Rate Box */}
            <div className="flex-column" style={{
              backgroundColor: "#FFFFFF",
              padding: 'clamp(0.3rem, 2vw, 1rem)',
              minWidth: 'clamp(70px, 20vw, 150px)',
              alignItems: 'center',
            }}>
              <p className="font-pixelify" style={{ fontSize: 'clamp(14px, 3vw, 20px)', margin: '0 0 0.3rem 0', textAlign: 'center', lineHeight: 1.1 }}>
                MASUK ANGIN RATE
              </p>
              <p className="font-pixelify" style={{ fontSize: 'clamp(24px, 8vw, 72px)', margin: '0', color: "#FFD200", lineHeight: 1 }}>
                {WINDSONA_MAP[result].masukAnginRate}%
              </p>
            </div>
          </div>

          <div className="flex-column" style={{marginTop: '1.0rem', alignItems: 'flex-start'}}>
              <p className="font-pixelify" style={{ fontSize: 'clamp(24px, 4vw, 20px)', marginTop: '0', marginBottom: '0.5rem', color: "#FFD200", textAlign: 'left' }}>
                BEST TEAMATES:
              </p>

              <div className="flex-row" style={{ gap: 'clamp(0.5rem, 2vw, 1rem)', width: '100%', justifyContent: 'center' }}>
                {WINDSONA_MAP[result].compatibleWith.map((compatibleType, index) => (
                  <div key={index} style={{
                    flex: "0 0 clamp(50px, 20vw, 120px)", // FIX HERE
                    aspectRatio: '7/8',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                    <img
                      src={WINDSONA_MAP[compatibleType].image}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                      alt={WINDSONA_MAP[compatibleType].name}
                    />

                    <p className="font-courier-prime" style={{color:"#331D0E", fontWeight: "bold", fontSize: 'clamp(12px, 3vw, 16px)', marginTop: '0.5rem', textAlign: 'center' }}>
                      {WINDSONA_MAP[compatibleType].name}
                    </p>
                  </div>
                ))}
              </div>
          </div>
          
      </div>

      <div style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/ic_tolak_angin.png"
          style={{ height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          alt=""
        />
      </div>
    </div>
  );
}
