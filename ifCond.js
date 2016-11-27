module.exports = function(v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '===':
            return (v1 === v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '!=':
            return (v1 != v2) ? options.fn(this, options.data) : options.inverse(this, options.data), options.data;
        case '!==':
            return (v1 !== v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '<':
            return (v1 < v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '<=':
            return (v1 <= v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '>':
            return (v1 > v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '>=':
            return (v1 >= v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '&&':
            return (v1 && v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        case '||':
            return (v1 || v2) ? options.fn(this, options.data) : options.inverse(this, options.data);
        default:
            return options.inverse(this, options.data);
    }


}