// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
    let check = document.getElementById('opponent');
    let type = document.querySelector('input[name="game"]:checked').id;
    // let radiorps = document.getElementsByClassName('rps');
    // let radiorpsls = document.getElementsByClassName('rpsls');

    // if (check.checked == true) {
    //     $('.shots').show()
    // } else {
    //     $('.shots').hide()
    // }
    if (check.checked && type === 'rpsls') {
        $('.shots').show();
        $('.rpsls').show();
      } else if (check.checked && type === 'rps') {
        $('.shots.rps').show();
        $('.rpsls').hide();
      } else {
        $('.shots').hide();
      }
}

function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {

    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();

    let baseurl = window.location.href + 'app/'
    console.log(baseurl)

    let url = baseurl + game + '/play/' + shot
    console.log(url)

    let response = await fetch(url)
    let result = await response.json()
    console.log(result)
}