

const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://ishankrajpal:qwerty123456@gocluster.exjlq1p.mongodb.net/';
const mongoURL = "mongodb+srv://ishankrajpal:qwerty123456@gocluster.exjlq1p.mongodb.net/goFood?retryWrites=true&w=majority";



const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        //const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("food_Category").find({}).toArray();

        // fetched_data.find({}).toArray(async function(err,data){
        //   const foodCategory= await mongoose.connection.db.collection("food_Category");
        //           foodCategory.find({}).toArray(function(err,catData){
                  
                    
        //             global.food_items=data;
        //             global.foodCategory=catData;
        //           }) 
        // })
       // global.food_items=data;
         // console.log(global.food_items);
        // console.log(data);
        global.food_items = fetched_data;
    global.foodCategory = foodCategory;

    console.log('Data fetched:', fetched_data);
    console.log('Food categories fetched:', foodCategory);
      } catch (err) {
        console.error('Error connecting to MongoDB:', err);
      }
};

module.exports = connectToMongoDB;
