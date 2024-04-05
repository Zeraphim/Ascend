import ascendLogo from "../assets/icons/ascend_logo2_transparent.png"

function Footer() {
  return (
    <footer className="z-40 grid grid-cols-3 items-center absolute bottom-7 w-full"
        style={{
            gridTemplateColumns: '47.5% 5% 47.5%',
            '@media (max-width: 640px)': {
            gridTemplateColumns: '40% 20% 40%',
            }
        }}>
        
        <div className="text-[16px] font-light text-white text-right lg:mr-0 mr-4">
            Ascend
        </div>

        <div className="flex justify-center items-center">
            <img src={ascendLogo} alt="Ascend Logo" className="lg:w-10 lg:h-10 w-5 h-5"/>
        </div>

        <div className="text-[16px] font-light text-white text-left lg:ml-0 ml-4">
            by: Zeraphim
        </div>

    </footer>
  )
}

export default Footer