import { NextApiHandler } from "next";

const hander: NextApiHandler = async (req, res) => {
	if (req.query.redirect) {
		res.setPreviewData({}).redirect(req.query.redirect as string);
	} else {
		res.clearPreviewData().redirect("/");
	}
};

export default hander;
