import { appendFileSync } from "fs";

/**
 * class Artist that would represnt the Artist fetched from the API
 */
export default class Artist {
  constructor(
    name = "",
    listeners = "",
    mbid = "",
    url = "",
    streamable = "",
    image = []
  ) {
    this.name = name;
    this.listeners = listeners;
    this.mbid = mbid;
    this.url = url;
    this.streamable = streamable;
    this.image = image;
  }

  /**
   * Store artist's data in CSV file
   * @param {*} file
   */
  saveAsCSV(file) {
    const csv = `${this.name},${this.mbid},${
      this.url
    }, ${this.getArtistImageSmall()}\n`;
    // const userSuppliedFileName = (userSuppliedFileName && userSuppliedFileName != "") ? userSuppliedFileName : "./artistData.csv"; //"./artist.csv"
    const userProvidedFileName = file;
    try {
      appendFileSync(userProvidedFileName, csv);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Get the URL of the artist's image small
   * @returns string
   */
  getArtistImageSmall() {
    if (this.image) {
      let image_small = this.image.find((imageObj) => imageObj.size == "small");
      return Object.values(image_small)[0]; // get the first value of the object property
    }
    return "";
  }
}
