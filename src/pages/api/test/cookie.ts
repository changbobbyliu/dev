import { nextAuthOptions } from "@/services/next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";

const setCookie = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await unstable_getServerSession(req, res, nextAuthOptions);
	res.json({ message: "ok", cookies: req.cookies, session });
};

export default setCookie;
