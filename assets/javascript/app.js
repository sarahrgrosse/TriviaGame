$(document).ready(function () {

    // var questions = [{q:"is 1 greater than 0", c: true},{ q: "is 2 smaller than 1?", c: f}]


    // for(var i =0; i< questions.length; i++){
    //     $('<h1>').text(questions[i].q);
    // }

    var timer = 30;
    var interval = setInterval(function () {
        timer--;
        $('#timer').text(timer)
        subtmitAnswer();
        if (timer === 0) {
            clearInterval(interval)
        }
    }, 1000)


    function subtmitAnswer () {
        $("#quiz").submit(function (event) {
            event.preventDefault();

            var $inputs = $('#quiz input[type=\'radio\']:checked');

            let correctAnswers = 0
            //cookies.length = 4
            //Array  index        0         1          2          3     
            var cookies = ["cookie1", "cookie2", "cookie3", "cookie4"];
            // console.log('Prince has eaten ' + cookies[0])
            // console.log('Prince has eaten ' + cookies[1])
            // console.log('Prince has eaten ' + cookies[2])
            // console.log('Prince has eaten ' + cookies[3])

            for (var i = 0; i < cookies.length; i++) {
                console.log('Prince has eaten ' + cookies[i]);
                //i=0
                //i=1
                //i=2
                //i=3
            }




            //for each 
            //for loop
            //for each 
            $inputs.each(function () {
                // if the value is true, they chose the correct answer
                let answer = $(this).val();
                if (answer === "true") {
                    correctAnswers++;
                }
            })

            clearInterval(interval)
            $('#result').text(
                `you have this many correct: ${correctAnswers}`

            )
            // console.log(`you have this many correct: ${correctAnswers}`)
        });
    }
});





// function stopTimer(){
//     clearInterval(interval)
// }