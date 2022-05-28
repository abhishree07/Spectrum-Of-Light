import LogoImg from '../../assets/logo.png'

function Logo() {
  return (
    <div style={{display: "flex"}}>
      <h2 style={{fontSize: "35px", color: "white"}}>Spectrum of Light</h2>
      <img style={{width: "45px", height: "45px", marginLeft: "15px"}} src={LogoImg} alt="Spectrum of Light" />
    </div>
  )
}

export default Logo
