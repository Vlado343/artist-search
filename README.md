# artist-search

### General Info
***
This project is about retrieving artists information from an external API endpoint(last.fm API, artist.search endpoint) and writing the data into a CSV file. After searching for an artist name (via the command line), and getting the response from the API, a CSV file at the same structure level will be created. The file will contain the required information (name, mbid, url, image_small) about all artists with the given name. If the artist's name was not found, the CSV file will be populated with random artists' names (ONLY) from library.getArtists endpoint.

### Prerequisities
***
In order to get the project working, you should install the NodeJS runtime environment.
In order to obtain an API key for the last.FM API, account creation is required. Please find more information in the following link: https://www.last.fm/api#getting-started.
Note: Within the application, an API Key associated with my account is provided. 

### Installation and running the project
***
To install the project locally, first open a terminal window and clone the project:
```
git clone https://github.com/Vlado343/artist-search.git
```
***
Once the project has been cloned, navigate into the folder:
```
cd artist-search
```
***
 Run the following command to install all the dependencies within the project
```
npm install
```

***
To run the application and retrieve artists from the artist.search/library.getArtists endpoint run the following command: 

node index.js <author-name> <CSV-file-name> 

***
- author-name - the name of the artist. It can be given name like 'cher' which exists in the list or a random name like 'wewe3fr'
- CSV-file-name  - name of the csv file---> where the output data should be stored. The name can be provided with/without a .csv extension. In case you do not provide a file name, the output data would be stored in the default file name called "artistData.csv".

Here are some examples of how you can run the application:
```
node index.js cher myFile.csv 
```
***
The previous command will create myFile.csv and will write all artists that contain the name 'cher'.

```
node index.js wewe3fr myFile.csv
```
***
If you run the command with a non-existing name in the list (like the example above) it will retrieve random artists' names from library.getArtists endpoint.


```
node index.js wewe3fr 
```
If no file name is provided ( meaning there is only one argument -artist name), then a CSV file with the default file name would be generated. The default name of the CSV file, provided in the application is "artistData.csv".


 



