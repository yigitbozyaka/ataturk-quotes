import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function English() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  //this place is for display a quote first visit on page
  useEffect(() => {
    axios
      .get("https://ataturk.now.sh/en")
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get a quote onclick button
  const getQuote = async () =>{
    setIsLoading(true);

    try {
      axios
      .get("https://ataturk.now.sh/en")
      .then((response) => {
        setQuote(response.data.quote);
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  

  return (
    <div className="englishSection">

      <div className="quote-box">
        {quote} {isLoading && <h2>Loading...</h2>}
      </div>
      <button className="getQuoteBtn" onClick={getQuote}>
        Get Quote
      </button>
      <Link to="/"><button className="mx-4">Home</button></Link>
      <div className="img-box">
        <img src="https://www.freepnglogos.com/uploads/ataturk-png/mustafa-kemal-ataturk-imzasi-png-photo-8.png" alt="Ataturk" />
      </div>
    </div>
  );
}

export default English;
