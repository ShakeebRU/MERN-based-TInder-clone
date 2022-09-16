import mongoose from 'mongoose';

const cardsScheama = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model('cards',cardsScheama);