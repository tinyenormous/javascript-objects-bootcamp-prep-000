var playlist={queen:'sing to me'}

function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({},{artistName:[songTitle]})
  var newObject = {[artistName]:[songTitle]}
  console.log(newObject)
  // playlist.[songTitle]=[artistName]
  return Object.assign(playlist,newObject)
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return 
}