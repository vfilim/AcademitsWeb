(function () {
    var people = [
        {
            age: 22,
            name: "Alice",
            lastName: "Smith"
        },
        {
            age: 42,
            name: "John",
            lastName: "Jackson"
        },
        {
            age: 36,
            name: "Mary",
            lastName: "Trump"
        },
        {
            age: 33,
            name: "Jack",
            lastName: "Shephard"
        },
        {
            age: 29,
            name: "Ben",
            lastName: "Shapiro"
        },
        {
            age: 17,
            name: "Wolfgang",
            lastName: "Goethe"
        },
        {
            age: 25,
            name: "Eliza",
            lastName: "Bach"
        },
        {
            age: 67,
            name: "John",
            lastName: "Tekkery"
        },
        {
            age: 82,
            name: "Isac",
            lastName: "Shapiro"
        },
        {
            age: 74,
            name: "Kira",
            lastName: "King"
        }
    ];

    var averageAge = _.chain(people)
        .pluck("age")
        .reduce(function (memo, num) {
            return memo + num;
        }, 0)
        .value() / people.length;

    console.log(averageAge);

    var fromAge = 20;
    var toAge = 30;

    var chosenAgePeople = _.chain(people)
        .filter(function (human) {
            return human.age >= fromAge && human.age <= toAge;
        })
        .sortBy("age")
        .value();

    console.log(chosenAgePeople);

    var peopleWithFullNames = _.each(people, function (e) {
        e.fullName = e.lastName + " " + e.name;
    });

    console.log(peopleWithFullNames);
}());