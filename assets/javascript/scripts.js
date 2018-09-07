// Wilderness Survival Quiz
// advanced timed trivia game assignment
// © Richard Trevillian, 2018-09-06
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript



$(document).ready(function () {


    let questionArray = [

        {
            question: "Halfway into a weeklong hike in Glacier National Park, you and your buddy have lost the trail. What's your next move?",
            answer: "B. Retrace your steps to your last known landmark. You have company, supplies, and gear—so solve this yourself. If you're still off the trail after a day or two, try C. Following option A is a major reason hikers get lost.",
            correct: "B",
            A: "A. Shortcut cross-country back toward the path, to avoid wasting daylight.",
            B: "B. Retrace your steps to your last known landmark.",
            C: "C. Stop, pitch your tent, and start signaling for help.",
            D: "D. Climb to the top of the highest nearby peak to get a better view.",
        },


        {
            question: "It's day 8 of your thru-hike of southern Utah's 812-mile Hayduke Trail, your water bottles are empty, and the map doesn't show any springs on this high plateau. Now what?",
            answer: "B. While urine can be 95 percent water and only 5 percent waste, concentrated urine can increase thirst, mess up your electrolytes, and induce vomiting. C is a myth.",
            correct: "B",
            A: "A. Drink any urine you produce.",
            B: "B. Rest in the shade, then retrace your steps to the last available water once the sun goes down.",
            C: "C. Find a creekbed and start digging. You'll find the water table soon.",
            D: "D. Follow a cattle trail; it will always lead to water.",
        },


        {
            question: "You're ready for the first rappel into a technical slot canyon, but the anchors mentioned in the route description aren't there. Is this a problem?",
            answer: "C. Flash floods may have stripped anchors you need, or you might be in the wrong canyon. Either way, a slot canyon is usually a one-way trip, so make sure you can get through before proceeding.",
            correct: "C",
            A: "A. No. Rap on using something else as an anchor, but make sure your cell phone is charged in case anything goes wrong.",
            B: "B. Not really. But first, check your bolt kit to be certain you have enough anchors to pound in wherever you might need them, and find a good spot to establish the start of your own route.",
            C: "C. Yes. Retrace your route until you find the anchors.",
        },


        {
            question: "True or false? Hypothermia can be a risk in temps above 55°F.",
            answer: "A. True, especially if it's raining and windy. Just ask the rangers in the Smokies, who see a surprising number of cases every spring.",
            correct: "A",
            A: "True",
            B: "False",
        },


    ];


    let rightAnswers = 0;
    let wrongAnswers = 0;
    let unAnswers = 0;

    let qObject = 0;

    let qQuestion = questionArray[qObject].question;
    let qAnswer = questionArray[qObject].answer;
    let qCorrect = questionArray[qObject].correct;
    let qA = questionArray[qObject].A;
    let qB = questionArray[qObject].B;
    let qC = questionArray[qObject].C;
    let qD = questionArray[qObject].D;
    let qE = questionArray[qObject].E;
    let qF = questionArray[qObject].F;
    let right = "RIGHT!";
    let wrong = "WRONG!";



    function displayQuestion() {

        // show the current question
        $('#question').html(qQuestion);
        $('#response').attr("class", "list-group list-group-flush col-sm-12 col-lg-6");
        if (qA) {
            $('#response').append('<button id="A" type="button" class="list-group-item list-group-item-action">' + qA + '</button>');
        };
        if (qB) {
            $('#response').append('<button id="B" type="button" class="list-group-item list-group-item-action">' + qB + '</button>');
        };
        if (qC) {
            $('#response').append('<button id="C" type="button" class="list-group-item list-group-item-action">' + qC + '</button>');
        };
        if (qD) {
            $('#response').append('<button id="D" type="button" class="list-group-item list-group-item-action">' + qD + '</button>');
        };
        if (qE) {
            $('#response').append('<button id="E" type="button" class="list-group-item list-group-item-action">' + qE + '</button>');
        };

        $('button').click(function (btn) {

            // console.log("It works!"); 

            if ($(this).attr('id') === qCorrect) {

                $('#question').html("<strong>" + right + "</strong>");
                $('#question').append("<p>" + qAnswer + "</p>");
                $(this).attr('class', 'list-group-item list-group-item-action list-group-item-success');
                $('button').prop("disabled", true);
                rightAnswers = rightAnswers + 1;
                qObject = qObject + 1;
                clearInterval(intervalId);
                setTimeout(displayQuestion, 1000 * 10);

            } else {

                $('#question').html("<strong>" + wrong + "</strong>");
                $('#question').append("<p>" + qAnswer + "</p>");
                $(this).attr('class', 'list-group-item list-group-item-action list-group-item-danger');
                $('button').prop("disabled", true);
                wrongAnswers = wrongAnswers + 1;
                qObject = qObject + 1;
                clearInterval(intervalId);
                setTimeout(displayQuestion, 1000 * 10);

            }

        });

    }


      

    // declare the intervalId variable (will take a callback function and time length as setInterval)
    let intervalId;


    function countdown() {

        // set the number of seconds the countdown will start at
        let time = 60;

        // write the initial starting number to the page (match to seconds set in the TIME variable above)
        $("#timer").text("00:60");

        // timeConverter function copied from the stopwatchSolution.js class activity... thank you! :-)
        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

        // the Callback function called in START's setInterval() method
        // this function's actions run once every second, as defined by setInterval(count, 1000), below
        function count() {

            // each time COUNT is called by START(), every 1 second, decrement the value of time by 1 (second)
            time--;
            // a variable to stand for the value of TIME, converted into clock time by the timeConverter() function above
            let converted = timeConverter(time);
            // write the new clock time (new second) converted by timeConverter() to the TIMER page DIV
            $("#timer").text(converted);
            // when the value of time reaches 0, then...
            if (time === 0) {
                // stop intervalId (defined in START) by passing it into clearInterval() method as an argument
                clearInterval(intervalId);
                // hide the Quiz questions DIV, and...
                // $('#quiz_box').attr('style', 'display:none;');
                // show the Results page DIV
                // $('#results_box').attr('style', 'display:block;');
                // and run the displayResults function
                displayResults();
                // console.log("Time is up!");
            }
        }

        // define the START function to start the countdown (call below)
        function start() {
            // intervalId defined as setInterval with COUNT callback function and 1 sec interval
            intervalId = setInterval(count, 1000);
        }

        start();

    }


    $('#btn_area').click(function () {

        // hide the Start Button DIV
        $('#btn_area').attr('style', 'display:none;');

        // start the countdown() function
        countdown();
        displayQuestion();

    });



});