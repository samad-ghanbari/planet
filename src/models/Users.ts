import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	age: { type: Number, required: true, min: 18 }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
