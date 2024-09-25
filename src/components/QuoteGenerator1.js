import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const QuoteGenerator1 = () => {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  // Function to fetch random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
      const randomQuote = response.data.quotes[randomIndex];
      setQuote({ quote: randomQuote.quote, author: randomQuote.author });
      // setQuote(response.data.quotes[randomIndex].quote);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
  <div class="col-12 col-md-6 col-lg-4 bg-primary text-white p-3"></div>
    <div class="col-12 col-md-6 col-lg-4 bg-secondary text-white p-3">
    <div style={{ textAlign: 'center', marginTop: '50px', width: '100%', height: '500px', backgroundColor: 'aquamarine' }}>
      <h1 style={{ fontSize:'40px',color:'blue' }}>Quote of the day</h1>
      <div  style={{ width: '98%', height: '200px', backgroundColor: 'white',marginLeft:'10px',marginRight:'20px', display:'flex',alignItems:'center',justifyContent:'center'}}>
       
            <p style={{ fontSize:'20px', marginTop:'30px' }} ><FontAwesomeIcon icon={ faQuoteLeft} />{quote.quote}<FontAwesomeIcon icon={ faQuoteRight} />
            </p>
            
            <p><br/><br/><strong>- {quote.author}</strong></p>

          </div>
          
          
      <button onClick={fetchQuote}>Next Quote</button>
    </div>
    </div>
    <div class="col-12 col-lg-4 bg-success text-white p-3"></div>

    
    </>
  );
}


export default QuoteGenerator1;
