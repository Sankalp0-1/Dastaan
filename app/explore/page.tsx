// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const CULTURES = [
//   { name: "India", emoji: "🇮🇳", x: 68, y: 42, prompt: "Tell me about festivals and food culture in India", fact: "Home to 22 official languages" },
//   { name: "Japan", emoji: "🇯🇵", x: 82, y: 35, prompt: "Describe daily life and traditions in Japan", fact: "Land of the rising sun" },
//   { name: "Morocco", emoji: "🇲🇦", x: 45, y: 38, prompt: "What is culture and food like in Morocco?", fact: "Where Sahara meets the Atlantic" },
//   { name: "Mexico", emoji: "🇲🇽", x: 20, y: 45, prompt: "Tell me about Day of the Dead and Mexican culture", fact: "Birthplace of chocolate" },
//   { name: "Egypt", emoji: "🇪🇬", x: 53, y: 40, prompt: "What is life like in Egypt during Ramadan?", fact: "Civilization over 5000 years old" },
//   { name: "Brazil", emoji: "🇧🇷", x: 28, y: 62, prompt: "Tell me about Carnival and Brazilian culture", fact: "Largest country in South America" },
//   { name: "Italy", emoji: "🇮🇹", x: 49, y: 33, prompt: "Describe food traditions and culture in Italy", fact: "Home to 50+ UNESCO sites" },
//   { name: "China", emoji: "🇨🇳", x: 76, y: 37, prompt: "Tell me about Chinese New Year and traditions", fact: "Oldest continuous civilization" },
//   { name: "Nigeria", emoji: "🇳🇬", x: 47, y: 50, prompt: "What are the cultural traditions of Nigeria?", fact: "250+ ethnic groups" },
//   { name: "Peru", emoji: "🇵🇪", x: 23, y: 58, prompt: "Tell me about Inca heritage and Peruvian culture", fact: "Home of Machu Picchu" },
//   { name: "Turkey", emoji: "🇹🇷", x: 55, y: 34, prompt: "What is culture and food like in Turkey?", fact: "Bridge between East and West" },
//   { name: "Thailand", emoji: "🇹🇭", x: 75, y: 46, prompt: "Tell me about Songkran and Thai culture", fact: "Land of 40,000 temples" },
//   { name: "France", emoji: "🇫🇷", x: 47, y: 30, prompt: "Describe café culture and traditions in France", fact: "Most visited country on Earth" },
//   { name: "Spain", emoji: "🇪🇸", x: 44, y: 32, prompt: "Tell me about flamenco and Spanish culture", fact: "Birthplace of flamenco" },
//   { name: "Greece", emoji: "🇬🇷", x: 52, y: 33, prompt: "What are the ancient traditions of Greece?", fact: "Birthplace of democracy" },
//   { name: "Iran", emoji: "🇮🇷", x: 60, y: 37, prompt: "Tell me about Nowruz and Persian culture", fact: "Nowruz celebrated for 3000 years" },
//   { name: "Ethiopia", emoji: "🇪🇹", x: 55, y: 48, prompt: "What are the cultural traditions of Ethiopia?", fact: "Birthplace of coffee" },
//   { name: "Kenya", emoji: "🇰🇪", x: 55, y: 52, prompt: "Tell me about Maasai culture and traditions in Kenya", fact: "Home of the Great Migration" },
//   { name: "South Africa", emoji: "🇿🇦", x: 51, y: 65, prompt: "What is culture like in South Africa?", fact: "11 official languages" },
//   { name: "Argentina", emoji: "🇦🇷", x: 26, y: 70, prompt: "Tell me about tango and Argentine culture", fact: "Birthplace of tango" },
//   { name: "Colombia", emoji: "🇨🇴", x: 23, y: 53, prompt: "What is the culture and food like in Colombia?", fact: "Second most biodiverse country" },
//   { name: "Russia", emoji: "🇷🇺", x: 65, y: 22, prompt: "Tell me about traditions and culture in Russia", fact: "Largest country in the world" },
//   { name: "Germany", emoji: "🇩🇪", x: 49, y: 27, prompt: "Describe Oktoberfest and German culture", fact: "1500 types of beer brewed here" },
//   { name: "UK", emoji: "🇬🇧", x: 44, y: 26, prompt: "What are the traditions and culture of Britain?", fact: "Home of afternoon tea" },
//   { name: "USA", emoji: "🇺🇸", x: 16, y: 35, prompt: "Tell me about diverse cultural traditions in America", fact: "300+ languages spoken" },
//   { name: "Canada", emoji: "🇨🇦", x: 15, y: 25, prompt: "What are the cultural traditions of Canada?", fact: "World's longest coastline" },
//   { name: "Australia", emoji: "🇦🇺", x: 82, y: 65, prompt: "Tell me about Aboriginal culture and traditions in Australia", fact: "60,000 years of Aboriginal history" },
//   { name: "New Zealand", emoji: "🇳🇿", x: 88, y: 70, prompt: "What is Maori culture like in New Zealand?", fact: "First country to give women the vote" },
//   { name: "Indonesia", emoji: "🇮🇩", x: 78, y: 53, prompt: "Tell me about Bali and Indonesian culture", fact: "17,000+ islands" },
//   { name: "Vietnam", emoji: "🇻🇳", x: 76, y: 45, prompt: "What is street food culture like in Vietnam?", fact: "Home of Pho and Banh Mi" },
//   { name: "South Korea", emoji: "🇰🇷", x: 81, y: 33, prompt: "Tell me about K-culture and traditions in South Korea", fact: "Birthplace of K-pop" },
//   { name: "Pakistan", emoji: "🇵🇰", x: 65, y: 38, prompt: "What are the cultural traditions of Pakistan?", fact: "Ancient Indus Valley civilization" },
//   { name: "Bangladesh", emoji: "🇧🇩", x: 70, y: 41, prompt: "Tell me about culture and festivals in Bangladesh", fact: "World's largest river delta" },
//   { name: "Nepal", emoji: "🇳🇵", x: 69, y: 39, prompt: "What is culture like in Nepal?", fact: "Home of Mount Everest" },
//   { name: "Sri Lanka", emoji: "🇱🇰", x: 69, y: 48, prompt: "Tell me about culture and traditions in Sri Lanka", fact: "Pearl of the Indian Ocean" },
//   { name: "Saudi Arabia", emoji: "🇸🇦", x: 58, y: 40, prompt: "What is culture like in Saudi Arabia?", fact: "Birthplace of Islam" },
//   { name: "UAE", emoji: "🇦🇪", x: 61, y: 41, prompt: "Tell me about culture and traditions in the UAE", fact: "From desert to skyscrapers in 50 years" },
//   { name: "Ghana", emoji: "🇬🇭", x: 45, y: 50, prompt: "What are the cultural traditions of Ghana?", fact: "First African country to gain independence" },
//   { name: "Tanzania", emoji: "🇹🇿", x: 55, y: 55, prompt: "Tell me about Zanzibar and Tanzanian culture", fact: "Home of Mount Kilimanjaro" },
//   { name: "Philippines", emoji: "🇵🇭", x: 80, y: 46, prompt: "What are the cultural traditions of the Philippines?", fact: "7,641 islands" },
// ];

// type Culture = typeof CULTURES[0];

// export default function Explore() {
//   const [hovered, setHovered] = useState<string | null>(null);
//   const [search, setSearch] = useState("");
//   const [visited, setVisited] = useState<Set<string>>(new Set());
//   const [darkMode, setDarkMode] = useState(false);

//   const filtered = CULTURES.filter(c =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const toggleVisited = (name: string, e: React.MouseEvent) => {
//     e.preventDefault();
//     setVisited(prev => {
//       const next = new Set(prev);
//       next.has(name) ? next.delete(name) : next.add(name);
//       return next;
//     });
//   };

//   const bg = darkMode ? "#1a1208" : "#f5f0e8";
//   const cardBg = darkMode ? "#2c1a0e" : "white";
//   const textPrimary = darkMode ? "#fdf6e3" : "#2c1a0e";
//   const textSecondary = darkMode ? "#c9a97a" : "#7a5c3a";
//   const border = darkMode ? "#5a3e28" : "#d4b483";

//   return (
//     <main className="min-h-screen flex flex-col items-center transition-colors duration-300"
//       style={{ background: bg, fontFamily: "Georgia, 'Times New Roman', serif", color: textPrimary }}>

//       {/* Header */}
//       <header className="w-full max-w-5xl pt-10 pb-4 px-4 text-center">
//         <div className="flex justify-between items-center mb-4">
//           <Link href="/" style={{ color: "#8b5e3c" }} className="text-sm hover:underline">
//             ← Back to Dastaan
//           </Link>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="px-3 py-1 rounded-full text-xs border transition-all"
//             style={{ borderColor: border, color: textSecondary, background: cardBg }}
//           >
//             {darkMode ? "☀️ Light" : "🌙 Dark"}
//           </button>
//         </div>

//         <h1 className="text-5xl font-bold">Explore the World</h1>
//         <p className="mt-2 italic" style={{ color: textSecondary }}>Click any country to hear its story</p>

//         <div className="flex items-center gap-3 mt-2 justify-center flex-wrap">
//           <p className="text-xs" style={{ color: textSecondary }}>
//             {CULTURES.length} cultures · {visited.size} visited
//           </p>
//           {visited.size > 0 && (
//             <div className="flex gap-1 flex-wrap justify-center">
//               {Array.from(visited).slice(0, 5).map(name => {
//                 const c = CULTURES.find(x => x.name === name);
//                 return <span key={name} className="text-sm">{c?.emoji}</span>;
//               })}
//               {visited.size > 5 && <span className="text-xs" style={{ color: textSecondary }}>+{visited.size - 5} more</span>}
//             </div>
//           )}
//         </div>

//         {/* Search bar */}
//         <div className="mt-4 max-w-sm mx-auto">
//           <input
//             type="text"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             placeholder="🔍 Search a country..."
//             className="w-full px-4 py-2 rounded-xl border text-sm outline-none transition-all"
//             style={{
//               background: cardBg,
//               borderColor: border,
//               color: textPrimary,
//               fontFamily: "Georgia, serif"
//             }}
//           />
//         </div>
//       </header>

//       {/* Map */}
//       <div className="w-full max-w-5xl px-4 mt-4">
//         <div className="relative rounded-2xl overflow-hidden border shadow-lg"
//           style={{ height: "420px", borderColor: border, background: darkMode ? "#1a3a5c" : "#7bb8e8" }}>

//           <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
//             <rect width="1000" height="500" fill={darkMode ? "#1a3a5c" : "#7bb8e8"} />
//             <path d="M80,80 L200,60 L240,120 L220,200 L180,240 L140,220 L100,180 L60,140 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//             <path d="M200,260 L260,240 L280,300 L270,380 L240,420 L200,400 L180,340 L190,280 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//             <path d="M420,60 L500,50 L520,100 L500,140 L450,150 L420,120 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//             <path d="M440,160 L520,150 L540,220 L530,320 L490,380 L450,360 L430,280 L420,200 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//             <path d="M520,40 L820,30 L850,120 L820,200 L750,220 L650,200 L580,180 L530,140 L510,80 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//             <path d="M760,320 L840,310 L860,370 L830,410 L780,400 L750,360 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
//           </svg>

//           {CULTURES.map((culture) => (
//             <Link
//               key={culture.name}
//               href={`/?prompt=${encodeURIComponent(culture.prompt)}`}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
//               style={{ left: `${culture.x}%`, top: `${culture.y}%` }}
//               onMouseEnter={() => setHovered(culture.name)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <div className="relative flex flex-col items-center">
//                 <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-200 ${hovered === culture.name ? "scale-150" : "scale-100"}`}
//                   style={{ background: visited.has(culture.name) ? "#c9a97a" : "#8b5e3c" }} />
//                 {hovered === culture.name && (
//                   <div className="absolute bottom-full mb-2 bg-[#2c1a0e] text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-10 text-center">
//                     <div>{culture.emoji} {culture.name}</div>
//                     <div className="text-[#c9a97a] text-xs">{culture.fact}</div>
//                   </div>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//         <p className="text-xs text-center mt-2" style={{ color: textSecondary }}>
//           🟤 Unvisited · 🟡 Visited (right-click a pin to mark visited)
//         </p>
//       </div>

//       {/* Country grid */}
//       <div className="w-full max-w-5xl px-4 mt-6 pb-12">
//         <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: textSecondary }}>
//           {search ? `${filtered.length} results for "${search}"` : "All Cultures"}
//         </p>
//         <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
//           {filtered.map((culture: Culture) => (
//             <div key={culture.name} className="relative group">
//               <Link
//                 href={`/?prompt=${encodeURIComponent(culture.prompt)}`}
//                 className="flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-200 shadow-sm block"
//                 style={{
//                   background: visited.has(culture.name) ? (darkMode ? "#3a2a10" : "#fdf6e3") : cardBg,
//                   borderColor: visited.has(culture.name) ? "#8b5e3c" : border,
//                   color: textPrimary
//                 }}
//               >
//                 <span className="text-2xl">{culture.emoji}</span>
//                 <span className="text-xs font-semibold text-center">{culture.name}</span>
//                 {visited.has(culture.name) && (
//                   <span className="text-xs">✓</span>
//                 )}
//               </Link>
//               <button
//                 onClick={(e) => toggleVisited(culture.name, e)}
//                 className="absolute top-1 right-1 w-4 h-4 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
//                 style={{ background: "#8b5e3c", color: "white" }}
//                 title="Mark as visited"
//               >
//                 {visited.has(culture.name) ? "−" : "+"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CULTURES = [
  { name: "India", emoji: "🇮🇳", x: 68, y: 42, prompt: "Tell me about festivals and food culture in India", fact: "Home to 22 official languages" },
  { name: "Japan", emoji: "🇯🇵", x: 82, y: 35, prompt: "Describe daily life and traditions in Japan", fact: "Land of the rising sun" },
  { name: "Morocco", emoji: "🇲🇦", x: 45, y: 38, prompt: "What is culture and food like in Morocco?", fact: "Where Sahara meets the Atlantic" },
  { name: "Mexico", emoji: "🇲🇽", x: 20, y: 45, prompt: "Tell me about Day of the Dead and Mexican culture", fact: "Birthplace of chocolate" },
  { name: "Egypt", emoji: "🇪🇬", x: 53, y: 40, prompt: "What is life like in Egypt during Ramadan?", fact: "Civilization over 5000 years old" },
  { name: "Brazil", emoji: "🇧🇷", x: 28, y: 62, prompt: "Tell me about Carnival and Brazilian culture", fact: "Largest country in South America" },
  { name: "Italy", emoji: "🇮🇹", x: 49, y: 33, prompt: "Describe food traditions and culture in Italy", fact: "Home to 50+ UNESCO sites" },
  { name: "China", emoji: "🇨🇳", x: 76, y: 37, prompt: "Tell me about Chinese New Year and traditions", fact: "Oldest continuous civilization" },
  { name: "Nigeria", emoji: "🇳🇬", x: 47, y: 50, prompt: "What are the cultural traditions of Nigeria?", fact: "250+ ethnic groups" },
  { name: "Peru", emoji: "🇵🇪", x: 23, y: 58, prompt: "Tell me about Inca heritage and Peruvian culture", fact: "Home of Machu Picchu" },
  { name: "Turkey", emoji: "🇹🇷", x: 55, y: 34, prompt: "What is culture and food like in Turkey?", fact: "Bridge between East and West" },
  { name: "Thailand", emoji: "🇹🇭", x: 75, y: 46, prompt: "Tell me about Songkran and Thai culture", fact: "Land of 40,000 temples" },
  { name: "France", emoji: "🇫🇷", x: 47, y: 30, prompt: "Describe café culture and traditions in France", fact: "Most visited country on Earth" },
  { name: "Spain", emoji: "🇪🇸", x: 44, y: 32, prompt: "Tell me about flamenco and Spanish culture", fact: "Birthplace of flamenco" },
  { name: "Greece", emoji: "🇬🇷", x: 52, y: 33, prompt: "What are the ancient traditions of Greece?", fact: "Birthplace of democracy" },
  { name: "Iran", emoji: "🇮🇷", x: 60, y: 37, prompt: "Tell me about Nowruz and Persian culture", fact: "Nowruz celebrated for 3000 years" },
  { name: "Ethiopia", emoji: "🇪🇹", x: 55, y: 48, prompt: "What are the cultural traditions of Ethiopia?", fact: "Birthplace of coffee" },
  { name: "Kenya", emoji: "🇰🇪", x: 55, y: 52, prompt: "Tell me about Maasai culture and traditions in Kenya", fact: "Home of the Great Migration" },
  { name: "South Africa", emoji: "🇿🇦", x: 51, y: 65, prompt: "What is culture like in South Africa?", fact: "11 official languages" },
  { name: "Argentina", emoji: "🇦🇷", x: 26, y: 70, prompt: "Tell me about tango and Argentine culture", fact: "Birthplace of tango" },
  { name: "Colombia", emoji: "🇨🇴", x: 23, y: 53, prompt: "What is the culture and food like in Colombia?", fact: "Second most biodiverse country" },
  { name: "Russia", emoji: "🇷🇺", x: 65, y: 22, prompt: "Tell me about traditions and culture in Russia", fact: "Largest country in the world" },
  { name: "Germany", emoji: "🇩🇪", x: 49, y: 27, prompt: "Describe Oktoberfest and German culture", fact: "1500 types of beer brewed here" },
  { name: "UK", emoji: "🇬🇧", x: 44, y: 26, prompt: "What are the traditions and culture of Britain?", fact: "Home of afternoon tea" },
  { name: "USA", emoji: "🇺🇸", x: 16, y: 35, prompt: "Tell me about diverse cultural traditions in America", fact: "300+ languages spoken" },
  { name: "Canada", emoji: "🇨🇦", x: 15, y: 25, prompt: "What are the cultural traditions of Canada?", fact: "World's longest coastline" },
  { name: "Australia", emoji: "🇦🇺", x: 82, y: 65, prompt: "Tell me about Aboriginal culture and traditions in Australia", fact: "60,000 years of Aboriginal history" },
  { name: "New Zealand", emoji: "🇳🇿", x: 88, y: 70, prompt: "What is Maori culture like in New Zealand?", fact: "First country to give women the vote" },
  { name: "Indonesia", emoji: "🇮🇩", x: 78, y: 53, prompt: "Tell me about Bali and Indonesian culture", fact: "17,000+ islands" },
  { name: "Vietnam", emoji: "🇻🇳", x: 76, y: 45, prompt: "What is street food culture like in Vietnam?", fact: "Home of Pho and Banh Mi" },
  { name: "South Korea", emoji: "🇰🇷", x: 81, y: 33, prompt: "Tell me about K-culture and traditions in South Korea", fact: "Birthplace of K-pop" },
  { name: "Pakistan", emoji: "🇵🇰", x: 65, y: 38, prompt: "What are the cultural traditions of Pakistan?", fact: "Ancient Indus Valley civilization" },
  { name: "Bangladesh", emoji: "🇧🇩", x: 70, y: 41, prompt: "Tell me about culture and festivals in Bangladesh", fact: "World's largest river delta" },
  { name: "Nepal", emoji: "🇳🇵", x: 69, y: 39, prompt: "What is culture like in Nepal?", fact: "Home of Mount Everest" },
  { name: "Sri Lanka", emoji: "🇱🇰", x: 69, y: 48, prompt: "Tell me about culture and traditions in Sri Lanka", fact: "Pearl of the Indian Ocean" },
  { name: "Saudi Arabia", emoji: "🇸🇦", x: 58, y: 40, prompt: "What is culture like in Saudi Arabia?", fact: "Birthplace of Islam" },
  { name: "UAE", emoji: "🇦🇪", x: 61, y: 41, prompt: "Tell me about culture and traditions in the UAE", fact: "From desert to skyscrapers in 50 years" },
  { name: "Ghana", emoji: "🇬🇭", x: 45, y: 50, prompt: "What are the cultural traditions of Ghana?", fact: "First African country to gain independence" },
  { name: "Tanzania", emoji: "🇹🇿", x: 55, y: 55, prompt: "Tell me about Zanzibar and Tanzanian culture", fact: "Home of Mount Kilimanjaro" },
  { name: "Philippines", emoji: "🇵🇭", x: 80, y: 46, prompt: "What are the cultural traditions of the Philippines?", fact: "7,641 islands" },
];

export default function Explore() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [visited, setVisited] = useState<Set<string>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dastaan-visited");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dastaan-visited");
    if (saved) setVisited(new Set(JSON.parse(saved)));
  }, []);

  const filtered = search
    ? CULTURES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : CULTURES;

  const bg = darkMode ? "#1a1208" : "#f5f0e8";
  const cardBg = darkMode ? "#2c1a0e" : "white";
  const textPrimary = darkMode ? "#fdf6e3" : "#2c1a0e";
  const textSecondary = darkMode ? "#c9a97a" : "#7a5c3a";
  const border = darkMode ? "#5a3e28" : "#d4b483";

  const handleCountryClick = (culture: typeof CULTURES[0]) => {
    const newVisited = new Set([...visited, culture.name]);
    setVisited(newVisited);
    localStorage.setItem("dastaan-visited", JSON.stringify([...newVisited]));
    setLoading(culture.name);
    setTimeout(() => {
      setLoading(null);
      window.location.href = `/?prompt=${encodeURIComponent(culture.prompt)}`;
    }, 800);
  };

  const clearVisited = () => {
    setVisited(new Set());
    localStorage.removeItem("dastaan-visited");
  };

  return (
    <main className="min-h-screen flex flex-col items-center transition-colors duration-300"
      style={{ background: bg, color: textPrimary, fontFamily: "Georgia, 'Times New Roman', serif" }}>

      <header className="w-full max-w-5xl pt-10 pb-4 px-4 text-center">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" style={{ color: "#8b5e3c" }} className="text-sm hover:underline">
            ← Back to Dastaan
          </Link>
          <button onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full text-xs border transition-all"
            style={{ borderColor: border, color: textSecondary, background: cardBg }}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <h1 className="text-5xl font-bold">Explore the World</h1>
        <p className="mt-2 italic" style={{ color: textSecondary }}>Click any country to hear its story</p>

        <div className="flex items-center gap-3 mt-2 justify-center flex-wrap">
          <p className="text-xs" style={{ color: textSecondary }}>
            {CULTURES.length} cultures · {visited.size} visited
          </p>
          {visited.size > 0 && (
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {Array.from(visited).slice(0, 5).map(name => {
                const c = CULTURES.find(x => x.name === name);
                return <span key={name} className="text-sm">{c?.emoji}</span>;
              })}
              {visited.size > 5 && <span className="text-xs" style={{ color: textSecondary }}>+{visited.size - 5} more</span>}
            </div>
          )}
        </div>

        {/* Clear visited button */}
        {visited.size > 0 && (
          <button onClick={clearVisited}
            className="mt-2 text-xs px-3 py-1 rounded-full border transition-all hover:opacity-80"
            style={{ borderColor: "#d4b483", color: "#9c7a5a", background: "transparent" }}>
            🗑️ Clear visited
          </button>
        )}

        <div className="mt-4 max-w-sm mx-auto">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search a country..."
            className="w-full px-4 py-2 rounded-xl border text-sm outline-none transition-all"
            style={{ background: cardBg, borderColor: border, color: textPrimary, fontFamily: "Georgia, serif" }} />
        </div>
      </header>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="px-8 py-6 rounded-2xl text-center shadow-2xl"
            style={{ background: cardBg, color: textPrimary }}>
            <p className="text-2xl mb-2">{CULTURES.find(c => c.name === loading)?.emoji}</p>
            <p className="text-sm font-semibold">🌍 Fetching story from {loading}...</p>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl px-4 mt-4">
        <div className="relative rounded-2xl overflow-hidden border shadow-lg"
          style={{ height: "420px", borderColor: border, background: darkMode ? "#1a3a5c" : "#7bb8e8" }}>

          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
            <rect width="1000" height="500" fill={darkMode ? "#1a3a5c" : "#7bb8e8"} />
            <path d="M80,80 L200,60 L240,120 L220,200 L180,240 L140,220 L100,180 L60,140 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
            <path d="M200,260 L260,240 L280,300 L270,380 L240,420 L200,400 L180,340 L190,280 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
            <path d="M420,60 L500,50 L520,100 L500,140 L450,150 L420,120 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
            <path d="M440,160 L520,150 L540,220 L530,320 L490,380 L450,360 L430,280 L420,200 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
            <path d="M520,40 L820,30 L850,120 L820,200 L750,220 L650,200 L580,180 L530,140 L510,80 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
            <path d="M760,320 L840,310 L860,370 L830,410 L780,400 L750,360 Z" fill={darkMode ? "#3a5c2a" : "#8fb87a"} />
          </svg>

          {CULTURES.map((culture) => (
            <button key={culture.name} onClick={() => handleCountryClick(culture)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${culture.x}%`, top: `${culture.y}%` }}
              onMouseEnter={() => setHovered(culture.name)}
              onMouseLeave={() => setHovered(null)}>
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-200"
                  style={{
                    background: visited.has(culture.name) ? "#c9a97a" : "#8b5e3c",
                    transform: hovered === culture.name ? "scale(1.8)" : "scale(1)",
                  }} />
                {hovered === culture.name && (
                  <div className="absolute bottom-full mb-2 z-10 text-center pointer-events-none"
                    style={{ minWidth: "120px", left: "50%", transform: "translateX(-50%)" }}>
                    <div className="px-2 py-1 rounded-lg shadow-lg text-xs"
                      style={{ background: "#2c1a0e", color: "white" }}>
                      <div className="font-semibold">{culture.emoji} {culture.name}</div>
                      <div style={{ color: "#c9a97a" }}>{culture.fact}</div>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-center mt-2" style={{ color: textSecondary }}>
          🟤 Unvisited · 🟡 Visited
        </p>
      </div>

      <div className="w-full max-w-5xl px-4 mt-6 pb-12">
        <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: textSecondary }}>
          {search
            ? filtered.length > 0
              ? `${filtered.length} results for "${search}"`
              : `No country found 🌍`
            : "✨ Select a country to hear its story"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-12" style={{ color: textSecondary }}>
            <p className="text-4xl mb-3">🌍</p>
            <p className="text-sm italic">No country found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {filtered.map((culture) => (
              <button key={culture.name} onClick={() => handleCountryClick(culture)}
                className="flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-200 shadow-sm cursor-pointer"
                style={{
                  background: visited.has(culture.name) ? (darkMode ? "#3a2a10" : "#fdf6e3") : cardBg,
                  borderColor: visited.has(culture.name) ? "#8b5e3c" : border,
                  color: textPrimary,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(139,94,60,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#8b5e3c";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = visited.has(culture.name) ? "#8b5e3c" : border;
                }}>
                <span className="text-2xl">{culture.emoji}</span>
                <span className="text-xs font-semibold text-center">{culture.name}</span>
                {visited.has(culture.name) && (
                  <span className="text-xs" style={{ color: "#8b5e3c" }}>✓ visited</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}