import mongoose from 'mongoose';
import 'dotenv/config';

// Prevent multiple connections in dev (because of hot reload)
let isConnected = false;

export async function dbConnect() {
	if (isConnected) return;

	try {
		await mongoose.connect(process.env.MONGODB_URI!);
		isConnected = true;
		console.log('✅ Connected to MongoDB');
	} catch (err) {
		console.error('❌ MongoDB connection error:', err);
		throw err;
	}
}
