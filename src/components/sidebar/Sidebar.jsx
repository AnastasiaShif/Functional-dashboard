import {  AccountBoxOutlined, Assessment, CreditCardOutlined, Dashboard, ExitToAppOutlined, LocalShippingOutlined, MonitorHeartOutlined, NotificationsNone, Person2Outlined, ProductionQuantityLimitsOutlined, PsychologyAltOutlined, SettingsApplications } from '@mui/icons-material'
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:"none"}}>
        <span className='logo'>shifadmin</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <Dashboard className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to='/users' style={{textDecoration:"none"}}>
            <li>
                <Person2Outlined className='icon'/>
                <span>Users</span>
            </li>
            </Link>

            <Link to='/products' style={{textDecoration:"none"}}>
            <li>
                <ProductionQuantityLimitsOutlined className='icon'/>
                <span>Products</span>
            </li>
            </Link>
            <Link to='/orders' style={{textDecoration:"none"}}>
            <li>
                <CreditCardOutlined className='icon'/>
                <span>Orders</span>
            </li>
            </Link>
            <li>
                <LocalShippingOutlined className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
                <Assessment className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNone className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <MonitorHeartOutlined className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyAltOutlined className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplications className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxOutlined className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppOutlined className='icon'/>
                <span>Logout</span>
            </li>
           
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      
      </div>
    </div>
  )
}

export default Sidebar
 