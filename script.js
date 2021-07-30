// Selecting HTML elements and assigning them to a const variable
const box=document.querySelector('.quote-body')
const text = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('.twitter-share-button');
const nextBtn = document.querySelector('#next');
const loader = document.querySelector('.loader');
const api=`https://type.fit/api/quotes`;
const getQuote = async () => {
    const res = await fetch(api);
    const quotes = await res.json();//converting readable data into json
    const num = Math.floor(Math.random()*quotes.length);//random index in the range of array length
    const data = quotes[num];
    const quote = data.text;
    const author = data.author;
    text.innerText = quote;
    // if author is null then make it unknown otherwaise author name
    author==null
    ? auth.innerText =" 🖋️-Unknown"
    :auth.innerText = ` 🖋️- ${author}`;
    button.href = `https://twitter.com/intent/tweet?text=${quote}  -️ ${author}`
}

nextBtn.addEventListener('click', getQuote);

getQuote();