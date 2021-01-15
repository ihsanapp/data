const fs = require("fs");

const countriesRawData = require("./raw_data/countries.json");
const statesRawData = require("./raw_data/states.json");
const baseData = require("./raw_data/base.json");

const processedCountriesData = countriesRawData.map((e) => {
  return {
    name: e.emoji + " " + e.name,
    data: e.code,
  };
});

const processedStatesData = statesRawData.map((e) => {
  return {
    name: e.name,
    data: e.abbreviation,
  };
});

const staticData = {
  base: baseData,
  countries: processedCountriesData,
  states: processedStatesData,
};

fs.writeFileSync("data.json", JSON.stringify(staticData));
