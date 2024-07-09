// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, password } = req.body;

  await dbConnect();

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.status(200).json({ message: "Login successful", user });
}
