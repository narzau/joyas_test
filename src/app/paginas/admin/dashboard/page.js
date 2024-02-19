'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import BtnDash from "@/app/Components/adminComponents/BtnDash";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState(
    {
      userId: ''
    }
  )
  const router = useRouter();

  const handleProfile = async () => {
    const res = await fetch('/api/Usuario/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    setUser(data);
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/Usuario/logout' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      router.push('/paginas/admin/iniciarSesion');
    } catch (error) {
      console.log(error)
      router.push('/paginas/admin/iniciarSesion');
    }  
  }

  return(
    <main className="p-5 w-screen h-screen bg-[#FFBEE3]">
      <h1 className="p-9 text-black text-center uppercase bold text-3xl">Administrador</h1>
      <h2 className="text-center text-black">userID: {user.userId}</h2>
        <div className="flex flex-col items-center justify-between">
          <BtnDash name='productos'/>
          <BtnDash name='ordenes'/>
          <BtnDash name='analisis'/>
        </div>

      <div className="flex flex-row justify-center items-center">
      <button className="hover:scale-100 scale-90 hover:shadow-xl transition-all shadow-sm m-2 p-4 bg-[#D8EBB5] text-black uppercase rounded-lg" onClick={handleProfile}>
        Get Profile
      </button>
      <button className="hover:scale-100 scale-90 hover:shadow-xl transition-all shadow-sm m-2 p-4 bg-[#D8EBB5] text-black uppercase rounded-lg" onClick={handleLogout}>
        LogOut
      </button>
      </div>
      
    </main>
  )
}