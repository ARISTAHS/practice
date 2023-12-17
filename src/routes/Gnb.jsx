import React, {useEffect,useState} from "react";
import { Link } from "react-scroll";
import '../style/Gnb.scss';

const Gnb = () => {
  
  const gnb = ['Home', 'About', 'Portfolio'];
  const [scroll , setScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY > 50)
    })
  }, [])

  return(
    <header className={scroll ? "active" : ""}>
      <div className='headerArea'>
        <h1>정호석</h1>
        <nav>
          <h2 className="hidden">Gnb</h2>
          <ul>
            {
              gnb.map((navlist, index) => {
                return (<li key={index}><h3><Link 
                  to={navlist}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  // href={`#${navlist}`}
                  >{navlist}</Link></h3></li>)
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  )

}

export default Gnb;
