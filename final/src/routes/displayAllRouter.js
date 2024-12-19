const express = require('express');
const router = express.Router();
const path = require('path');

const schemaPaths = __dirname.replace("src\\routes", "public\\scripts");
const homeSchema = require(path.join(schemaPaths, '/schema_homePage'));
const imageSchema = require(path.join(schemaPaths, "/schema_images"));
const teamSchema = require(path.join(schemaPaths, "/schema_formulaOneTeam"));
const driverSchema = require(path.join(schemaPaths, "/schema_formulaOneDriver"));
const modelSchema = require(path.join(schemaPaths, "/schema_sportsCarModel"));

router.get('/displayAll', async (req, res) => {
    try {
        const seriesData = await homeSchema.find();
        const imageData = await imageSchema.find();
        const teamData = await teamSchema.find();
        const driverData = await driverSchema.find();
        const sportsCarData = await modelSchema.find();

        const allData = [seriesData, imageData, teamData, driverData, sportsCarData];

        res.render('displayAll', { allData });
    }
    catch (error) {
        console.log("Formula 1 Page Error:", error);
        res.status(500).send("Error Loading Page:", error);
    }
});

module.exports = router;