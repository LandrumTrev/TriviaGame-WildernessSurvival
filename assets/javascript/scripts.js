// Wilderness Survival Quiz
// advanced timed trivia game assignment
// © Richard Trevillian, 2018-09-06
// University of Richmond, Full Stack Web Development Bootcamp
// JavaScript



// $(document).ready(function () {


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
        answer: "B. Rest in the shade, then retrace your steps to the last available water once the sun goes down. While urine can be 95 percent water and only 5 percent waste, concentrated urine can increase thirst, mess up your electrolytes, and induce vomiting. C is a myth.",
        correct: "B",
        A: "A. Drink any urine you produce.",
        B: "B. Rest in the shade, then retrace your steps to the last available water once the sun goes down.",
        C: "C. Find a creekbed and start digging. You'll find the water table soon.",
        D: "D. Follow a cattle trail; it will always lead to water.",
    },

    {
        question: "You're ready for the first rappel into a technical slot canyon, but the anchors mentioned in the route description aren't there. Is this a problem?",
        answer: "C. Yes. Retrace your route until you find the anchors. Flash floods may have stripped anchors you need, or you might be in the wrong canyon. Either way, a slot canyon is usually a one-way trip, so make sure you can get through before proceeding.",
        correct: "C",
        A: "A. No. Rap on using something else as an anchor, but make sure your cell phone is charged in case anything goes wrong.",
        B: "B. Not really. But first, check your bolt kit to be certain you have enough anchors to pound in wherever you might need them, and find a good spot to establish the start of your own route.",
        C: "C. Yes. Retrace your route until you find the anchors.",
    },

    {
        question: "True or false? Hypothermia can be a risk in temps above 55°F.",
        answer: "A. TRUE, especially if it's raining and windy. Just ask the rangers in the Smokies, who see a surprising number of cases every spring.",
        correct: "A",
        A: "A. TRUE",
        B: "B. FALSE",
    },

    {
        question: "True or false? You can use your analog watch as a compass.",
        answer: "B. FALSE. An analog watch be used to find an approximate north and south during certain times of day, but it can't determine direction with enough accuracy for dependable navigation. (Try an altimeter watch with a digital compass.)",
        correct: "B",
        A: "A. TRUE",
        B: "B. FALSE",
    },

    {
        question: "You're hiking in the Grand Canyon in 95°F temps, and you've been drinking so much water your belly's sloshing. Still, you feel weak and tired. What will help?",
        answer: "A. You're probably getting hyponatremia, an electrolyte imbalance caused by heavy sweating, excessive water consumption, and a lack of food and salt intake. You'll go into seizures and die if it progresses.",
        correct: "A",
        A: "A. Eat a salty snack, take electrolyte tablets, and sip an energy drink.",
        B: "B. Nibble on some candy to keep your energy up.",
        C: "C. Keep drinking—it's tough to stay hydrated in heat this severe.",
        D: "D. Rest in the shade with your feet above your heart.",
    },

    {
        question: "You're scrambling up a steep Colorado Fourteener in June. The moves are fairly easy, but it's snowier than you expected, and you don't have an ice axe or crampons. You should:",
        answer: "D. Retreat via the least snowy, least technical route you can find. It's easier to fall on a descent, even in soft snow, and you have no tools with which to self-arrest.",
        correct: "D",
        A: "A. Keep going for a few pitches to check out the route, then retreat if it seems too tough.",
        B: "B. Go for it. The snow will soften in the sun as the day progresses, making the descent considerably safer.",
        C: "C. Glissade back down.",
        D: "D. Retreat via the least snowy, least technical route you can find.",
    },

    {
        question: "A cottonmouth just sank its fangs into your girlfriend's ankle. After calming her, you should immediately:",
        answer: "D. Keep her lying down and calm, and send for help. Keeping the victim immobile slows the diffusion of venom into the system and minimizes the risk of shock until you can arrange evacuation for antivenom treatment. Snakebites are rarely fatal, but some people suffer serious limb dysfunction afterward.",
        correct: "D",
        A: "A. Tie a tourniquet just below her knee to keep the poison from reaching her heart.",
        B: "B. Make a deep X cut at the site of the bite and start sucking.",
        C: "C. Have her do jumping jacks to work the venom out of her system.",
        D: "D. Keep her lying down and calm, and send for help.",
        E: "E. Attach a suction-cup venom extractor and pump away.",
    },

    {
        question: "You're at the trailhead, and the box for self-registration is empty. You haven't told anyone where you're going or how long you'll be gone. Walk on?",
        answer: "B. Leave a note on your dashboard, or contact the ranger station (especially so they'll know to restock the registration sheets). No ranger to call? Phone a friend instead.",
        correct: "B",
        A: "A. Sure. John Muir never had anyone tracking him.",
        B: "B. Yep, but leave a note on your dashboard with your trip plan and expected return, and pack your cell phone. Or visit or call the nearest ranger station first to report your expected route and return date.",
        C: "C. Yes, with caution. As a veteran hiker, you can count on years of backcountry experience. If you don't get careless, you'll be fine.",
    },

    {
        question: "You just hiked to 11,000 feet. After pitching camp, you developed a pounding headache. What's the cure for this classic case of altitude sickness?",
        answer: "F. (A, B, and C) Dehydration is often a factor in early altitude symptoms, so guzzle away. A sudden drop-off in physical activity can also lead to headaches; a bit of exercise will draw more oxygen into your system. If the ache doesn't abate within an hour or two, the best treatment is a descent of 1,000 to 2,000 feet. You might be able to reascend painlessly the following day, but don't push it. Acute mountain sickness is miserable, and potentially fatal conditions such as cerebral and pulmonary edema have been known to occur at this altitude.",
        correct: "F",
        A: "A. Guzzle a liter of water.",
        B: "B. Do some light exercise around camp to get your respiration and heart rate up.",
        C: "C. Break camp and descend to a lower elevation before sleeping.",
        D: "D. Take 200 mg of ibuprofen.",
        E: "E. A and B",
        F: "F. A, B, and C",
    },

    {
        question: "Assume spinal injury and immobilize an injured patient whenever he or she:",
        answer: "E. And just to be safe, assume the worst if your friend displays any signs of head injury: vision or speaking problems, confusion, bleeding from the ears, motor skills impairment, etc.",
        correct: "E",
        A: "A. Has taken a long tumble",
        B: "B. Feels numbness in extremities",
        C: "C. Feels back or torso pain",
        D: "D. Has been knocked out from a serious blow to the head",
        E: "E. All of the above",
    },

    {
        question: "You suddenly realize you're lost in deep forest. What's the way out of this fix?",
        answer: "C. If that doesn't work, go with A or B, depending on the situation. A is often true but not always; however you will always have water and may be able to fish if you are resourceful.",
        correct: "C",
        A: "A. Follow the closest creek downstream until it meets a river, because rivers always lead to civilization.",
        B: "B. Find shelter, stay warm and dry, and wait for rescue.",
        C: "C. Note your location and surrounding landmarks carefully, then retrace your steps to the last point where you knew you were on route.",
        D: "D. Call 911 for directions on your cell phone.",
    },

    {
        question: "Your youth group just summited Mt. Marcy, and some of the kids are descending faster than others. As leader, should you round them up?",
        answer: "D. Dividing the group into two parties reduces your manpower in the event of an emergency, and letting the group string out along the path increases the risk that someone will make a wrong turn on a side trail. Always keep 'em tight.",
        correct: "D",
        A: "A. Nah, relax and enjoy the hike. The kids might get spread out, but all they have to do is drop back down the same way they came. Besides, you have an adult with a two-way radio sweeping the trail.",
        B: "B. Sort of. Split the adult chaperones to form two distinct hiking groups.",
        C: "C. Yes, by telling the slow kids to cut the switchbacks so they can keep up.",
        D: "D. Yes. Keep everybody together. That's the deal and you told 'em so at the start.",
    },

    {
        question: "The most common avalanche snow condition is:",
        answer: "D. Most avalanches occur during or shortly after storms, in areas where wind drift has created 'pillows' of wind-stiffened snow overlying weak, unconsolidated layers. But instability can last for days, and avalanches can occur in the other conditions too.",
        correct: "D",
        A: "A. Hard-packed snow",
        B: "B. Wet slush",
        C: "C. Old wind crust",
        D: "D. Fresh, wind-drifted snow",
    },

    {
        question: "While crossing a class III pass, you encounter a cliff that requires sketchier rock-climbing moves than you expected. Still, you've been doing this stuff for a decade. What now?",
        answer: "A. Look for a route that avoids the hazard, or turn back. Unroped falls, often solo, are the most common wilderness killers.",
        correct: "A",
        A: "A. Look for a route that avoids the hazard, or turn back.",
        B: "B. Buck up and climb on, Dean. Two minutes, and you'll be in the clear.",
        C: "C. Make a cell call to your spouse and tell her what you're going to try.",
        D: "D. Rig a safety line with tent cord or your bear-bagging rope.",
    },

    {
        question: "What's the most dangerous animal in the wilderness?",
        answer: "C. The one in your mirror. There isn't even a close second.",
        correct: "C",
        A: "A. Grizzly bear",
        B: "B. Rattlesnake",
        C: "C. The one in your mirror",
        D: "D. Wasp",
        E: "E. Wild hog in heat",
        F: "F. Another human",
    },

    {
        question: "You're in the middle of a long desert hike, days from your car. You're stoveless, your water filter broke hours ago, and you're gazing down at a nasty cattle pond. It's decision time. Pick one:",
        answer: "A. Drink up and fill all of your bottles. It's a matter of priorities. Better to get diarrhea and live than skip a skanky pool and die. Use your bandana to filter out the big stuff. The only water in cacti is bound up as an acidic mucus; you'll just barf it back up.",
        correct: "A",
        A: "A. Drink up and fill all of your bottles.",
        B: "B. Chop open a cactus and wring the water from it.",
        C: "C. Suck on some hard candy until you find the next water hole, because the fetid water will surely make you sick.",
        D: "D. Look for birds, which usually nest near potable water.",
    },

    {
        question: "A violent lightning storm is bearing down on your high-meadow campsite. You should immediately:",
        answer: "Leave your tent for a low, sheltered spot away from tall trees, and crouch on your sleeping pad for sure, and D. Have everyone move downhill and separate from one another if there's time. Separating the group reduces the risk that a single strike will knock out the entire group—leaving no one to perform first aid.",
        correct: "C",
        A: "A. Grab your trekking poles and stab them into the dirt to ground yourself.",
        B: "B. Look for a rock overhang to hide under.",
        C: "C. Leave your tent for a low, sheltered spot away from tall trees, and crouch on your sleeping pad.",
        D: "D. Have everyone move downhill and separate from one another.",
    },

    {
        question: "It's broiling out, and your friend just collapsed trailside. He's not sweating, but it's clear from feeling his forehead that his body temperature is well above normal. What's the problem?",
        answer: "C. Heatstroke is an advanced and often fatal combination of heat exhaustion and dehydration. Get him into shade, douse him with water, and fan him if there's no wind. Make him drink liquids—the cooler the better. Arrange for evacuation as soon as possible.",
        correct: "C",
        A: "A. Heat exhaustion",
        B: "B. Dehydration",
        C: "C. Heatstroke",
        D: "D. Hyponatremia",
        E: "E. Exertional rhabdomyolosis",
        F: "F. Nothing (he's faking to buy some break time)",
    },

    {
        question: "Your canoe just swamped in remote Canadian rapids. The water is only chest-deep, but the current is very strong. You need to:",
        answer: "D. Roll onto your back, and float feet-first downstream until you reach calmer water. The 'easy-chair position' lets you push clear of obstacles with your feet. Standing up too soon can cause your foot to snag in the rocks; then the current will push you under and dishrag you until you drown. Avoid strainers at all costs; if you can't avoid one of these downed logs, swim straight at it and aggressively vault your upper body over it.",
        correct: "D",
        A: "A. Stand up and signal for help.",
        B: "B. Use your paddle to self-arrest.",
        C: "C. Swim toward the nearest log stretching across the river.",
        D: "D. Roll onto your back, and float feet-first downstream until you reach calmer water.",
    },

    {
        question: "Blood is pumping from your thumb after your salami knife slipped. Which of these procedures is NOT a recommended geyser-stopper?",
        answer: "C. Applying a tourniquet for serious bleeding is a last resort, and should only be used for life-threatening blood loss, since it might result in amputation of the affected limb due to loss of circulation. If you ever need to apply a tourniquet, try loosening it every 15 minutes to see if clotting has solved the problem.",
        correct: "C",
        A: "A. Apply a bandage.",
        B: "B. Apply direct pressure on the wound.",
        C: "C. Apply a tourniquet.",
        D: "D. Hold your thumb up in the air high above your heart.",
    },

    {
        question: "True or false: Naked spooning is the most effective way to revive a semiconscious hypothermia victim.",
        answer: "B. FALSE. The best treatment is to place the hypothermic person in warm, dry insulation, wrap them in a tarp to reduce heat loss, feed them warm drinks and food, place hot-water bottles around their core, and let them shiver themselves warm.",
        correct: "B",
        A: "A. TRUE",
        B: "B. FALSE",
    },

    {
        question: "The most common cause of wilderness fatality in the mountains is:",
        answer: "E. in the mountains, and F. in lake and river country.",
        correct: "E",
        A: "A. Flash flood",
        B: "B. Avalanche",
        C: "C. Hypothermia",
        D: "D. Bear attack",
        E: "E. Fall",
        F: "F. Drowning",
    },

    {
        question: "The best way not to get lost is:",
        answer: "E. All of the above. Map and compass skills are mandatory for any backpacker; up-to-date info and a plan are always smart. Even if your navigation skills are weak, it can't hurt to look back often, especially at trail intersections, to memorize details for return or retreat.",
        correct: "E",
        A: "A. Carry a map and know how to read it.",
        B: "B. Carry a compass and know how to use it.",
        C: "C. Look behind you at regular intervals, so you'll recognize the terrain on your return.",
        D: "D. Start with a plan and a good route description.",
        E: "E. All of the above",
    },

    {
        question: "A grizzly popped out of the woods just as you turned a corner, but hasn't seen you yet. How can you save your own skin?",
        answer: "C. If it charges and hits you, switch to B. A bear will often knock you around a bit, then lose interest. If playing dead doesn't work—and the bear starts feeding on you—fight back aggressively.",
        correct: "C",
        A: "A. Sprint like Justin Gatlin on 'roids.",
        B: "B. Drop into a tight ball and don't move.",
        C: "C. Stand tall, wave your arms slowly, and talk loudly but calmly so the bear can tell you're a human.",
        D: "D. Drop some food and back up slowly.",
    },

    {
        question: "True or false? The best practice when fording rivers that are more than calf-deep is to keep your sternum strap and hipbelt buckled. If you fall in, you'll need the pack's buoyancy to keep you at the surface until you can swim to safety.",
        answer: "B. FALSE. You need to shed your pack quickly if you get swept downriver. If you don't, your pack will indeed float…on top of you.",
        correct: "B",
        A: "A. TRUE",
        B: "B. FALSE",
    },

    {
        question: "The most common trigger of fatal avalanches is:",
        answer: "E. Humans crossing the slope. At least 90 percent of the time, victims themselves trigger the avalanches that drag them down the mountain.",
        correct: "E",
        A: "A. Shouting",
        B: "B. Gunshots",
        C: "C. Underground tremors",
        D: "D. Aircraft noise",
        E: "E. Humans crossing the slope",
    },

    {
        question: "The safest way to cross a raging, rain-swollen river that's more than hip-deep is:",
        answer: "F. Not at all. Better to hunker down for a rescue, retreat hungry, or wait for low water than to attempt a dangerous whitewater crossing.",
        correct: "F",
        A: "A. Barefoot",
        B: "B. With sandals",
        C: "C. With boots on",
        D: "D. In a wetsuit",
        E: "E. With a life preserver",
        F: "F. Not at all",
    },

    {
        question: "What is the single best way to prevent hypothermia?",
        answer: "E. A, B, and C are all wise, but E is most vital, because moisture conducts cold rapidly. The old adage is true: It's easier to stay warm and dry than to get warm and dry.",
        correct: "E",
        A: "A. Move vigorously.",
        B: "B. Dress in several warm layers.",
        C: "C. Eat hearty snacks every 30 minutes.",
        D: "D. Pound some hot buttered rum.",
        E: "E. Never let yourself get wet, either from snow or sweat.",
    },

    {
        question: "While we're at it, what should you wear to prevent hypothermia?",
        answer: "A. Waterproof/breathable rain suit. All are important, but wind and rain on the body's core are the biggest challenges in three-season conditions.",
        correct: "A",
        A: "A. Waterproof/breathable rain suit",
        B: "B. Warm gloves",
        C: "C. Thick socks",
        D: "D. A warm hat",
        E: "E. A thick parka",
    },

    {
        question: "The most common reason for a backcountry rescue is:",
        answer: "C. Sprained or broken knee or ankle. By a long shot.",
        correct: "C",
        A: "A. Bear mauling",
        B: "B. Avalanche",
        C: "C. Sprained or broken knee or ankle",
        D: "D. Knife or axe wound",
        E: "E. Rockfall",
        F: "F. Altitude sickness",
    },

    {
        question: "You and your partner just climbed to high camp on Kilimanjaro and now he's having difficulty breathing. You listen to his lungs and hear a bubbling, crackling sound when he exhales. He probably has:",
        answer: "C. Pulmonary edema. Descend immediately before he's incapacitated. And even if your diagnosis is wrong, the best first step for all the above is to descend. Pulmonary edema often gets worse at night, and victims can rapidly become immobile, so leave immediately.",
        correct: "C",
        A: "A. A chest cold. He should rest and take aspirin for fever.",
        B: "B. Asthma. He's probably allergic to something nearby.",
        C: "C. Pulmonary edema. Descend immediately before he's incapacitated.",
        D: "D. Pneumonia. Give him antibiotics (you packed them, right?).",
    },

    {
        question: "You're planning a CDT (Continental Divide Trail) thru-hike for next summer, and you want to learn emergency skills. The best approach is to:",
        answer: "B. for beginners, a NOLS, or National Outdoor Leadership School course, and D. Wilderness First Responder and Wilderness EMT courses for veterans. Most experts agree that general outdoor skills and judgment are more important in laying the foundation for survival than first-aid expertise. Once you've mastered the basics, though, it's wise to learn the symptoms and protocols of emergency medicine.",
        correct: "B",
        A: "A. Take an aboriginal-skills survival course to learn about foraging, firecraft, and more.",
        B: "B. Enroll in a monthlong NOLS (National Outdoor Leadership School) course.",
        C: "C. Memorize the answers in this quiz.",
        D: "D. Complete a Wilderness First Responder or Wilderness EMT course.",
    },

    {
        question: "end"
    }

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
let timesup = "TIME'S UP!";
let done = "FINISHED!";

// declare the intervalId variable (will take a callback function and time length as setInterval)
let intervalId;

// declare a global variable for time
let time = 60;





function displayQuestion() {


    // update the values of all the answers from the new question object
    qQuestion = questionArray[qObject].question;
    qAnswer = questionArray[qObject].answer;
    qCorrect = questionArray[qObject].correct;
    qA = questionArray[qObject].A;
    qB = questionArray[qObject].B;
    qC = questionArray[qObject].C;
    qD = questionArray[qObject].D;
    qE = questionArray[qObject].E;
    qF = questionArray[qObject].F;


    // a hack, but couldn't find way to test for no more elements in Array
    // if the value of the Array Objects .question is "end", then show results
    if (qQuestion === "end") {

        // clear out the previous questions buttons
        $('#response').html("<div>");
        $('#question').html("<strong>" + done + "</strong>");
        $('#question').append("<p>Your results:</p>");
        // create a Bootstrap List Group with styling to hold results buttons
        $('#response').attr("class", "list-group list-group-flush col-sm-12 col-lg-6");
        $('#response').append('<button id="right" type="button" class="list-group-item list-group-item-action">Correct: <span>' + rightAnswers + '</button>');
        $('#response').append('<button id="wrong" type="button" class="list-group-item list-group-item-action">Incorrect: <span>' + wrongAnswers + '</button>');
        $('#response').append('<button id="noanswer" type="button" class="list-group-item list-group-item-action">Unanswered: <span>' + unAnswers + '</button>');
        // show the START button again, and change it's text to RETAKE QUIZ?
        $('#btn_area').attr("style", "display:block;");
        $('#btn_area').html("<h1>RETAKE QUIZ?</h1>");
        $('#btn_area').click(function () {
            location.reload();
        });

        console.log("all done!");
        return;

    }

    // reset time to 60 seconds
    time = 60;
    // start the countdown
    countdown();

    // clear out the previous questions buttons
    $('#response').html("<div>");
    // overwrite the #question DIV with new question using .html
    $('#question').html("<strong>" + qQuestion + "</strong>");

    // create a Bootstrap List Group with styling to hold answer buttons
    $('#response').attr("class", "list-group list-group-flush col-sm-12 col-lg-6");

    // create a button for every answer that exists
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
    if (qF) {
        $('#response').append('<button id="F" type="button" class="list-group-item list-group-item-action">' + qF + '</button>');
    };

    // ...and when a user selects an answer by clicking any BUTTON...
    $('button').click(function (btn) {

        if ($(this).attr('id') === qCorrect) {
            // if they pick the right answer...

            $('#question').html("<strong>" + right + "</strong>");
            $('#question').append("<p>" + qAnswer + "</p>");
            $(this).attr('class', 'list-group-item list-group-item-action list-group-item-success');
            $('button').prop("disabled", true);
            rightAnswers = rightAnswers + 1;
            qObject = qObject + 1;
            clearInterval(intervalId);
            setTimeout(displayQuestion, 1000 * 3);

        } else {
            // or if they pick the wrong answer...

            $('#question').html("<strong>" + wrong + "</strong>");
            $('#question').append("<p>" + qAnswer + "</p>");
            $(this).attr('class', 'list-group-item list-group-item-action list-group-item-danger');
            $('button').prop("disabled", true);
            wrongAnswers = wrongAnswers + 1;
            qObject = qObject + 1;
            clearInterval(intervalId);
            setTimeout(displayQuestion, 1000 * 3);

        };
    });



}



function countdown() {

    // set time to 60 seconds
    time = 60;

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
        // console.log(time);
        // a variable to stand for the value of TIME, converted into clock time by the timeConverter() function above
        let converted = timeConverter(time);
        // write the new clock time (new second) converted by timeConverter() to the TIMER page DIV
        $("#timer").text(converted);
        // when the value of time reaches 0, then...
        if (time === 0) {
            // if time runs out without user clicking a button
            $('#question').html("<strong>" + timesup + "</strong>");
            $('#question').append("<p>" + qAnswer + "</p>");
            $('button').prop("disabled", true);
            unAnswers = unAnswers + 1;
            qObject = qObject + 1;
            clearInterval(intervalId);
            setTimeout(displayQuestion, 1000 * 10);
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

    displayQuestion();

});



// });