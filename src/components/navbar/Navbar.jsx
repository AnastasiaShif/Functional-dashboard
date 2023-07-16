import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="wrapper">
       <div className="search">
        <input type='text' placeholder='Search...'/>
        <SearchOutlined/>
       </div>
       <div className="items">
        <div className="item">
          <LanguageOutlined/> English
        </div>
        <div className="item">
          <DarkModeOutlined/>
        </div>
        <div className="item">
          <FullscreenExitOutlined/>
        </div>
        <div className="item">
          <NotificationsNoneOutlined/>
          <div className="counter">1</div>
          
        </div>
        <div className="item">
        <div className="counter">2</div>
          <ChatBubbleOutlineOutlined/>
        </div>
        <div className="item">
          <ListOutlined/>
        </div>
        <div className="item">
          <img
          src='https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg' alt='' className='avatar'/>
        </div>
       </div>

     </div>
    </div>
  )
}

export default Navbar
