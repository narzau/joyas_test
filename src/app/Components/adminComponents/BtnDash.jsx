import Link from "next/link";

export default function BtnDash(props) {
  const href = `/paginas/admin/dashboard/${props.name}`
  return(
    <>
        <Link className="cursor-pointer hover:scale-100 scale-90 hover:shadow-xl transition-all my-4 border-[black] border-solid border-2 w-1/3 text-center p-4 bg-[#FFF1C1] rounded-md shadow-md text-black uppercase" href={href}>{props.name}</Link>
    </>
    
    
  )
}