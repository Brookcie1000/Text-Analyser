# Article/Text Analysis using MeaningCloud API

The goal of this repo is to demonstrate a connection to a server from the client side which gathers information on an API to determine text attributes.

## Get Up and Running

1) Download this repo
2) In the root directory, open a terminal (Git Bash was used in this example)
3) Type and run: npm run build-prod
4) This will create/update the dist folder
5) In the '/src/client/server you will find the 'index.js' file, open another terminal here.
6) Type and run: npm start index.js
7) The server will begin running on localhost:8081 (this can be changed, but is not reccomended to be 8080 as this is the port the Dev server runs on)
8) Connect to localhost:8081 to find the website running.
9) Copy and paste a URL link to an article and submit.
10) After a short few seconds, it will return an analysis.
