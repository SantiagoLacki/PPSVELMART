import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String,
      required: true 
    },
    isVerified: { 
      type: Boolean, 
      default: false 
    },
    verificationToken: { 
      type: String, 
      default: null 
    },
});






// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: 'string',
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: 'string',
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     password: {
//       type: 'string',
//       required: true,
//     },
//     isVerified: {
//       type: Boolean,
//       default: false, // Nuevo campo para verificar si el usuario confirmó su email
//     },
//     verificationToken: {
//       type: String, // Token para verificar la cuenta
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

export default mongoose.model('User', userSchema);
