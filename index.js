const { spyOn } = require("expect/lib");

function shout(string) {
  return string.toUpperCase();
}

console.log(shout("hello!"));

function whisper(string) {
  return string.toLowerCase();
}

console.log(whisper("HELLO!"));

function logShout(oneMore){
  console.log(oneMore.toUpperCase());
}
function logWhisper(oneMore){
  console.log(oneMore.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
  switch (string){
    case string.toLowerCase():
       return "I can\'t hear you!";
    break;
    case string.toUpperCase():
      return "YES INDEED!";
      break;
      case (string ="Let's have dinner together!"):
        return "I would love to!";
        break;
        default:
          break;
      console.log(sayHiToHeadphonedRoommate);
  }
}