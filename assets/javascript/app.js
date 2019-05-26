//create object with question and answer arrays - scrapping object, just creating vars and fxs
        //only creating 3 question and answer sets for now to test, will have to come back and add more
    var questions= ["Who is the Hufflepuff house ghost?", "Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?", "Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?"
    ];

    var answersOne= ["The Fat Friar", "Cuthbert Binns", "The Grey Lady", "Nearly Headless Nick" ];

    var answersTwo =["Armando Dippett", "Albus Dumbledore", "Phineas Black", "Brutus Scrimgeour"];

    var answersThree= ["Treacle Tart", "Pumpkin Juice", "Treacle Tart", "Mrs. Weasley's Fudge" ];


    //create variables to hold html elements to later push text to html
    var startBtn= $("#start-btn");
    var doneBtn= $("#done-btn");
    var timer=  $("#timer");
    var questionDisplay= $("#questions");
    var answerDisplay= $("#answers");
   
    


//create on page load function in object to create start button
$(document).ready(function firstPage() {
    console.log("ready!");
    var start = $("<button>" + "START" + "</button>");
    $(startBtn).append(start);

    });


//create start function to start timer for 120 seconds

    var gameStart = function(){
        //remove start button
        $(startBtn).empty()

        //start timer at 120 seconds
        var time = 120
        console.log("game started");

        //call timer function to start countdown when game is started
        var countDown = setInterval(startTimer, 1000);
        console.log ("timer started")
       
       $("#timer").text("Time Remaining: " + time + " seconds")

       //generate done button
       var done = $("<button>"+ "DONE" + "</button>");
       $(doneBtn).append(done);
        
       //timer function that acutally counts down at second intervals
       function startTimer(){
           //decrease original 120 seconds display by 1 every second and display to page
           time--;
           $("#timer").text("Time Remaining: " + time + " seconds")

        // if time=0 stop interval
        if (time===0) {
            clearInterval(countDown);
            //run done function that moves on to results page
        }; 

       };

    //push questions from array to question rows and create a row each time
    for (var i=0; i<questions.length; i++) {
        var qRow = $("<h3>")
        qRow.addClass("col-md-12")
        qRow.text(questions[i])
        $(questionDisplay).append(qRow);
        console.log(questions[i]);

    };

   
        
        
    //push answers from array to answer row and createa a row each time... how to nestle this 
    //under each question row?? Also, have to be radio button inputs
    //create for loop to iterate through answer array and create a radio button and the append to end of 
    //each corresponding qRow
    
    //set conditional for if time runs out, run done function
}
//create function for on click events when radio button answers are selected 
    //if correct answer selected (set index) then increase numberCorrect counter by 1
    //if else remaining indexes selected, increase numberIncorrect counter by 1
    //else increase numberUnanswered counter by 1

//create endGame function when done button is clicked or when timer runs out - done fx will be on click event
    //display "All Done!", correct, incorrect, and unanswered counters



//create events to call functions
    //on page load for start button generation
    //on click of start button for startGame
    $("#start-btn").click(gameStart);
    //on click for answer selection
    //on click for endGame
    

    //storing for later
    //resultsPage = {
        //doneMsg: $("#done").text("All Done!"),
        //correctCount: $("#correct").text("Correct Answers: " + numberCorrect),
        //incorrectCount: $("#incorrect").text("Incorrect Asnwers: " + numberIncorrect),
        //unansweredCount: $("#unanswered").text("Unanswered: " + numberUnanswered),
        //}