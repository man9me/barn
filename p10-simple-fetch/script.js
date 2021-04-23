const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//generateJoke()


async function generateJoke() {
    
    const headers = await {headers:{ Accept:'application/json'}}
    const data = await fetch('https://icanhazdadjoke.com',headers).then(res=>res.json())
    jokeEl.innerHTML = await data.joke
    
     
     
}

jokeBtn.addEventListener('click',()=>{
    jokeBtn.disabled = true
    generateJoke().then(()=>{jokeBtn.disabled = false})

    console.log('uups i m sorry')
    
})