
var teamAli =  (89 + 102 + 103) / 3;
var teamAhmad =  (116 + 94 + 123) / 3;
var teamAyesha =  (97 + 134 + 105) / 3;


console.log('Ali\'s team Average: ' + teamAli + ' \n'  +
'Ahmad\'s team Average: ' + teamAhmad + ' \n' +
'Ayesha\'s team Average: ' + teamAyesha
);


if (teamAli > teamAhmad  && teamAli > teamAyesha) {console.log('Ali\'s team is winning'); }
else if (teamAhmad > teamAli && teamAhmad > teamAyesha) 
	{console.log('Ahmad\'s team is winning'); }
else if (teamAyesha > teamAli &&  teamAyesha > teamAhmad) 
	{console.log('Ayesha\'s team is winning'); }
else if (teamAli === teamAhmad  && teamAli > teamAyesha) 
	{console.log('Ali\'s team and Ahmad\'s team  are tied for winning'); }
else if (teamAhmad === teamAyesha && teamAhmad > teamAli ) 
	{console.log('Ahmad\'s team and Ayesha\'s team  are tied for winning'); }
else if (teamAli === teamAyesha && teamAyesha > teamAhmad ) 
	{console.log('Ali\'s team and Ayesha\'s team  are tied for winning'); }
else { console.log('They are all tied for winning \n\n'); }


console.log('Ali\'s Team Score: ' + teamAli + '\n' +
'Ahmad\'s Team Score: ' + teamAhmad + '\n' +
'Ayesha\'s Team Score: ' + teamAyesha
);
