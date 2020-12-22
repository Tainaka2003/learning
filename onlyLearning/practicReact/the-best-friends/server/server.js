const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const watchesData = require('./getWatchesData');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
    'mongodb+srv://dimos:123@cluster0-qljpi.mongodb.net/MusicShop?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('подключение к БД успешно'));

db.on('error', console.error.bind(console, 'Подключение к БД не удалось:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// get

router.get('/getNewsData', (req, res) => {
    watchesData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/getProductsData', (req, res) => {
    watchesData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/getDevsData', (req, res) => {
    watchesData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// update

router.post('/updateWatchesData', (req, res) => {
    const { _id, update } = req.body;
    watchesData.findByIdAndUpdate(_id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// delete

router.delete('/deleteWatchesData', (req, res) => {
    const { _id } = req.body;
    watchesData.findByIdAndRemove(_id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// put

router.post('/putWatchesData', (req, res) => {
    let data = new watchesData();

    const {
        _id,
        name,
        brand,
        material,
        glass,
        mechanism,
        coating,
        price,
        rating,
        img
    } = req.body;

    if ((!_id && _id !== 0)
        || !name
        || !brand
        || !material
        || !glass
        || !mechanism
        || !coating
        || !price
        || !rating
        || !img) {

        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.name = name;
    data.brand = brand;
    data.material = material;
    data.glass = glass;
    data.mechanism = mechanism;
    data.coating = coating;
    data.price = price;
    data.rating = rating;
    data.img = img;
    data._id = _id;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Прослушивается порт ${API_PORT}`));