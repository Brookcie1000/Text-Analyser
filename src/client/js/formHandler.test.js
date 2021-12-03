const getAPIDataFromServer = require('./formHandler')
const urlLink = "https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b"

test("Should return SUBJECTIVE and NONIRONIC", async () => {
    const apiData = await getAPIDataFromServer("http://localhost:8081/getAPIData", urlLink) //make sure your server is running during this test!
    expect(apiData.subjectivity + " " + apiData.irony).toBe("SUBJECTIVE NONIRONIC")
})