//create object with question and answer arrays 
var triviaGame = {
        //only creating 3 question and answer sets for now to test, will have to come back and add more
    questions: ["Who is the Hufflepuff house ghost?", "Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?", "Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?"
    ],

    answersOne: ["The Fat Friar", "Cuthbert Binns", "The Grey Lady", "Nearly Headless Nick" ],

    answersTwo:["Armando Dippett", "Albus Dumbledore", "Phineas Black", "Brutus Scrimgeour"],

    answersThree: ["Treacle Tart", "Pumpkin Juice", "Treacle Tart", "Mrs. Weasley's Fudge" ],


    //create variables to hold html elements to later push text to html
    startBtn: $("#start-btn"),
    doneBtn: $("done-btn"),
    timer: $("#timer"),
    questions: $("#questions"), 
    answers: $("#answers"), 
    resultsPage: {
        doneMsg: $("#done").text("All Done!"),
        correctCount: $("#correct").text("Correct Answers: " + numberCorrect),
        incorrectCount: $("#incorrect").text("Incorrect Asnwers: " + numberIncorrect),
        unansweredCount: $("#unanswered").text("Unanswered: " + numberUnanswered),
    },


//create on page load function in object to create start button
    pageLoad: $(document).ready(function() {
    console.log("ready!");
    var start = $("<button>");
    $(startBtn).append(start);

}),
//create start function in object to set timeout for 120 seconds
    //push questions from array to question and answer arrays and create row each time
    //generate done button
    //set conditional for if time runs out, run done function
    
//create function for on click events when radio button answers are selected 
    //if correct answer selected (set index) then increase numberCorrect counter by 1
    //if else remaining indexes selected, increase numberIncorrect counter by 1
    //else increase numberUnanswered counter by 1

//create endGame function when done button is clicked or when timer runs out - done fx will be on click event
    //display "All Done!", correct, incorrect, and unanswered counters

}

//create events to call functions
    //on page load for start button generation
    //on click of start button for startGame
    //on click for answer selection
    //on click for endGame
