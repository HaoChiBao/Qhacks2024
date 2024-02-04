
const get_everything = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_everything',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json()
}

let loop = null
const main = async () => {
    if(window.location.href !== 'https://www.blank.org/') return
    // if(true) return
    loop = setInterval(async () => {
        try{
            console.log(await get_everything())
        }catch(e){
            console.log(e)
        }
    }, 500)
}

main()
