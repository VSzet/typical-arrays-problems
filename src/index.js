exports.min = function min(array) {
    let value =
        arguments.length == 0 ? 0 : array.length == 0 ? 0 : Math.min(...array);
    return value;
};

exports.max = function max(array) {
    let value =
        arguments.length == 0 ? 0 : array.length == 0 ? 0 : Math.max(...array);
    return value;
};

exports.avg = function avg(array) {
    let value =
        arguments.length == 0
            ? 0
            : array.length == 0
            ? 0
            : array.reduce((acc, curr) => acc + curr, 0) / array.length;
    return value;
};
