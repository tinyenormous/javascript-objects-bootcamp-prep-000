var playlist={queen:'sing to me'}

function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({},{artistName:[songTitle]})
  var newObject = {[songTitle]:[artistName]}
  newObject
  // playlist.[songTitle]=[artistName]
  return Object.assign(playlist,newObject)
}