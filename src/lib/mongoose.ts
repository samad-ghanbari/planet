import mongoose from 'mongoose';
import 'dotenv/config';

//JavaScript/TypeScript Modules (CommonJS or ES Modules): When you import a module, the code inside the module is executed once, and the exports are cached for future imports. Any further imports of that module from the same file or any other file do not cause the module to re-run. Instead, the cached values are used.

let isConnected = false;

export async function dbConnect() {
	if (isConnected) return;
	try {
		await mongoose.connect(process.env.MONGODB_URI!); // the ! non-null assertion operator in TypeScript.
		//it bypasses TypeScript's type checking for null or undefined values and assumes that process.env.MONGODB_URI will always have a value.
		isConnected = true;
		console.log('✅ Connected to MongoDB');
	} catch (err) {
		console.error('❌ MongoDB connection error:', err);
		throw err;
	}
}
