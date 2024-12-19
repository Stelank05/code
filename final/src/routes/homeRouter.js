const {Router} = require('express');
const app = Router();

app.get('/home', (req, res) => {
    res.render('homePage', {
        series: [
        {
            seriesName: "Formula 1",
            seriesDescription: "Top Tier of Single Seater Racing, featuring 10 Teams and 20 Drivers, competing at 24 Circuits in 21 Countries",
            seriesLink: '/formulaOne',
            images: [
                {imageSource: '', altText: ''},
                {imageSource: '', altText: ''},
                {imageSource: '', altText: ''}
            ]
        },
        {
            seriesName: "World Endurance Championship",
            seriesDescription: "Top Flight of Global Sportscar Racing, Featuring the 24 Heures du Mans, LMH + LMDh HyperCars, and the new LMGT3 Class!",
            seriesLink: '/worldEnduranceChampionship',
            images: [
                {imageSource: '/images/worldEnduranceChampionship/2017leMansWinner.png', altText: 'Le Mans 2017 Winning #2 Porsche 919 Hybrid'},
                {imageSource: '/images/worldEnduranceChampionship/wrtSpaRain.png', altText: '#31 Team WRT Oreca driving along the Kemmel Straight in the rain durin the 2022 6 Hours of Spa'},
                {imageSource: '/images/worldEnduranceChampionship/cadillacLeMans.png', altText: '#2 Cadillac Racing Cadillac heading through Tetre Rouge at the 2023 24 Hours of Le Mans'}
            ]
        },
        {
            seriesName: "IMSA WeatherTech Sports Car Championship",
            seriesDescription: "Top Flight of American Sportscar Racing, Featuring the Rolex 24, 12 Hours of Sebring, and Petit Le Mans, featuring the same LMH, LMDh + GT3 Platforms, the IMSA WTSC also Features the LMP2 Class on a Regular Basis, after the class was removed from the WEC due to Grid Size Limits, only appearing at the 24 Heures du Mans.",
            seriesLink: '/weatherTechSportscarChampionship',
            images: [
                {imageSource: '/images/imsaWeatherTechSportscarChampionship/lamborghiniSebring.jpeg', altText: '#63 Iron Lynx Lamborghini SC63 at the 2024 12 Hours of Sebring, the cars Maiden IMSA WeatherTech Sportscar Championship Start'},
                {imageSource: '/images/imsaWeatherTechSportscarChampionship/rexySebring.jpeg', altText: "#77 AO Racing 911 GT3, affectionately known as 'Rexy', competing at the 2024 12 Hours of Sebring."},
                {imageSource: '/images/imsaWeatherTechSportscarChampionship/acuraSebringWin.jpeg', altText: 'The Crew of the #40 DEX Imaging WTR Andretti Acura Crew Celebrating Victory at the 2024 12 Hours of Sebring'}
            ]
        }]
    });
});

module.exports = app;