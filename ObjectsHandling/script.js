(function () {
    function getMaxCitiesCountCountries(countries) {
        var maxCitiesCount = countries.reduce(function (maxCitiesCount, country) {
            return Math.max(country.cities.length, maxCitiesCount);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function getCountriesWithPopulation(countries) {
        var countriesWithPopulation = {};

        countries.forEach(function (country) {
            countriesWithPopulation[country.name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        });

        return countriesWithPopulation;
    }

    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12.6
                },
                {
                    name: "Saint-Petesburg",
                    population: 5.4
                }
            ]
        },
        {
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3.6
                },
                {
                    name: "Bremen",
                    population: 0.5
                },
                {
                    name: "Hamburg",
                    population: 1.8
                }
            ]
        },
        {
            name: "Spain",
            cities: [
                {
                    name: "Madrid",
                    population: 3.3
                },
                {
                    name: "Barcelona",
                    population: 1.7
                }
            ]
        }
    ];

    console.log(getMaxCitiesCountCountries(countries));

    console.log(getCountriesWithPopulation(countries));
})();