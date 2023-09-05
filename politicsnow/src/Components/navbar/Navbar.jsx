import "./navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./Assets/logo.svg" alt="" />
        <span>Politiks Now Admin</span>

      </div>
      <div className="icons">
        <img src="./Assets/search.svg"className="icon" alt="" />
        <img src="./Assets/app.svg"className="icon" alt="" />
        <img src="./Assets/expand.svg"className="icon" alt="" />
        <div className="notification">
          <img src="./Assets/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692633792~exp=1692634392~hmac=e9f10bb0ded0be1c0b1ddeddcee36286ae5d232f55d782a00e611864819a44b6" alt="" />
          <span>Manish</span>
        </div>
        <img src="./Assets/settings.svg" alt=""  className="icon"/>

      </div>
    
    
    </div>
  )
}

export default Navbar    