const express = require('express');
const router = express.Router();
const path = require('path');

const schemaPaths = __dirname.replace("src\\routes", "public\\scripts");
const homeSchema = require(path.join(schemaPaths, '/schema_homePage'));
const modelSchema = require(path.join(schemaPaths, '/schema_sportsCarModel'));


router.get('/worldEnduranceChampionship', async (req, res) => {
    try {
        let seriesData = await homeSchema.find({ seriesName: "World Endurance Championship" });
        seriesData = seriesData[0];
        const modelData = await modelSchema.find();

        const models = getModels(seriesData.idCode, modelData);

        const homePath = '/home';

        res.render('worldEnduranceChampionship', { seriesData, models, homePath });
    }
    catch (error) {
        console.log("World Endurance Championship Page Error:", error);
        res.status(500).send("Error Loading Page:", error);
    }
});

function getModels(seriesID, modelData) {
    returnModels = [];

    // Order Models

    for (var i = 0; i < modelData.length - i; i++) {
        var swap = false;

        for (var j = 0; j < modelData.length - i - 1; j++) {
            if (modelData[j].idCode > modelData[j + 1].idCode) {
                swap = true;

                [modelData[j], modelData[j + 1]] = [modelData[j + 1], modelData[j]];
            }
        }

        if (!swap) {
            break;
        }
    }

    // Get Models

    for (var model = 0; model < modelData.length; model++) {
        if (modelData[model].series.includes(seriesID)) {
            returnModels.push(modelData[model]);
        }
    }

    return returnModels;
}

module.exports = router;