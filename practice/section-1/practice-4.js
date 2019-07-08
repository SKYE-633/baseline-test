'use strict';

function collectSameElements(collectionA, objectB) {
    var tempb = object_b.value.toString().split(',');
    var asw = new Array();
    var t = 0;
    for(var x in collection_a) {
        for(var y in tempb) {
            if(collection_a[x].key == tempb[y]) {
                asw[t] = collection_a[x].key;
                t++
            }
        }
    }
    return '实现练习要求，并改写该行代码。';
}
 
