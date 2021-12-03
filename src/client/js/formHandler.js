const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value

    console.log("::: Data Submitted :::")
    console.log("==Contacting Server==")
    console.log(`Sending ${formText} to server.`)
    document.getElementById('results').innerHTML = "Results Pending..."
    const apiData = await getAPIDataFromServer("http://localhost:8081/getAPIData", formText)
    .then(apiData => apiData.json())
    .then(function(apiData) {
        if (apiData.confidence == undefined){
            alert("Invalid URL, please insert a valid URL")

        } else {
            document.getElementById('results').innerHTML = "The analysis of the link has determined with " + apiData.confidence + "/100 that the article/webpage is: " + apiData.subjectivity + " and is " + apiData.irony

        }
        
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