var triviaJS = {
	// object: values inside
	questions:{

		questOne:{
			question:"display question",
			choices:{
				a:"a",
				b:"b",
				c:"c",
				d:"d"
			},
			custom:"something unique",

		},
		questTwo:{

		},
		questThree:{

		},
		questFour:{

		},
		questFive:{

		},
		questSix:{

		},
		questSeven:{

		},
		questEight:{

		},
		questNine:{

		},
		questTen:{

		},
		modal:{

		}
	},

		timeValue: 100,
		

		startTimer: function(){
			var intervalTime;
			intervalTime = setInterval(this.decrement, 1000);
			
		},

		decrement: function(){	
			triviaJS.timeValue--;
			$("#show-time").html("<h2>" + triviaJS.timeValue + "</h2>");

			if(triviaJS.timeValue === 0){
				stop();
				console.log("Times up");
			}

		},
		stop: function(){
			clearInterval(intervalTime);
		},

		startQuiz: function(){
			// display modal question
			this.displayModalQuestion
			// start the timer
			// once times up rerun

		},

		displayModalQuestion: function(){

		},









	






}
triviaJS.startTimer();