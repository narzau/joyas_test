import { NextResponse } from "next/server";
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const jwt = request.cookies.get('myToken')  

    if (jwt === undefined){
      return NextResponse.redirect(new URL('/paginas/admin/iniciarSesion', request.url))
    }
    try {
      const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode('57962G20'))
      return NextResponse.next()
    } catch (error) {
      console.log(error)
      return NextResponse.redirect(new URL('/paginas/admin/iniciarSesion', request.url))
    } 
  
}

export const config = {
  matcher: ['/paginas/admin/dashboard/:path*']
}