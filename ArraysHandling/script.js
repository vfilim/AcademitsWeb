(function () {
    function getRandomNumbersArray(count, maxLimit) {
        var array = [];

        for (var i = 0; i < count; i++) {
            array.push(Math.round(Math.random() * maxLimit));
        }

        return array;
    }

    function getEvenNumbersSquares(array) {
        var evenNumbersSquares = numbersRange.filter(function (x) {
            return x % 2 == 0;
        }).map(function (x) {
            return x ** 2;
        })

        return evenNumbersSquares;
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
        var newArray = array.filter(function (x) {
            return x % 2 == 0;
        });

        return newArray;
    }

    function getEvenNumbersSum(array) {
        var evenNumbersArray = getEvenNumbers(array)

        var sum = evenNumbersArray.reduce(function (sum, current) {
            return sum + current;
        }, 0)

        return sum;
    }

    function getFirstHundredNumbersArray() {
        var numbersRange = [];

        for (var i = 1; i < 100; i++) {
            numbersRange.push(i);
        }

        return numbersRange;
    }

    function getEvenNumbersSquares(array) {
        var evenNumbersSquares = getEvenNumbers(array).map(function (x) {
            return x ** 2;
        })

        return evenNumbersSquares;
    }

    var targetArray = getRandomNumbersArray(100, 1000);

    console.log(targetArray);

    sortDesc(targetArray);
    console.log(targetArray);

    console.log(getFirstFiveElements(targetArray));
    console.log(getLastFiveElements(targetArray));

    console.log(getEvenNumbersSum(targetArray));

    console.log(getEvenNumbersSquares(targetArray));
})();