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

const generator = (colors, color, response) => {
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
  
      <body>
      <h1><img class="rounded photo-header" src=${response.data.avatar_url} alt="" class="photo"></h1>
      
      
      <h1 class="display-2">
          <span class="git-name">${response.data.name}</span>
        </h1>
          <p class="lead git-bio-p"><span class="git-bio">${response.data.bio}</span></p>
          <p class="text-center flex-column"><a href="${response.data.location}">Location</a> <a href="${response.data.html_url}">GitHub </a> <a href="${response.data.blog}">Blog</a></p>


  
          <main>
          <div class="buttons">
  
            <div class="public-repositories btn">
              <p>Public Repositories: ${response.data.public_repos}</p>
            </div>
            
            <div class="followers btn">
              <p>Followers: ${response.data.followers}</p>
            </div>
          </div>
            
          <div class="buttons">
            
            </div>
          <div class="github-stars btn">
            <p>Company: ${response.data.company}</p>
          </div>
  
          <div class="following btn">
            <p>Following: ${response.data.following}</p>
          </div>
        </div>
        </main>
  
          
          
          <style>

            main {   
              display: grid;
              grid-template: 50% 50% / 50% 50%;
              background-color: white;
              border 1px solid green;
              margin: auto;
            }   

            .btn {
              display: inline-block;
              width: 45%;
            }
  
            body {
              display: grid;
              height: 100%;
              width: auto;
              border: 1px solid white;
              background-color: white;
              -webkit-print-color-adjust: exact !important;
              font-family: 'Cabin', sans-serif;         
            }

            .photo-header {
              display: flex;
              background-color: ${colors[color].photoBorderColor};
              padding: 10px;
              margin: 5% auto 5% auto;
              width: 250px;
              height: 250px;
              border-radius: 50%;
              object-fit: cover;
              border: 6px solid ${colors[color].headerBackground};
              box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
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
                text-align: center;
              }
  
              .display-2 {
                margin: auto;
              }
  
              .git-name {
                font-size: 200%;
              }

              .public-repositories {
                border: 5px ${colors[color].headerBackground} solid;
                background-color: ${colors[color].photoBorderColor};
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .followers {
                border: 5px ${colors[color].headerBackground} solid;
                background-color: ${colors[color].photoBorderColor};
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .following {
                border: 5px ${colors[color].headerBackground} solid;
                background-color: ${colors[color].photoBorderColor};
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
  
              .github-stars {
                border: 5px ${colors[color].headerBackground} solid;
                background-color: ${colors[color].photoBorderColor};
                padding: 10px;
                margin: 1% 1% 1% 1%;
              }
      
            </style>
      </body>
    </html>
  `;
};

module.exports = {
  generator: generator,
  colors: colors
}
