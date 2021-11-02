import React, {useState, useEffect} from 'react';
import quoteslist from '../quoteslist';
import img2 from "../img/2.JPG";
import img3 from "../img/3.JPG";
import img4 from "../img/4.JPG";
import img5 from "../img/5.JPG";
import img6 from "../img/6.JPG";
import img9 from "../img/9.JPG";
import img10 from "../img/10.JPG";
import img13 from "../img/13.JPG";
import img14 from "../img/14.JPG";
import Clock from '../Clock'

import img15 from "../img/15.JPG";
import img16 from "../img/16.JPG";
import img17 from "../img/18.JPG";
import img18 from "../img/21.JPG";
import img19 from "../img/22.JPG";
import img20 from "../img/23.JPG";
import img21 from "../img/24.JPG";
import img22 from "../img/25.JPG";



import img23 from "../img/IMG_1686.jpg";
import img24 from "../img/IMG_2224.JPG";
import img25 from "../img/IMG_2699.jpg";
import img26 from "../img/IMG_2892.JPG";
import img27 from "../img/IMG_2909.JPG";
import img28 from "../img/IMG_2946.JPG";
import img29 from "../img/IMG_2950.JPG";
import img30 from "../img/IMG_3638.JPG";

import img31 from "../img/IMG_3857.jpg";
import img32 from "../img/IMG_3892.jpg";
import img33 from "../img/IMG_4149.jpg";
import img34 from "../img/IMG_5004.JPG";
import img35 from "../img/IMG_5115.JPG";
import img36 from "../img/IMG_5125.JPG";
import img37 from "../img/IMG_5127.JPG";
import img38 from "../img/IMG_5128.JPG";
import img39 from "../img/IMG_5207.jpg";

import img40 from "../img/IMG_5520.JPG";
import img41 from "../img/IMG_5567.JPG";
import img42 from "../img/IMG_52071.jpg";

let backgroundList = [img2,img3,img4,img5,img6,img9,img10,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42]
// let colorList = [
// 	'#E2C547','#C2DDC8','#99BFB3','#BCBF50','#D9B64E','#732002','#D98B48'
// ]
export default function Quotes() {
	
	const [quote,setQuote] = useState("")
	const [author,setAuthor] = useState("")
	const [background, setBackground] =useState(img2)

	useEffect (()=> {
		getQuote()
	}, []);


	const changeBackground = ()=>{
		let randomNum = Math.floor(Math.random()* backgroundList.length);
		let randomBg = backgroundList[randomNum];
		console.log(randomBg)
		setBackground(randomBg);
		
	}

	const getQuote =() => {
		let randomNum = Math.floor(Math.random()* quoteslist.length);
		let randomQuotes = quoteslist[randomNum];
		setQuote(randomQuotes.quote);
		setAuthor(randomQuotes.author);
	
	}

	const handleClick = () =>{
		getQuote();
		changeBackground(); 
	}


	return (
<div className= "wrapper" style={{ 
      backgroundImage: `url(${background})` 
    }}>
		<div className="timer">
	<Clock/>
	</div>
	{/* <div className = "page-header"> 
	This is the Page Header </div> */}
	{/* <div className = "page-main" >
		This is the Main Page
	</div> */}
	<div className ="page-footer" > 
	
	<div id = "text">
	<div id = "quote">
			<q>
				{quote} 
			</q>
		</div>
		<div id = "author">
			<p>
				 {author}
			</p>
		</div>
	</div>
	</div>
	<div className= "button" onClick={handleClick}> Enlighten me, with a new quote
		</div>
	</div>
	)
}
