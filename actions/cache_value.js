const fs = require('fs');

const cache_file = "./actions/cache/value-cache.json"

//param: {payload_name: str, cache_name: str}
module.exports = (payload, param) => {

    let cache_str = fs.readFileSync(cache_file, 'utf8');

    let cache = cache_str ? JSON.parse(cache_str) : {};

    cache[param.cache_name] = payload[param.payload_name];
    fs.writeFileSync(cache_file, JSON.stringify(cache) );
    return payload;
}