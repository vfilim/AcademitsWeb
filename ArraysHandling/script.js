(function () {
    function getRandomNumbersArray(count, maxLimit) {
        var array = [];

        for (var i = 0; i < count; i++) {
            array.push(Math.round(Math.random() * maxLimit));
        }

        return array;
    }

    function sortDesc(array) {
        array.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getLastFiveElements(array) {
        return array.slice(array.length - 5);
    }

    function getEvenNumbers(array) {
        return array.filter(function (x) {
            return x % 2 === 0;
        });
    }

    function getEvenNumbersSum(array) {
        var evenNumbersArray = getEvenNumbers(array)

        return evenNumbersArray.reduce(function (sum, current) {
            return sum + current;
        }, 0);
    }

    function getFirstHundredNumbersArray() {
        var numbersRange = [];

        for (var i = 1; i <= 100; i++) {
            numbersRange.push(i);
        }

        return numbersRange;
    }

    function getEvenNumbersSquares(array) {
        return getEvenNumbers(array).map(function (x) {
            return Math.pow(x, 2);
        });
    }

    var targetArray = getRandomNumbersArray(100, 1000);

    console.log(targetArray);

    sortDesc(targetArray);
    console.log(targetArray);

    console.log(getFirstFiveElements(targetArray));
    console.log(getLastFiveElements(targetArray));

    console.log(getEvenNumbersSum(targetArray));

    var firstHundredNumbers = getFirstHundredNumbersArray();

    console.log(firstHundredNumbers);
    console.log(getEvenNumbersSquares(firstHundredNumbers));
})();