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
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      <body>
        
        <nav class="jumbotron">
          <div class="jumbotron">
            <h1 class="display-4">
              Hi, I'm <span class="git-name">${response.data.login}</span>
            </h1>
            <p class="lead"><span class="git-bio">${response.data.bio}</span></p>
            <hr class="my-4" />
            <p>${response.data.location}, ${response.data.html_url}, ${response.data.blog}</p>
          </div>
        </nav>
        
        <div class="container">
          
            <style>
              .jumbotron {
                  background-color: ${colors[color].headerBackground};
                  }
                body {
                  background-color: white;
                  -webkit-print-color-adjust: exact !important;
                }
            </style>
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
