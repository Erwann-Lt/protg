import React,{useContext} from 'react'
import { Context } from '../context'
import { Link } from 'react-router-dom'

export const Navigation = (props) => {

    const {smallLogo, backHomePage}=useContext(Context)

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a
           href='#page-top'
           onClick={backHomePage}
           className='navbar-brand page-scroll'
          >
            {smallLogo}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a 
                href='#features'
                onClick={backHomePage}
                className='page-scroll'
              >
                Savoir-faire
              </a>
            </li>

            <li>
              <a
                href='#about'
                onClick={backHomePage}
                className='page-scroll'
              >
                  A propos
              </a>
            </li>

            <li>
              <a  
              href='#services' 
              onClick={backHomePage}
              className='page-scroll'
              >
                Services
              </a>
            </li>

            <li>
              <a  
              href='#portfolio'
              onClick={backHomePage}
              className='page-scroll'
              >
                Catalogues
              </a>
            </li>
            
             
            <li>
              <a 
              href='#contact'
              onClick={backHomePage}
              className='page-scroll'
              >
                Devis
              </a>
            </li>

            <li>
            <Link to='/connexion'   >
                espace privé
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
