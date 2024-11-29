import { FCWithChildren } from "@/lib/types"



const Main: FCWithChildren   = function ({ children }) {
    return (<main className="withGermanFlagGradient flex justify-center items-center h-screen" >
        {children}
    </main>)
}
export default Main    