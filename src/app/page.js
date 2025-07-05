"use client";
import { useRef, useState } from "react";
import ClientOnly from "./ClientOnly";

export default function Home() {
  const audioRef = useRef(null);
  const [showLetter, setShowLetter] = useState(false);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.error("Play failed:", err));
    }
    setShowLetter((prev) => !prev);
  };

  return (
    <ClientOnly>
      <main className="relative w-full min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden px-2 sm:px-4 flex flex-col items-center justify-center">
        {/* Floating Hearts */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="heart absolute text-red-400 animate-float"
            style={{
              left: `${Math.random() * 90 + 5}%`, // Keep hearts within 5%-95% to avoid edge clipping
              top: `${Math.random() * 80 + 10}%`, // Ensure hearts stay within viewport
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 4}s`, // Randomize duration (4-8s)
              fontSize: `clamp(16px, 5vw, 28px)`, // Slightly larger range for visual appeal
            }}
          >
            ❤️
          </div>
        ))}

        {/* Typing Message */}
        <h1 className="text-red-300 font-['Dancing_Script'] font-bold text-center text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-normal typing-text z-10 max-w-[90vw] sm:max-w-3xl mx-auto whitespace-normal break-words">
          ❤️ Happy Birthday Tanya ❤️
        </h1>

        {/* Button */}
        <div className="mt-6 sm:mt-8 flex justify-center z-10 w-full max-w-md">
          <button
            onClick={handleButtonClick}
            className="glow-button bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg transition-all text-base sm:text-lg w-full sm:w-auto"
          >
            Read My Letter 💌
          </button>
        </div>

        {/* Dropdown Love Letter */}
        {showLetter && (
          <div className="mt-4 glass font-['Dancing_Script'] italic p-4 sm:p-6 rounded-lg w-full max-w-lg sm:max-w-xl z-10 fade-in mx-2 bg-pink-300 relative">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-lg"></div>
            <p className="relative text-gray-800 text-sm sm:text-base leading-relaxed ">
              <b>Wish you very very Happy Birthday my Love, my Life, my Wife 💖💖😘😘 </b>
              Bas 5 month ka time or baki hai fir sari birthday hum mil kar pyar se 
              celebrate karenge <br/>
              Tumhara meri life me co-incidence jaisa raha hai. chalo btata hu sab.
              me bas aise hi jeevansathi
              par uss din request check kar rha tha tab arjun bhaiya ki request aayi thi,
              tumhari id pe na dp thi na koi pics na kuch details, me aise kisi ki request 
              accept nhi karta tha jiski dp wagera na ho lekin us din aise hi kar li, pata 
              nai kya mann chala. fir thodi baat k baat unhone tumhri pics dikhyi to tum
              mujhe pasand aayi. fir aage baat chali. Tum yaha gwalior aayi thi tab itna kuch
              samjh nahi aaya tha mujhe tumhre nature or behavior k vare me. fir ek dum se sab
              hota gya bhagwan ki marzi se, bhot musibat pareshani bhi aayi humara rishta hone me,
              jaise vo tumhari baat pata chali gawn se, or mera dusra ek rishte k piche pade rhe 
              mama, lekin jinka milna likh diya hai bhagwan ne usko koi nai rok sakta. <br/>
              fir humari engagement ka time aa gya, uss time me bilkul sunn sa tha andar se ki
              aisa rishta ho rha tha humara jaha ek dusre ko pehle se na jante h na samjhte hai,
              fir jaise hi tum aayi engagement me to tumko dekh k thoda acha laga mujhe, fir ring ceremony 
              me or photoshoot me jab first time tumko chooa tab thodi si vibe aayi. ki haan ab sach me 
              aa gayi h koi ladki meri life partner bann kar. <br />fir starting me jab humne baat karna start
              ki tab koi feelings or pyar nhi tha. Fir achanak se me bhi busy ho gya vo project
              chalu hop gya to or mind divert ho gya, raat me baat karte the to itni mann se baat nhi
              karte the, fir dhire dhire mere mind or dil ne tumko janna or samjhna start kia,
              kyuki jaisi ladki me chahta tha tum vaisi hi nikli.
               tum pasand aane lagi, feelings bhi banne lagi, tab se khud se bhi baat karne ka mann karne laga.
               bas aise hi strong feelings or pyar ho gaya tumse. or jab se humne vo wali batein start ki tab se 
               or close ho gye. <br /> 
               <br/>
               tumhare me sach me vo sari qualities hai jo ek ladki me hona chahiye, yaha tak ki jo mene socha 
               nahi tha vo bhi hai. sabse achi baat mujhe tumhri ye lagi ki me gussa karta hu to chup chap
               sunn leti ho, samjhti bhi ho, mere liye apni neend kharab karke jagti ho, adhi raat ko call
               tak laga lu to neend bhaga kar baat karne lagti ho, itna wait karti ho mera, jaisa me chahta tha
               ki mere se chipki raho, hug,kiss karo, masti bhi karo. ye sab unexpected tha mere liye, ye sab dekh
               kar mera pyar or bhad gya tumhre liye ki chalo itna interest h mere me.
               <br/>
                bas humesha aise hi rehna or mere se aise hi pyar krna or samjhna, me pyar,
               feeling or respect humesha bani rahengi tumhre liye. sab kuch karuga tumhre liye, duniya ki sari
               khushi dunga, kabhi kisi or ladki or ankh utha k nahi dekhuga, itni si anch bhi nahi aane dunga
               tumpar. apne bacche jaise rakhuga meri bacchi ko.
               bas vo din jaldi aaye jis din hum ek ho jaye or shadi k bandhan me band jaye. bhot haseen
               life hogi humari. love, romance, care, masti se bhari. bas jaldi aa jao.
               <br/>
              <b>i love you my princess chotu 😘</b> 
            </p>
          </div>
        )}

        {/* Audio Player (hidden) */}
        <audio
          ref={audioRef}
          src="/mere-bina.mp3"
          preload="auto"
          className="hidden"
        />
      </main>
    </ClientOnly>
  );
}
