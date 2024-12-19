const express = require('express');

let getImageID = function (images, imageID, start, end) {
    if (start > end) {
        return false;
    }

    console.log(start, end);

    let midPoint = Math.floor((start + end) / 2);

    console.log(midPoint);

    if (images[midPoint].idCode == imageID) {
        return images[midPoint];
    }

    if (images[midPoint].idCode > imageID) {
        return getImageID(images, imageID, start, midPoint - 1);
    }

    else {
        return getImageID(images, imageID, midPoint + 1, end);
    }
}

// Binary Search Derived From: https://www.geeksforgeeks.org/binary-search-in-javascript/

module.exports = getImageID;