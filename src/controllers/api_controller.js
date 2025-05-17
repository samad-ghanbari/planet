// api controller
import { dbConnection } from './../lib/mongoose.ts';
//import { dbConnection } from "../db/db.js";
//import { Request, Response } from "express";

export async function getHome(req, res) {
	await dbConnection();

	res.json({ name: 'samad', lastname: 'ghanbari' });
}

export function getAbout(req, res) {
	res.json({ title: 'samad - 01', content: 'ghanbari - 01' });
}
