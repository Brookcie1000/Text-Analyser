const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value

    console.log("::: Data Submitted :::")
    console.log("==Contacting Server==")
    console.log(`Sending ${formText} to server.`)
    const apiData = await getAPIDataFromServer("http://localhost:8081/getAPIData", formText)
    .then(apiData => apiData.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

const getAPIDataFromServer = async (url, userText) => {

    const res = await fetch(url, {
        // Set the POST data to be sent.
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain'
        },
        // Body data type must match "Content-Type" header        
        body: userText
    })
    
    return res
}

export {handleSubmit}
export {getAPIDataFromServer}