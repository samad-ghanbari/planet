// api controller
import { dbConnect } from '../lib/mongoose.ts';
import Users from '../models/Users.ts';

import type { Request, Response } from 'express';

export async function getHome(req: Request, res: Response) {
	await dbConnect();
	const user = await Users.find();
	console.log(user);
	res.json(user);
}

export function getAbout(req: Request, res: Response) {
	res.json({ title: 'samad - 01', content: 'ghanbari - 01' });
}
