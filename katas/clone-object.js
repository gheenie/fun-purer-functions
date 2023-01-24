function cloneObject(sourceObj, targetObj) {
    Object.keys(targetObj).forEach(key => delete targetObj[key]);

    for ( const [key, value] of Object.entries(sourceObj) ) {
        targetObj[key] = value;
    }
    
    return targetObj;
}

module.exports = cloneObject;
