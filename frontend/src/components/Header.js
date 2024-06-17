export default function Header(){
    return(
      <nav className='nav-bar'>
      <p style={{fontSize:"48px"}}>LOGO</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href = "/contact-us">Contact</a>
        </li>
        <li>
          <a href = "/products">Products</a>
        </li>
        <li>
          <a href = "/add-products">ADD Products</a>
        </li>
    
      </ul>
    </nav>
    )
    }