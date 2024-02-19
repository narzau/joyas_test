import { verify } from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { myToken } = req.cookies

  const user = verify(myToken, '57962G20')
  console.log(user)

  return res.json({
    userId: user.userId
  })
}