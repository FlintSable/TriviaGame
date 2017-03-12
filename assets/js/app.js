var triviaJS = {
	// object: values inside
	questions:{

		quest1:{
			q1:"Dear reader, sorry this is not complete",
			choices:{
				a:"the a-",
				b:"the b",
				c:"the c",
				d:"the d"
			},
			ans: 65

		},
		quest2:{
			q1:"The timer for the questions are active",
			choices:{
				a:"the a",
				b:"the b-",
				c:"the c",
				d:"the d"
			},
			ans: 66

		},
		quest3:{
			q1:"If you get to this before I fix it, sorry",
			choices:{
				a:"the a-",
				b:"the b",
				c:"the c",
				d:"the d"
			},
			ans: 65
		},
		quest4:{
			q1:"I think I could get this fully functional",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c-",
				d:"the d"
			},
			ans: 67
		},
		quest5:{
			q1:"might just need some time",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c-",
				d:"the d"
			},
			ans: 67

		},
		quest6:{
			q1:"there are some major parts missing",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c",
				d:"the d-"
			},
			ans: 68

		},
		quest7:{
			q1:"I added color while you wait",
			choices:{
				a:"the a",
				b:"the b",
				c:"the c-",
				d:"the d"
			},
			ans: 67

		},
		quest8:{
			q1:"thank you for reading",
			choices:{
				a:"the a-",
				b:"the b",
				c:"the c",
				d:"the d"
			},
			ans: 65

		},
		quest9:{
			q1:"hope you have a good night",
			choices:{
				a:"the a",
				b:"the b-",
				c:"the c",
				d:"the d"
			},
			ans: 66

		},
		quest10:{
			q1:"I need to make more",
			choices:{
				a:"the a-",
				b:"the b",
				c:"the c",
				d:"the d"
			},
			ans: 65
		}

	},

	timeValue: 7,
	questionCount: "questOne",
	questCount: 0,



	modalRender: function(question, ansObj){
			// creating the divs, have not used them yet
			console.log("rendering in progress " + ansObj.a);
			$ghost = $('<div id="ghost"></div>');
			$clearLayer = $('<div id="clearLayer"></div>');
			$qModal = $('<div id="qModal">');
			$aObj = $('<div id="aObj">');
			$aItem = $('<button id="aItems" data-value=65>' + ansObj.a + '</button>');
			$bItem = $('<button id="bItems" data-value=66>' + ansObj.b + '</button>');
			$cItem = $('<button id="cItems" data-value=67>' + ansObj.c + '</button>');
			$dItem = $('<button id="dItems" data-value=68>' + ansObj.d + '</button>');
			$cont1 = $('<div id="cont1">');
			$cont2 = $('<div id="cont2">');
			$actualQuestion = $('<div id="actualQuestion loader">' + question + '</div>');
			$loader = $('<div id="loader">Mew</div>')

			$cont1.append($actualQuestion);
			$cont2.append($aItem, $bItem, $cItem, $dItem);
			$ghost.append($clearLayer, $qModal);
			$qModal.append($cont1, $cont2);



			$('body').append( $ghost);
			$("button").on("click", function(){
				console.log($(this).attr('data-value'));
				console.log(question);

				if($(this).attr('data-value') == this.ans){
					console.log('CORRECT');
				}
				else{
					console.log('INCORRECT')
				}

			});
	},
		

	startTimer: function(q1, a1){

				intervalTime = setInterval(this.decrement, 1000);
				this.modalRender(q1, a1);

	
			
	},

	decrement: function(){	
			triviaJS.timeValue--;

			// $("#show-time").html("<h2>" + triviaJS.timeValue + "</h2>");
			$showTime = $('<div id="showTime"></div>');
			$cont1.append($showTime);
			$("#showTime").html(triviaJS.timeValue);

			function stateEvaluate(questCount){


				switch (triviaJS.questCount){
					case 0:
					triviaJS.startTimer(triviaJS.questions.quest1.q1, triviaJS.questions.quest1.choices);
					console.log('in the sqitch ' + questCount);
					break;

					case 1:
					triviaJS.startTimer(triviaJS.questions.quest2.q1, triviaJS.questions.quest2.choices);
					console.log(questCount);
					break;


					case 2:
					triviaJS.startTimer(triviaJS.questions.quest3.q1, triviaJS.questions.quest3.choices);
					console.log(questCount);
					break;

					case 3:
					triviaJS.startTimer(triviaJS.questions.quest4.q1, triviaJS.questions.quest4.choices);
					console.log(questCount);
					break;

					case 4:
					triviaJS.startTimer(triviaJS.questions.quest5.q1, triviaJS.questions.quest5.choices);
					console.log(questCount);
					break;

					case 5:
					triviaJS.startTimer(triviaJS.questions.quest6.q1, triviaJS.questions.quest6.choices);
					console.log(questCount);
					break;

					case 6:
					triviaJS.startTimer(triviaJS.questions.quest7.q1, triviaJS.questions.quest7.choices);
					console.log(questCount);
					break;

					case 7:
					triviaJS.startTimer(triviaJS.questions.quest8.q1, triviaJS.questions.quest8.choices);
					console.log(questCount);
					break;

					case 8:
					triviaJS.startTimer(triviaJS.questions.quest9.q1, triviaJS.questions.quest9.choices);
					console.log(questCount);
					break;

					case 9:
					triviaJS.startTimer(triviaJS.questions.quest10.q1, triviaJS.questions.quest10.choices);
					console.log(questCount);
					break;

					case 10:
					console.log('score!!!s');
					break;


				}
			};



			if(triviaJS.timeValue <= 0){
				// fucntion to start modal
				// function to clear and open new modal
				clearInterval(this.intervalTime);
				$('#ghost').remove();
				triviaJS.timeValue = 5;

				setTimeout(function(){ 
					triviaJS.questCount++;
					console.log('timeout function'+triviaJS.questCount);
					stateEvaluate(triviaJS.questCount);

				}, 4000);



			}



	},








}


triviaJS.startTimer(triviaJS.questions.quest1.q1, triviaJS.questions.quest1.choices);

window.onload = function(){

	triviaJS.decrement();




};

