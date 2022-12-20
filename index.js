/**
 * Import dependancies
 */
import fetch from "node-fetch";
import searchByArtistName, { searchLibrary } from "./lib/api_endpoints.js";
import createFileToWriteData, {
  getUserSuppliedFileName,
  randomlyAppendEntriesOneByOne,
} from "./lib/csv_file_manipulation.js";
import Artist from "./lib/artist_data.js";

/**
 * Create consts
 */
const searchArtistEndpoint = searchByArtistName();
const searchLibraryEndpoint = searchLibrary();
const csvFile = getUserSuppliedFileName();

/**
 * Get the data from the search artist API and process the data if the artists exist
 * If the artists does not exist call library artist API. Get the names of all artist
 * and store ONLY the names of the artist in CSV. The artist name should be randomly taken and
 * stored in the CSV.
 * NOTE: When working with the API, only the default values are considered (for example default
 * number of returned artist, etc.)
 */
fetch(searchArtistEndpoint)
  .then((response) => response.json())
  .then((data) => {
    const artistList = data.results.artistmatches.artist
      ? data.results.artistmatches.artist
      : []; // check if it exists and assign the value otherwise empty
    return artistList.length > 0
      ? data
      : fetch(searchLibraryEndpoint).then((response) => response.json());
  })
  .then((dataResponse) => {
    createFileToWriteData();
    // if the response is from the search artist API call
    if (dataResponse.results) {
      const artistsBasedOnName = dataResponse.results.artistmatches.artist;
      artistsBasedOnName.forEach((artist) => {
        let artistEntry = new Artist();
        Object.assign(artistEntry, artist); // copy over the properties from the API response to the Artist object
        // console.log(artistEntry);
        artistEntry.saveAsCSV(csvFile);
      });
    }
    // if the response is from the library api calls get random artist names
    else {
      const artistsFromLibrary = dataResponse.artists.artist;
      const artistNameList = artistsFromLibrary.map(
        (artistName) => artistName.name
      );
      randomlyAppendEntriesOneByOne(artistNameList);
    }
  })
  .catch((err) => console.log(err));
