import '../style/header.css' ;
const { Link } = require("react-router-dom");




function Header(props) {
  return (
    <header id="header" className="navbar  fixed-top  d-flex justify-content-center  "
      style={{ background: '#4b6270', color: '#fff' }}>

      {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button> */}


        { props.nav ? ( 
                <div className="collapse navbar-collapse col-6 " id="navbarCollapse">

                <div class=" d-flex nav-item  col-12 col-sm-12  col-md-12    col-lg-4  p-2 m-0 "
                  style={{ background: ' #3a4c54' }}>
        
                  <i className="fas fa-home mt-2 "></i>
        
        
                  <a className="  nav-link  " >
                    <p class="card-text " style={{ color: '#fff' }}> Login</p>
                  </a>
        
                </div> 
        
                <ul className="  ml-1 navbar-nav col-8 col-sm-4 col-md-4  col-lg-8">
        
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/home" routerLinkActive="active">
                  <i className="fas fa-globe-americas" style={{color: '#fff' }}></i>
                </a> */}
        
                    <Link className="header-link m-1" >  Home </Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/home" routerLinkActive="active">
                  <i className="fas fa-user" style={{color: '#fff' }}></i>
                </a> */}
        
                    <Link  className="header-link m-1"> About </Link>
                  </li>
                  <li className="nav-item">
                    {/* <a id="msg" class="nav-link " href="#">
                  <i className="fas fa-envelope" style={{color: '#fff' }}></i>
                </a> */}
        
                    <Link  className="header-link m-1"> Product </Link>
                  </li>
        
                  <li className="nav-item">
                    {/* <a className="nav-link " href="#">
                  <i className="fas fa-bell"style={{color: '#fff' }}></i>
                  <span id="show_count" className="badge badge-pill badge-secondary">0</span>
                </a> */}
                  </li>
        
        
                </ul>
              </div >
        ) : ''}

        <h1 > Music DB</h1>


            {/* <i className="fas fa-guitar" style={{ width : "100px"}}></i> */}

      {/* <div id="username" className="col-4 col-sm-4 col-md-4  col-lg-4"> </div> */}

      {/* <img src="../../../assets/ppb.png" class=" navbar-nav ml-auto rounded-circle " routerLink='/order' style="width: 3em"> */}


    </header>


  );
}

export default Header;
