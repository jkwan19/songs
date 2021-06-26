const songsReducer = () => {
  return [
    { title: 'No Scrubs', Duration: '4:05' },
    { title: 'All Star', Duration: '3:15' },
    { title: 'Bad and Boujee', Duration: '4:00' },
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return selectedSong;
}