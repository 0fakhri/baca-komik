function print_arrow_key(keyCodeNumber) {
    // console.log(keyCodeNumber);
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;
    switch (keyCodeNumber) {
    case LEFT:
        alert('flag{arrow kanan untuk ke halaman admin :) }')
        break;
    case UP:
        break;
    case RIGHT:
    alert('_________*****warning*****_________ \n _________hacker detected_________ \nanda akan masuk ke halaman admin!!!')
      window.location.href = "index-masuk.html";
        break;
    case DOWN:
        break;
    default:
        alert('flag{arrow kanan untuk ke halaman admin :) }')
        break;
    }
}

function checkKeycode(event) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

    print_arrow_key(keycode);
    return false;
}
document.onkeydown = checkKeycode;
