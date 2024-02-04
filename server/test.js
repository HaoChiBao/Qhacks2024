const main = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_everything', {
        // method: 'POST',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ expression: 'sad' })
    })
    console.log(await response.json())
}

main()