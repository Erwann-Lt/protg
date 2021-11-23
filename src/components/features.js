import React,{useContext} from 'react'
import { Context } from '../context'


export const Features = (props) => {

  const {featureRef}=useContext(Context)


  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div ref={featureRef} className='col-md-10 col-md-offset-1 section-title'>
        <br/><br/><br/><br/>
          <h2>Savoir-faire</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
