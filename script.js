function saxeli() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        byeSpeaker(names[i]);
        console.log("a");
    }
    else {
        shelloSpeaker(names[i]);
        console.log("b");
    }
  }
}
saxeli();
console.log(window)