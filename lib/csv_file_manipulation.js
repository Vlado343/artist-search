import { writeFile, appendFileSync } from "fs";
const fileName = process.argv[3]; // get the file name as fourth argument from the command line

/**
 * Function that gets the name (fourth argument in the command line) and create a csv
 * file with the given name. It also checks whether there is an extension provided by the user. If not, then
 * the function makes sure to create a csv file.
 * If no name is provided, creates a file with a default name artistData.csv
 *
 * @returns string
 */
export const getUserSuppliedFileName = function userSuppliedFileName() {
  // const csvFileName = (fileName && fileName != "") ? fileName : "./artistData.csv";
  const csvFileName =
    fileName && fileName != "" && fileName.toLowerCase().endsWith(".csv")
      ? fileName
      : fileName
      ? fileName.concat(".csv")
      : "./artistData.csv";
  return csvFileName;
};

/**
 * Function that creates the csv file with a user-supplied name
 * @returns
 */
export default function createFileToWriteData() {
  let csvFile = getUserSuppliedFileName();
  return writeFile(csvFile, ``, (err) => {
    if (err) throw err;
  });
}

/**
 * Function that get the list of entries and randomly gets an entry, stores it in the CSV file and removes it from the list
 * (until list of entries is empty)
 * @param {*} listOfEntries
 */
export const randomlyAppendEntriesOneByOne =
  function randomlyAppendEntriesOneByOne(listOfEntries) {
    let suppliedFileName = getUserSuppliedFileName();
    while (listOfEntries.length) {
      let randomEntryIndex = Math.floor(Math.random() * listOfEntries.length);
      appendFileSync(suppliedFileName, `${listOfEntries[randomEntryIndex]},`); // write the entry in the csv file
      listOfEntries.splice(randomEntryIndex, 1); // remove the entry from an array
    }
  };
