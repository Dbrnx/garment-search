const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

let Garment = new Schema({
        product_categories_mapped: [
            {
            type: Number
            }
        ],
        product_id: String,
        url: String,
        gender: String,
        brand: String,
        product_description: String,
        image_urls: [
            {
                type: String
            }
        ],
        product_imgs_src: [
            {
                type: String
            }
        ],
        source: String,
        product_categories: [
            {
                type: String
            }
        ],
        images: [
            {
                url: String,
                path: String,
                checksum: String
            }
        ],
        price: String,
        product_title: String
    },
    {
        collection : 'garments'
    });
Garment.plugin(mongoosePaginate);

module.exports = mongoose.model('Garment', Garment);