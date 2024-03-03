function render(movies) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pug Colors</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="main">
    <h1>My Favorite Movies Of AllTime</h1>
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[0].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[0].name}</h2>
            <p class="card_text">${movies[0].ranking}</p>
            <p class="card_text">${movies[0].genre} </p>
            <a class="ranking">${movies[0].ratting}</a>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[1].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[1].name}</h2>
            <p class="card_text">${movies[1].ranking}</p>
            <p class="card_text">${movies[1].genre}</p>
            <a class="ranking">${movies[1].ratting}</a>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[2].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[2].name}</h2>
            <p class="card_text">${movies[2].ranking}</p>
            <p class="card_text">${movies[2].genre}</p>
            <a class="ranking">${movies[2].ratting}</a>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[3].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[3].name}</h2>
            <p class="card_text">${movies[3].ranking}</p>
            <p class="card_text">${movies[3].genre}</p>
            <a class="ranking ">${movies[3].ratting}</a>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[4].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[4].name}</h2>
            <p class="card_text">${movies[4].ranking}</p>
            <p class="card_text">${movies[4].genre}</p>
            <a class="ranking">${movies[4].ratting}</a>

          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">${movies[5].photo}</div>
          <div class="card_content">
            <h2 class="card_title">${movies[5].name}</h2>
            <p class="card_text">${movies[5].ranking}</p>
            <p class="card_text">${movies[5].genre}</p>
            <a class="ranking">${movies[5].ratting}</a>
        </div>
      </li>
    </ul>
  </div>
  
    </body>
    </html>
`;
}

module.exports = render;
