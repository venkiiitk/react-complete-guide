class Util {

    removeElement = (objectsList, personIndex) => {
        return objectsList.splice(personIndex, 1);
    };

    // Deep copy of object
    spreadArray = (spreadObject) => {
        return [...spreadObject];
    };
    //Deep copy of object
    sliceArray = (sliceObject) => {
        return sliceObject.slice();
    };
}


export default Util;