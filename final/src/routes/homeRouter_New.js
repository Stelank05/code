const express = require('express');
const router = express.Router();
const path = require('path');

const schemaPaths = __dirname.replace("src\\routes", "public\\scripts");

const homeSchema = require(path.join(schemaPaths, '/schema_homePage'));
const imageSchema = require(path.join(schemaPaths, '/schema_images'));

router.get('/home', async (req, res) => {
    try {
        const homePageData = await homeSchema.find();
        const images = await imageSchema.find();

        const passImages = getImages(homePageData, images);

        res.render('homePage', { homePageData, passImages });
    }
    catch (error) {
        console.log("Home Page Error:", error);
        res.status(500).send('Error Loading Page:', error);
    }
});

function getImages(pageData, imageData) {
    imageIDs = [];

    for (var i = 0; i < imageData.length - 1; i++) {
        var swap = false;

        for (var j = 0; j < imageData.length - i - 1; j++)
        {
            if (imageData[j].idCode > imageData[j + 1].idCode) {
                swap = true;

                [imageData[j], imageData[j + 1]] = [imageData[j + 1], imageData[j]];
            }
        }

        if (!swap) {
            break;
        }
    }

    for (var i = 0; i < pageData.length; i++) {
        seriesImages = [];
        
        for (var j = 0; j < pageData[i].images.length; j++) {
            seriesImages.push(getImageID(imageData, pageData[i].images[j], 0, imageData.length));
        }

        imageIDs.push(seriesImages);
    }

    return imageIDs;
};

function getImageID(images, imageID, start, end) {
    if (start > end) {
        return false;
    }

    let midPoint = Math.floor((start + end) / 2);

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

module.exports = router;