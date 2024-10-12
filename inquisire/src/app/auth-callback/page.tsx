import { useRouter, useSearchParams } from "next/navigation";

const Page=()=>{
    const router = useRouter()
    const searchParams  =useSearchParams()
    const origin  = searchParams.get('orign')

    
}
export default Page;