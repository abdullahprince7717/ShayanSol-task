const mongoose = require('mongoose');

const connection = async (req, res) => {
    try {
        //URL encoded password is written here!
        await mongoose.connect('mongodb+srv://devabdullahali:Abdull%40h123@todo.squsnog.mongodb.net/').then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.log('Could not connect to MongoDB', error);
        });
    }
    catch (error) {
        console.log('Could not connect to MongoDB', error);

    }
}
connection();