import ascendLogo from "../assets/icons/ascend_logo2_transparent.png"

function Footer() {
  return (
    <footer className="z-40 grid grid-cols-3 items-center absolute bottom-7 w-full" style={{ gridTemplateColumns: '47.5% 5% 47.5%' }}>
        
        <div className="text-[16px] font-light text-white text-right">
            Ascend
        </div>

        <div className="flex justify-center items-center">
            <img src={ascendLogo} alt="Ascend Logo" className="lg:w-10 lg:h-10 w-5 h-5"/>
        </div>

        <div className="text-[16px] font-light text-white text-left">
            by: Zeraphim
        </div>

    </footer>
  )
}

export default Footer