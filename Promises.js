var success;
var info = new Promise(
    function (resolve, reject) {
        if (success === true) {
            var item = {
            	name: 'Earphones',
                brand: 'Skullcandy',
                color: 'Black',
                price: 'Rs 1000'
            };
            resolve(item); // fulfilled
        } else {
            var reason = new Error('Could not fetch data!');
            reject(reason); // reject
        }

    }
);
