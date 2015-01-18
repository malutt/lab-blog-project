$(document).ready(function () {

    $("#raceCalender").html(getCalender(1));
    $('#activeDate').html("<h3>" + moment().format('dddd, DD MMMM, YYYY') + "</h3>");

    $(function () {
        $("#datepicker").datepicker({

            dateFormat: 'DD, d MM, yy',
            onSelect: function (dateText, inst) {

                $('#activeDate').html("<h3>" + dateText + "</h3>");
                $("#raceCalender").html(getCalender(1));

            }
        });

    });

});

/**
  * @desc get all races
  * @param none
  * @return array - array with races
*/
function getRace() {

    var race = [' V5',
        ' V3',
        ' Trio',
        ' Komb',
        ' V&P',
        ' Tvilling',
        ' V4'];

    return race;
}

/**
  * @desc get random races
  * @param nr of races
  * @return array - array with races
*/
function getNrOfRace(nr) {

    var randomRaces = new Array(nr);
    var race = getRace();

    for (var i = 0; i < randomRaces.length; i++) {
        randomRaces[i] = new Array();
        var randomNr = Math.floor((Math.random() * 3) + 2);
        for (var j = 0; j < randomNr; j++) {

            var randomRace = race[Math.floor(Math.random() * race.length)];

            if (randomRaces[i].indexOf(randomRace) == -1) {
                randomRaces[i][j] = randomRace;
            } else {
                j--;
            }
        }
    }

    return randomRaces;
}

/**
  * @desc get all raceTracks
  * @param none
  * @return array - array with race tracks
*/
function getRaceTracks() {

    var racetracks = ['Skive',
        'Vincennes',
        'Harstad',
        'Sydafrika',
        'Romme',
        'Drammen',
        'Axevalla',
        'Mantorp',
        'Solvalla'];

    return racetracks;
}

/**
  * @desc get random raceTracks
  * @param nr of race tracks to get
  * @return array - array with race tracks
*/
function getNrOfRaceTracks(nr) {

    var numbers = new Array();
    var racetracks = getRaceTracks();

    for (var i = 0; i < nr; i++) {

        var randomTrack = racetracks[Math.floor(Math.random() * racetracks.length)];

        if (numbers.indexOf(randomTrack) == -1) {
            numbers[i] = randomTrack;
        } else {
            i--;
        }
    }

    return numbers;
}


/**
  * @desc get the calender
  * @param nr of days
  * @return string - html
*/
function getCalender(days) {
    var output = "";

    for (var i = 0; i < days; i++) {
        var raceTracks = getNrOfRaceTracks(4);
        var race = getNrOfRace(4);

        output += '<table id="' + i + '"><tr><td>11:00</td><td class="raceTrack">' + raceTracks[0] + '</td><td class="race">' + race[0] + '</td></tr>' +
            '<tr><td>13:30</td><td class="raceTrack">' + raceTracks[1] + '</td><td class="race">' + race[1] + '</td></tr>' +
            '<tr><td>15:30</td><td class="raceTrack">' + raceTracks[2] + '</td><td class="race">' + race[2] + '</td></tr>' +
            '<tr><td>17:00</td><td class="raceTrack">' + raceTracks[3] + '</td><td class="race">' + race[3] + '</td></tr></table>';

    }

    return output;
}