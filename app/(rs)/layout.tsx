import { Header } from "@/components/Header"

export default async function RSLaout({
    children,
}:{
    children:React.ReactNode
}){
    return(
        <div className="mx-auto w-full max-w-7xl">
            {/* Header */}
            <Header />
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    )
}

