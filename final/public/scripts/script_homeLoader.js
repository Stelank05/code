const mongoose = require('mongoose');
const Home = require('/schema_homePage');
const Image = require('/schema_images');

mongoose.connect(process.env.MONGO_URI)
    .then(async() => {
        console.log("Home Loader Connected to Mongo DB");

        const testData = [
            {idCode: '2017LeMansWinner', imageSource: '/images/worldEnduranceChampionship/2017leMansWinner.png', altText: '2017 Le Mans Winning #2 Porsche 919 Hybrid'}
        ];

        await Image.deleteMany();

        const result = await Image.insertMany(testData);
        console.log('Items Added:', result);

        mongoose.connection.close();
    })
    .catch(err => console.log("Home Loader Connection Error:", err));