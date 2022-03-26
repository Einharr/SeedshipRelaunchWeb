

//подсчет очков
//scoring
function countScore(ship, planet, end_score) {

	score =
      {
        atmosphere: 0,
        gravity: 0,
        temperature: 0,
        water: 0,
        resources: 0,

        scienceDB: ship.science[0]*10,
        cultureDB: ship.culture[0]*10,

        cultureScore: ship.colonists[0]*(ship.culture[0]/100),

				score_technology: 0,
				score_culture: 0,
				native_relations: 0,

				overall: 0,
     };

		 switch(planet.atmosphere) {
			 case "Breathable":
			 score.atmosphere = 500;
				break;
			 case "Marginal":
			 score.atmosphere = 250;
				break;
			 default:
			 score.atmosphere = 0;
				 break;
		 };

		 switch(planet.gravity) {
			 case "Moderate":
			 score.gravity = 500;
				break;
			 case "High":
			 score.gravity = 250;
				break;
				case "Low":
 			 score.gravity = 250;
 				break;
			 default:
			 score.gravity = 0;
				 break;
		 };

		 switch(planet.temperature) {
			 case "Moderate":
			 score.temperature = 500;
				break;
			 case "Hot":
			 score.temperature = 250;
				break;
				case "Cold":
 			 score.temperature = 250;
 				break;
			 default:
			 score.temperature = 0;
				 break;
		 };

		 switch(planet.water) {
			 case "Oceans":
			 score.water = 500;
				break;
				case "Ice caps":
 			 score.water = 500;
 				break;
			 case "Planet-wide ocean":
			 score.water = 250;
				break;
				case "Ice-covered surface":
 			 score.water = 250;
 				break;
			 default:
			 score.water = 0;
				 break;
		 };

		 switch(planet.resources) {
			 case "Rich":
			 score.resources = 500;
				break;
			 case "Poor":
			 score.resources = 250;
				break;
			 default:
			 score.resources = 0;
				 break;
		 };

		 switch (end_score.final_tech_level)
 		{
 			case 10:	score.score_technology = 3000; break;
 			case 9:		score.score_technology = 2000; break;
 			case 8:		score.score_technology = 1750; break;
 			case 7:		score.score_technology = 1500; break;
 			case 6:		score.score_technology = 1250; break;
 			case 5:		score.score_technology = 1000; break;
 			case 4:		score.score_technology = 800; break;
 			case 3:		score.score_technology = 600; break;
 			case 2:		score.score_technology = 400; break;
 			case 1:		score.score_technology = 200; break;
 			default:	score.score_technology = 0; break;
 		}

 		switch (end_score.final_culture)
 		{
 			case 17:	score.score_culture = 3000; break;
 			case 16:	score.score_culture = 2500; break;
 			case 15:	score.score_culture = 2000; break;
 			case 14:	score.score_culture = 1500; break;
 			case 13:	score.score_culture = 1000; break;
 			case 12:	score.score_culture = 500; break
 			case 11:	score.score_culture = 250; break;
 			case 10:	score.score_culture = 0; break;
 			case 9:		score.score_culture = 2000; break;
 			case 8:		score.score_culture = 1500; break;
 			case 7:		score.score_culture = 1000; break;
 			case 6:		score.score_culture = 500; break;
 			case 5:		score.score_culture = 0; break;
 			case 4:		score.score_culture = 2000; break;
 			case 3:		score.score_culture = 1500; break;
 			case 2:		score.score_culture = 1000; break;
 			case 1:		score.score_culture = 500; break;
 			default:	score.score_culture = 0; break;
 		}

 		switch (end_score.native_relations)
 		{
			case 15:	score.score_native_relations = 1500; break;
			case 14:	score.score_native_relations = 500; break;
			case 13:	score.score_native_relations = -500; break;
			case 12:	score.score_native_relations = -1000; break;
			case 11:	score.score_native_relations = -2000; break;
			case 10:	score.score_native_relations = -2000; break;
			case 9:		score.score_native_relations = 1000; break;
 			case 8:		score.score_native_relations = 0; break;
 			case 7:		score.score_native_relations = -1000; break;
 			case 6:		score.score_native_relations = 2000; break;
 			case 5:		score.score_native_relations = 1000; break;
 			case 4:		score.score_native_relations = 0; break;
 			case 3:		score.score_native_relations = -1000; break;
 			case 2:		score.score_native_relations = -1000; break;
 			case 1:		score.score_native_relations = -2000; break;
 			case 0:		score.score_native_relations = -2000; break;
 			case -1:	score.score_native_relations = 0; break;
 			default: score.score_native_relations = 0; break;
 		}



		 score.overall =
		 								score.atmosphere+
										score.gravity+
										score.temperature+
										score.water+
										score.resources+
										score.scienceDB+
										score.cultureDB+
//										score.cultureScore+
										score.score_technology+//
										score.score_culture+//
										score.native_relations;//

return score;
}


/*

Score
Planet atmosphere:
Planet gravity:
Planet temperature:
Planet water:
Planet resources:
Survivors after landing:
Survivors after settlement construction:
Final technology level (Medieval):
Final culture (Egalitarian Republic):
Surviving scientific database × 10:
Surviving cultural database × 10:
Total:
*/
