import React, { useState, useEffect } from "react";
import "./styles.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [finalQuote, setFinalQuote] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./quotes.json")
    .then((data) => data.json())
    .then((fetchedQuotes) => {
      setQuotes(fetchedQuotes);
      setFinalQuote(fetchedQuotes[Math.floor(Math.random() * fetchedQuotes.length)])
      setLoading(false);
    });
  }, []);

  const stirGarbage = () => {
    setFinalQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  if (loading) {
    return "Loading";
  }

  return (
    <div className="quotes">
      <div>
        <p>{finalQuote.content}</p>
        <div>
          <p className="trump-name">-Donal J. Trump</p>
          <span>{finalQuote.date}</span> - <span>{finalQuote.medium}</span>
        </div>
      </div>
      <button onClick={stirGarbage}>More Garbage</button>
    </div>
  );
};

export default Quotes;
