$(document).ready(function () {
    $("#quiz").submit(function (event) {
        event.preventDefault();

        var $inputs = $('#quiz input[type=\'radio\']:checked');

        let correctAnswers = 0

        $inputs.each(function () {
            // if the value is true, they chose the correct answer
            let answer = $(this).val();
            if (answer === "true") {
                correctAnswers = correctAnswers + 1
            }



        })

        console.log(`you have this many correct: ${correctAnswers}`)
    });
});

