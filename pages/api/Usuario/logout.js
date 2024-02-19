import { serialize } from "cookie";
import { verify } from "jsonwebtoken"

export default function logoutHandler(req, res) {
  const {myToken} = req.cookies;

  if (!myToken) {
    return res.status(401).json({error: 'no token'})
  }

  try {
    verify(myToken, '57962G20')
    const serialized = serialize('myToken', null, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0 ,
      path: '/'}); 
      res.setHeader('Set-Cookie', serialized)
      res.status(200).json('logout Succesfully')
  } catch (error) {
    return res.status(401).json({error: 'invalid Token'})
  }
}