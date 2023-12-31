import { Link } from 'react-router-dom'
import './leftBar.css'

//componont
import CurrentUser from '../../FackApis/CurrentUserData'

// Icon Image.............
import Firend from '../../assets/icon/1.png'
import Groups from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import Watch from '../../assets/icon/4.png'
import gallery from '../../assets/icon/5.png'
import videos from '../../assets/icon/6.png'
import message from '../../assets/icon/7.png'





export default function LeftBar() {
  return (
    <div className='leftBar'>
     <div className="left-container">
      <div className="menu">

       <Link to='/profile/id'>
        <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4>Beg Joker</h4>
          </div>
          </Link>

          <Link to='/'>
           <div className="item">
            <img src={Firend} alt="" />
            <h4>Friends</h4>
           </div>
          </Link>

          <Link to='/'>
           <div className="item">
            <img src={Groups} alt="" />
            <h4>Groups</h4>
           </div>
          </Link>

          <Link to='/'>
           <div className="item">
            <img src={Market} alt="" />
            <h4>Market</h4>
           </div>
          </Link>

          <Link to='/'>
           <div className="item">
            <img src={Watch} alt="" />
            <h4>Watch</h4>
           </div>
          </Link>
           
         <div className="menu">
          <h4 className='other'>Your Shortcuts</h4>
          <Link to='/'>
           <div className="item">
            <img src={gallery} alt="" />
            <h4>gallery</h4>
           </div>
          </Link>

          <Link to='/'>
           <div className="item">
            <img src={videos} alt="" />
            <h4>videos</h4>
           </div>
          </Link>

          <Link to='/chatbox/id'>
           <div className="item">
            <img src={message} alt="" />
            <h4>message</h4>
           </div>
          </Link>
         </div>
        </div>
        <hr /> 
      </div>
      <div className="menu">

      </div>
     </div>
    
  )
}
