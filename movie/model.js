const data = [
    {name:'Saving Private Ryan', photo: '<img src="./SavingPrivateRyan.jpg" alt="Saving Private Ryan">' ,ranking:'Ranking : 1st', genre:'Genre : War, Drama',ratting:"My Ratting : ⭐⭐⭐⭐⭐"},
    {name:'The Tin Mine', photo: '<img src="./TheTinMine.jpg" alt="The Tin Mine">', ranking:'Ranking : 2nd', genre:'Genre : Comedy, Drama',ratting:"My Ratting : ⭐⭐⭐⭐⭐"},
    {name:'Interstellar', photo: '<img src="./Interstellar.jpg" alt="Interstellar">', ranking:'Ranking : 3rd', genre:'Genre : Science Fiction',ratting:"My Ratting : ⭐⭐⭐⭐"},
    {name:"Schindler's List", photo: '<img src="./SchindlersList.jpg" alt="Schindlers List">',ranking:'Ranking : 4th', genre:'Genre : History, Drama',ratting:"My Ratting : ⭐⭐⭐⭐"},
    {name:"Forrest Gump", photo: '<img src="./ForrestGump.jpg" alt="Forrest Gump">',ranking:'Ranking : 5th', genre:'Genre : Comedy, Drama',ratting:"My Ratting : ⭐⭐⭐"},
    {name:"whiplash", photo: '<img src="./Whiplash.jpg" alt="whiplash">' ,ranking:'Ranking : 6th', genre:'Genre : Comedy, Drama',ratting:"My Ratting : ⭐⭐⭐"},
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;