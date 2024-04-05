import ascendLogo from "../assets/icons/ascend_logo2_transparent.png"

function Footer() {
  return (
    <footer className="z-40 flex flex-row justify-center items-center">
        
        <div className="absolute bottom-0 m-4 text-[16px] flex flex-row items-center justify-center gap-5 font-light text-white z-40">
            

            <div  className="lg:h-10 h-1 flex flex-row items-center justify-center">
                Ascend
            </div>

            <div>
                <img src={ascendLogo} alt="Ascend Logo" className="lg:w-10 lg:h-10 w-5 h-5 flex flex-row items-center justify-center"/>
            </div>

            <div  className="lg:h-10 h-1 flex flex-row items-center justify-center">
                by: Zeraphim
            </div>

        </div>

    </footer>
  )
}

export default Footer