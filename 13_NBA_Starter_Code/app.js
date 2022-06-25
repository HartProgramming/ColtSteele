const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

/* This creates an arrow function with two parameters "games" and "targetTeam"
games is passed through as a list of all the games in the playoff series between
Golden State and Houston. targetTeam is passed through as the the team we are 
comparing results with in our functions */
const makeChart = (games, targetTeam) => {
  /* Creates an unordered list that will hold data of each game */
  const ulParent = document.createElement("ul");
  /* For loop designed to pass game iterable through the games parameter which
  represents the games object */
  for (let game of games) {
    /* This variable is a destructuring of the game parameter into two different
    variables; homeTeam & awayTeam */
    const { homeTeam, awayTeam } = game;
    /* This creates an li inside the ul every time a new game occurs */
    const gameLi = document.createElement("li");
    /* A win or loss class is applied to the isWinner function which passes through 
    the game in question and checks whether the targetTeam won or loss the game */
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
    /* Makes the HTML of the li equal to the result of the getScoreLine function */
    gameLi.innerHTML = getScoreLine(game);
    /* The ul appends the li */
    ulParent.appendChild(gameLi);
    console.log(awayTeam.team, homeTeam.team);
  }
  /* Once each game is looped through at the end return the entire ul */
  return ulParent
}
/* isWinner checks the homeTeam and awayTeam against the targetTeam that is passed
through the function to determine if they won or not, which is represented as a boolean
in the games object */
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}
/* The getScoreline Function creates the innerText of the li to display game data.
It also checks which team had the higher total of points and creates bold tags
around the highest score */
const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`
  if (aPoints > hPoints) {
    scoreLine = `${aTeam} @ ${hTeam} <b>${aPoints}</b> - ${hPoints}`
  } else {
    scoreLine = `${aTeam} @ ${hTeam} ${aPoints} - <b>${hPoints}</b>`
  }
  return `${teamNames} ${scoreLine}`
}
/* chart1 is declared and accepts the makeChart function and passes through two variables;
the object in question and the targetTeam: Golden State */
const chart1 = makeChart(warriorsGames, "Golden State");
/* After the function is created in the chart1 variable, we prepend it to the body.*/
document.body.prepend(chart1);

