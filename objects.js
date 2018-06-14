var playlist={queen:'sing to me'}

function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({},{artistName:[songTitle]})
  playlist.artistName=songTitle
  return playlist
}