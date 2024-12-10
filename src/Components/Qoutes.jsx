import React, { useState } from 'react';

function Quotes() {
  const [category, setCategory] = useState("attitude");
  const [quote, setQuote] = useState({ quote: "The will of man is his happiness.", author: "Friedrich Schiller" });

  const generator = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'uDvB0b470iomhYthR+zVnQ==Bb1qCMdukT2dKcT8',
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    const fetchedQuote = result.length > 0 ? result[0] : { quote: "No quote found.", author: "" };
    setQuote(fetchedQuote);
  };

  return (
    <div className="flex justify-center justify-items-center">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {quote.quote}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            {quote.author}
          </p>
        </div>
        <div>
          <div className="flex justify-between px-4 pb-4 pt-0 mt-2">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="attitude">Attitude</option>
              <option value="computers">Computers</option>
              <option value="business">Business</option>
            </select>
            <button
              onClick={generator}
              className="btn rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
