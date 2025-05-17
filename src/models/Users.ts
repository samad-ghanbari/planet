import mongoose from 'mongoose';

// Define the nested schemas for roles and networks
const roleSchema = new mongoose.Schema({
	admin: {
		provinces: {
			type: [String] // Array of strings (provinces)
		}
	},
	editor: {
		provinces: {
			type: [String] // Array of strings (provinces)
		},
		areas: {
			type: [String] // Array of strings (areas)
		},
		exchanges: {
			type: [String] // Array of strings (exchanges)
		}
	},
	viewer: {
		provinces: {
			type: [String] // Array of strings (provinces)
		},
		areas: {
			type: [String] // Array of strings (areas)
		},
		exchanges: {
			type: [String] // Array of strings (exchanges)
		}
	}
});

const networkSchema = new mongoose.Schema({
	allow: {
		type: [String] // Array of strings
	},
	deny: {
		type: [String] // Array of strings
	}
});

// Define the main User Schema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true, // Required field
		description: 'نام'
	},
	lastname: {
		type: String,
		required: true, // Required field
		description: 'نام\u200cخانوادگی'
	},
	gender: {
		type: String,
		enum: ['آقا', 'خانم'], // Enum validation for gender
		required: true, // Required field
		description: 'جنسیت'
	},
	province: {
		type: String,
		required: true // Required field
	},
	natid: {
		type: String,
		required: true, // Required field
		description: 'کد\u200cملی'
	},
	password: {
		type: String,
		required: true, // Required field
		description: 'رمز\u200cعبور'
	},
	department: {
		type: String,
		required: true, // Required field
		description: 'دپارتمان'
	},
	position: {
		type: String,
		required: true, // Required field
		description: 'سمت'
	},
	email: {
		type: String,
		required: false, // Optional email field
		match: [/\S+@\S+\.\S+/, 'آدرس پست الکترونیکی معتبر نیست'], // Simple email regex validation
		description: 'آدرس پست\u200cالکترونیکی'
	},
	telephone: {
		type: String,
		required: true, // Required field
		description: 'شماره تماس'
	},
	enabled: {
		type: Boolean,
		required: true, // Required field
		description: 'فعال'
	},
	roles: {
		type: roleSchema, // Nested schema for roles
		required: true, // Required field
		description: 'نقش کاربری'
	},
	networks: {
		type: networkSchema, // Nested schema for networks
		required: true, // Required field
		description: 'دسترسی شبکه'
	},
	last_login: {
		type: String,
		required: false, // Optional field
		description: 'آخرین ورود'
	},
	reset_password: {
		type: Boolean,
		required: true, // Required field
		description: 'بازنشانی رمز\u200cعبور'
	}
});

// Create the User model based on the schema
const Users = mongoose.model('Users', userSchema);

export default Users;
