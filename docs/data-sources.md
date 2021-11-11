# Data sources

## Weather data

Meteo-Parapente runs it's own [NWP](https://en.wikipedia.org/wiki/Numerical_weather_prediction) model, which have been specifically tuned for soaring.

The resolution is approximately 2.5km for the central zone and 7.5km for the dashed outer zone.

The model runs on a [HPC supercomputer](https://en.wikipedia.org/wiki/Supercomputer), just like the ones you find at NASA. (ours is slightly smaller 😉 but we still have a huge electricity bill)

The core of the model is based on a modified version of the [WRF-ARW](https://en.wikipedia.org/wiki/Weather_Research_and_Forecasting_Model) and custom software that have been freely inspired from [DrJack's RASP Blipmaps](http://www.drjack.info/RASP/).

The initial and boundary conditions (=input data) comes from the [GFS](http://www.emc.ncep.noaa.gov/index.php?branch=GFS) coupled to a lot of others datasets (NOAA, NASA, USGS, Copernicus, DWD, Météo-France...).

## Geography

The geographical data comes from [OpenStreetMap](https://en.wikipedia.org/wiki/Numerical_weather_prediction)

## Airspace

The airspace map is provided by [openAIP - Worldwide aviation database](https://www.openaip.net/)