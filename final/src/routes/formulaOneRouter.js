const express = require('express');
const router = express.Router();
const path = require('path');

const schemaPaths = __dirname.replace("src\\routes", "public\\scripts");
const homeSchema = require(path.join(schemaPaths, '/schema_homePage'));
const teamSchema = require(path.join(schemaPaths, "/schema_formulaOneTeam"));
const driverSchema = require(path.join(schemaPaths, "/schema_formulaOneDriver"));

router.get('/formulaOne', async (req, res) => {
    try {
        let seriesData = await homeSchema.find({ seriesName: "Formula 1" });
        const teamData = await teamSchema.find();
        const driverData = await driverSchema.find();

        const driverList = getDrivers(teamData, driverData);

        const homePath = '/home';

        seriesData = seriesData[0];

        res.render('formulaOne', { seriesData, teamData, driverList, homePath});
    }
    catch (error) {
        console.log("Formula 1 Page Error:", error);
        res.status(500).send("Error Loading Page:", error);
    }
});

function getDrivers(teamData, driverData)
{
    drivers = []

    // Sort Driver ID Codes

    for (var i = 0; i < driverData.length - 1; i++) {
        var swap = false;

        for (var j = 0; j < driverData.length - i - 1; j++) {
            if (driverData[j] > driverData[j + 1]) {
                swap = true;

                [driverData[j], driverData[j + 1]] = [driverData[j + 1], driverData[j]];
            }
        }

        if (!swap) {
            break;
        }
    }

    // Iterate Through Each Team
       // Get Each Driver for the Team, add to list

    for (var i = 0; i < teamData.length; i++)
    {
        teamDrivers = [];

        for (var j = 0; j < teamData[i].drivers.length; j++) {
            teamDrivers.push(getDriver(driverData, teamData[i].drivers[j], 0, driverData.length));
        }

        drivers.push(teamDrivers);
    }

    return drivers;
}

let getDriver = function (drivers, driverID, start, end) {
    if (start > end) {
        return false;
    }

    let midPoint = Math.floor((start + end) / 2);

    if (drivers[midPoint].idCode == driverID) {
        return drivers[midPoint];
    }

    if (drivers[midPoint].idCode > driverID) {
        return getDriver(drivers, driverID, start, midPoint - 1);
    }

    else {
        return getDriver(drivers, driverID, midPoint + 1, end);
    }
}

module.exports = router;