const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const generator = (color, response) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap"
        rel="stylesheet"
      />
      <title>Git Resume</title>
  
      <body class="grid">
  
        
        <h1 class="display-2">
            <img class="rounded photo-header" src=${response.data.avatar_url} alt="" class="photo">
            <span class="git-name">${response.data.name}</span>
          </h1>
          <p class="lead git-bio-p"><span class="git-bio">${response.data.bio}</span></p>
          <p class="text-center flex-column">${response.data.location}, ${response.data.html_url}, ${response.data.blog}</p>

  
        <main>

          <div class="public-repositories">
            <p>Public Repositories:</p>
          </div>
  
          <div class="followers">
            <p>Followers:</p>
          </div>
  
          <div class="github-stars">
            <p>Stars:</p>
          </div>
  
          <div class="following">
            <p>Following:</p>
          </div>
        </main>

          
          
          <style>
            .grid {
              display: grid;
              height: 100%;
              width: 100%;
              border: 1px solid white;
            }
  
            html, body, .wrapper {
              height: 100%;
            }       
  
            body {
              background-color: white;
              -webkit-print-color-adjust: exact !important;
              font-family: 'Cabin', sans-serif;         
            }
  
            @media print { 
              body { 
                zoom: .5; 
                } 
              }
  
              p, .git-bio {
                text-align: center;
              }
  
              h1 {
                margin: auto;
              }
  
              .photo-header {
                display: flex;
                background-color: blue;
                padding: 10px;
                margin: auto;
                width: 250px;
                height: 250px;
                border-radius: 50%;
                object-fit: cover;
                border: 6px solid yellow;
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
              }          
  
              .middle-row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20%;
                margin-bottom: 20px;
              }
            </style>
      </body>
    </html>
  `;
};

module.exports = generator;

//
{
  /* <p>${response.data.url}</p>
<p>${response.data.avatar_url}</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>${response.data.public_repos}</p>
<p>${response.data.followers}</p>
<p>${response.data.starred_url}</p>
<p>${response.data.following}</p> */
}
//
