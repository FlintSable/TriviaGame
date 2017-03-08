var triviaJS = {
	// object: values inside
	questions:{

		questOne:{
			q1:"Dear reader, sorry this is not complete",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}

		},
		questTwo:{
			q1:"The timer for the questions are active",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questThree:{
			q1:"If you get to this before I fix it, sorry",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questFour:{
			q1:"I think I could get this fully functional",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"

			}
		},
		questFive:{
			q1:"might just need some time",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questSix:{
			q1:"there are some major parts missing",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questSeven:{
			q1:"I added color while you wait",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questEight:{
			q1:"thank you for reading",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questNine:{
			q1:"hope you have a good night",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		},
		questTen:{
			q1:"I need to make more",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d"
			}
		}

	},

	timeValue: 7,
	questionCount: "questOne",



	modalRender: function(question, ansObj){
			// creating the divs, have not used them yet
			console.log("rendering in progress " + ansObj.a);
			$ghost = $('<div id="ghost"></div>');
			$clearLayer = $('<div id="clearLayer"></div>');
			$qModal = $('<div id="qModal">');
			$aObj = $('<div id="aObj">');
			$aItem = $('<button id="aItems">' + ansObj.a + '</button>');
			$bItem = $('<button id="aItems">' + ansObj.b + '</button>');
			$cItem = $('<button id="aItems">' + ansObj.c + '</button>');
			$dItem = $('<button id="aItems">' + ansObj.d + '</button>');
			$cont1 = $('<div id="cont1">');
			$cont2 = $('<div id="cont2">');
			$actualQuestion = $('<div id="actualQuestion loader">' + question + '</div>');
			$loader = $('<div id="loader">Mew</div>')

			$cont1.append($actualQuestion);
			$cont2.append($aItem, $bItem, $cItem, $dItem);
			$ghost.append($clearLayer, $qModal);
			$qModal.append($cont1, $cont2);



			$('body').append( $ghost);
			// $loader,

	},
		

	startTimer: function(q1, a1){
		// var questionCount = 0;
		// console.log(q1Obj);
		// var loopObject = function(q1Obj){
		// 	completeProcess(q1Obj[questionCount], function(){
		// 		questionCount++;
		// 		console.log(questionCount);
		// 		if(questionCount<q1Obj.length){
		// 			loopObject(q1Obj);
		// 		}
		// 	});
		// }
		// function completeProcess(log, callback){
		// 	console.log(log);

		// 	intervalTime = setInterval(this.decrement, 1000);
		// 	triviaJS.modalRender(q1Obj);
		// 	callback();
		// }
		// loopObject(q1Obj);

			// for(var key in triviaJS.questions){
			// 	console.log(triviaJS.questions[key]);
			// 	console.log(questionCount);
				console.log(triviaJS.questions.questOne.choices);
				intervalTime = setInterval(this.decrement, 1000);
				this.modalRender(q1, a1);
			// }

			
	},

	decrement: function(){	
			triviaJS.timeValue--;
			// $("#show-time").html("<h2>" + triviaJS.timeValue + "</h2>");
			$showTime = $('<div id="showTime"></div>');
			$cont1.append($showTime);
			$("#showTime").html(triviaJS.timeValue);

			if(triviaJS.timeValue <= 0){
				// fucntion to start modal
				// function to clear and open new modal
				clearInterval(this.intervalTime);
				$('#ghost').remove();
				triviaJS.timeValue = 5;

				setTimeout(function(){ // here you can run another function which 
					// will run the start timer based on some vairable 
					// that has been set
					if(triviaJS.questionCount ==  'questOne'){
						triviaJS.questions.questOne.choices
						triviaJS.startTimer(triviaJS.questions.questTwo.q1, triviaJS.questions.questTwo.choices);

						triviaJS.questionCount = 'questTwo';
	

					 }else if(triviaJS.questionCount == 'questTwo'){
						triviaJS.startTimer(triviaJS.questions.questThree.q1, triviaJS.questions.questThree.choices);
						triviaJS.questionCount = 'questThree';


					 }else if(triviaJS.questionCount == 'questThree'){
					 	triviaJS.startTimer(triviaJS.questions.questFour.q1, triviaJS.questions.questFour.choices);
						triviaJS.questionCount = 'questFour';


					 }else if(triviaJS.questionCount == 'questFour'){
					 	triviaJS.startTimer(triviaJS.questions.questFive.q1, triviaJS.questions.questFive.choices);
					 	triviaJS.questionCount = 'questFive';


					 }else if(triviaJS.questionCount == 'questFive'){
					 	triviaJS.startTimer(triviaJS.questions.questSix.q1, triviaJS.questions.questSix.choices);
					 	triviaJS.questionCount = 'questSix';


					 }else if(triviaJS.questionCount == 'questSix'){
					 	triviaJS.startTimer(triviaJS.questions.questSeven.q1, triviaJS.questions.questSeven.choices);
					 	triviaJS.questionCount = 'questSeven';


					 }else if(triviaJS.questionCount == 'questSeven'){
					 	triviaJS.startTimer(triviaJS.questions.questEight.q1, triviaJS.questions.questEight.choices);
					 	triviaJS.questionCount = 'questEight';


					 }else if(triviaJS.questionCount == 'questEight'){
					 	triviaJS.startTimer(triviaJS.questions.questNine.q1, triviaJS.questions.questNine.choices);
						triviaJS.questionCount = 'questNine';


					 }else if(triviaJS.questionCount == 'questNine'){
					 	triviaJS.startTimer(triviaJS.questions.questTen.q1, triviaJS.questions.questTen.choices);
					 	triviaJS.questCount = 'summary';


					 }else if(triviaJS.questionCount == 'summary'){
					 	console.log("total score")
					 }
					// triviaJS.startTimer("object list loop");
				}, 4000);



			}



	},
	stop: function(){},

	startQuiz: function(){
			// display modal question
		this.displayModalQuestion
			// start the timer
			// once times up rerun

	},

	displayModalQuestion: function(){},



}

// for (i=; i<5; i++){

// };

triviaJS.startTimer(triviaJS.questions.questOne.q1, triviaJS.questions.questOne.choices);
// triviaJS.startTimer(triviaJS.questions);

window.onload = function(){
	// if any of these are clicked add to score
	// if anything is clicked get the triviaJS.questionCount and rerun the start timer 
	triviaJS.decrement();

	// else add to incorrects
	// anything is clicked get the triviaJS.questionCount  and rerun the start timer accoudingly

};



// needs welcome button to start the modals
// needs to restart the modals with object questions
// check for answers
// if answer is correct then add to points