(function () {
    function getCitiesCount(country) {
        var count = country.cities.reduce(function (sum) {
            sum++;

            return sum;
        }, 0);

        return count;
    }

    function getMaxCitiesCount(countries) {
        var maxCitiesCount = 0;

        countries.forEach(function (country) {
            if (getCitiesCount(country) > maxCitiesCount) {
                maxCitiesCount = getCitiesCount(country);
            }
        });

        return maxCitiesCount;
    }

    function getMaxCitiesCountCountries(countries) {
        var maxCitiesCount = getMaxCitiesCount(countries);

        var maxCitiesCountCountries = countries.filter(function (country) {
            return getCitiesCount(country) === maxCitiesCount;
        });

        return maxCitiesCountCountries;
    }

    function getCountryWithPopulation(country) {
        var countryWithPopulation = {};

        countryWithPopulation[country.countryName] = country.cities.reduce(function (sum, current) {
            return sum + current.population;
            ;
        }, 0);

        return countryWithPopulation;
    }

    var countries = [
        {
            countryName: "Russia",
            cities: [
                {
                    cityName: "Moscow",
                    population: 12.6
                },
                {
                    cityName: "Saint-Petesburg",
                    population: 5.4
                }
            ]
        },
        {
            countryName: "Germany",
            cities: [
                {
                    cityName: "Berlin",
                    population: 3.6
                },
                {
                    cityName: "Bremen",
                    population: 0.5
                },
                {
                    cityName: "Hamburg",
                    population: 1.8
                }
            ]
        },
        {
            countryName: "Spain",
            cities: [
                {
                    cityName: "Madrid",
                    population: 3.3
                },
                {
                    cityName: "Barcelona",
                    population: 1.7
                }
            ]
        }
    ];

    console.log(getMaxCitiesCountCountries(countries));

    console.log(countries.map(function (country) {
        return getCountryWithPopulation(country);
    }));
})()