'use client'
import { Suspense } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


const page = () => {

  const route = useRouter()

  useEffect(()=>{
    const irMenu = ()=>{
      route.push('/cafe')
    }
    irMenu();
  }, [])

  return (
    <>
      <Suspense fallback={<div>Cargando</div>}>
      </Suspense>
    </>
  )
}

export default page