$(function() {
    console.log("ready!");

    //declaring variables
    var wins = 0,
        losses = 0,
        randomNumber = Math.floor((Math.random() * 101) + 19),
        crystalOne = Math.floor((Math.random() * 11) + 1),
        crystalTwo = Math.floor((Math.random() * 11) + 1),
        crystalThree = Math.floor((Math.random() * 11) + 1),
        crystalFour = Math.floor((Math.random() * 11) + 1),
        totalScore = 0;

    //checking status of variables
    console.log("crystal one is " + crystalOne);
    console.log("crystal two is " + crystalTwo);
    console.log("crystal three is " + crystalThree);
    console.log("crystal four is " + crystalFour);

    //set initial values
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#number").html(randomNumber);
    $("#total_score").html(totalScore);

    function reset() {
        randomNumber = Math.floor((Math.random() * 101) + 19);
        $("#number").html(randomNumber);
        $("#total_score").html(totalScore);
        console.log("randomNumber is " + randomNumber);
        crystalOne = Math.floor((Math.random() * 11) + 1);
        crystalTwo = Math.floor((Math.random() * 11) + 1);
        crystalThree = Math.floor((Math.random() * 11) + 1);
        crystalFour = Math.floor((Math.random() * 11) + 1);
        console.log("crystal one is " + crystalOne);
        console.log("crystal two is " + crystalTwo);
        console.log("crystal three is " + crystalThree);
        console.log("crystal four is " + crystalFour);
    };

    //update totalScore when crystals are clicked
    $("#crystal_1").on("click", function() {
        totalScore += crystalOne;
        $("#total_score").html(totalScore);
        
        //if totalScore is equal to randomNumber player wins, if it goes above they lose
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#crystal_2").on("click", function() {
        totalScore += crystalTwo;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#crystal_3").on("click", function() {
        totalScore += crystalThree;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });

    $("#crystal_4").on("click", function() {
        totalScore += crystalFour;
        $("#total_score").html(totalScore);
        if (totalScore == randomNumber) {
            wins++;
            totalScore = 0;
            $("#wins").html(wins);
            console.log("wins are " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            totalScore = 0;
            $("#losses").html(losses);
            console.log("losses are " + losses);
            randomNumber = Math.floor((Math.random() * 101) + 19);
            reset();
        }
        else {
            $("#total_score").html(totalScore);
            console.log("totalScore is " + totalScore);
        };
    });    
});