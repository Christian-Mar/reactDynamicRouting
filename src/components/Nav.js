import { Link } from '@reach/router'
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <Link to='/' className='link'>Home </Link>
      <Link to='data' className='link'>Landen</Link>
    </div>
  )
}

export default Nav
