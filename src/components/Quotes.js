import React, {useState, useEffect} from 'react'
import quoteslist from '../quoteslist';


export default function Quotes() {
	
	const [quote,setQuote] = useState("")
	const [author,setAuthor] = useState("")

	useEffect (()=> {
		getQuote()
	}, []);

	const getQuote =() => {
		let randomNum = Math.floor(Math.random()* quoteslist.length);
		let randomQuotes = quoteslist[randomNum];
		setQuote(randomQuotes.quote);
		setAuthor(randomQuotes.author);
	
	}

	const handleClick = () =>{
		getQuote();
	}


	return (
		<div id = "quote-box" >
		<div id = "text">
			<p>
				{quote} 
			</p>
		</div>
		<div id = "author">
			<p>
				{author}
			</p>
		</div>
		<div id= "buttons">
			<button onClick={handleClick} id="new-quote"> New Quote </button>
		</div>
		</div>
	)
}
