# Earthquake Visualization
## Introduction<br>
This project aims to visualize earthquake data using Leaflet. The dataset is obtained from the United States Geological Survey (USGS) GeoJSON feed, updated every 5 minutes.

Getting the Dataset
Visit the USGS GeoJSON Feed page to access earthquake data in various formats. Choose a dataset that you want to visualize.

## Visualization Steps
Follow these steps to import and visualize the earthquake data using Leaflet:

### Step 1: Create a Map
Use Leaflet to create a map that plots all the earthquakes based on their longitude and latitude.

### Step 2: Customize Data Markers
Make the data markers reflect the earthquake magnitude by adjusting their size and the earthquake depth by changing their color. Larger markers should represent higher magnitudes, and darker colors should represent greater depths. The depth information is found as the third coordinate for each earthquake.

### Step 3: Add Popups
Include popups that display additional information about each earthquake when the associated marker is clicked. This information may include the earthquake's magnitude, location, or any other relevant details.

### Step 4: Create a Legend
Develop a legend that provides context for the map data. The legend should illustrate the relationship between marker size/color and earthquake magnitude/depth. Consider using a gradient or distinct categories to represent different ranges.
