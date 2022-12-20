const artistName = process.argv[2]; // get the artist name as a third argument from the command line
const apiKey = "c2d1c593a2096fa6a5242a8c38a431d5"; // this is an API Key bound to my account. In ideal case it should be stored and fetch from secrets
/**
 * Function that constructs the search_by_artist_name API endpoint, considering the
 * author name provided as command line argument
 * @returns string
 */
export default function searchByArtistName() {
  return encodeURI(
    "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" +
      `${artistName}` +
      "&api_key=" +
      `${apiKey}` +
      "&format=json"
  );
}

/**
 * Function that returns the search Library API endpoint
 * @returns string
 */
export const searchLibrary = function searchLibrary() {
  return (
    "http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=" +
    `${apiKey}` +
    "&user=joanofarctan&format=json"
  );
};
