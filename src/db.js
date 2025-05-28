import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/merndb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>> DB is connected");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};


