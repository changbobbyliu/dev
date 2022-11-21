import { nextAuthOptions } from "@/services/next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, unstable_getServerSession } from "next-auth";

type TResData =
	| {
			user: Session["user"] & {
				accessToken: string;
			};
			expires: string; // ISODateString
	  }
	| TResError;

const getCurrentUser = async (req: NextApiRequest, res: NextApiResponse<TResData>) => {
	const session = await unstable_getServerSession(req, res, nextAuthOptions);
	if (!session) {
		return res.status(401).json({ message: "Unauthorized", code: 401 });
	}
	res.json(session as TResData);
};

export default getCurrentUser;
