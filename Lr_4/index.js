function query(collection) {
    let result = [...collection];
    
    const operators = [].slice.call(arguments, 1);

    const executionOrder = ['filterIn', 'select'];
    operators.sort((a, b) => {
        return executionOrder.indexOf(a.name) - executionOrder.indexOf(b.name);
    });

    operators.forEach(operator => {
        result = operator(result);
    });

    return result;
}

function select() {
    const selectedFields = [].slice.call(arguments);

    return function select(collection) {
        return collection.map(item => {
            const newItem = {};
            selectedFields.forEach(field => {
                if (item.hasOwnProperty(field)) {
                    newItem[field] = item[field];
                }
            });
            return newItem;
        });
    };
}

function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.filter(item => {
            return values.includes(item[property]);
        });
    };
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};