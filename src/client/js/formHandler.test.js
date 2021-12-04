import 'regenerator-runtime' //Needed for jest
import {getAPIDataFromServer} from "./formHandler" //import the function we are testing
jest.setTimeout(30000) //Increase from default 5 seconds

const urlLink = "https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b" //URL we are testing

test("Should return SUBJECTIVE and NONIRONIC", async () => {
    const apiData = await getAPIDataFromServer("http://localhost:8081/getAPIData", urlLink) //make sure your index.js server is running during this test!!
    .then(apiData => apiData.json())
    expect(apiData.subjectivity + " " + apiData.irony).toBe("SUBJECTIVE NONIRONIC")
})