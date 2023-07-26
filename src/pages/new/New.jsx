import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
       <div className="top">
        <h1>Add New User</h1>
       </div>
       <div className="buttom">
        <div className="left">
          <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
        </div>
        <div className="right">
          <form>
          <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlined className="icon"/>
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>
            <div className="formInput">
              <label>User Name</label>
              <input type="text" placeholder="john_doe"/>
            </div>
            <div className="formInput">
              <label>Name and surname</label>
              <input type="text" placeholder="John Doe"/>
            </div>
            <div className="formInput">
              <label>Email</label>
              <input type="email" placeholder="john_doe@gmail.com"/>
            </div>
            <div className="formInput">
              <label>Phone</label>
              <input type="text" placeholder="+1 234 567 78"/>
            </div>
            <div className="formInput">
              <label>Password</label>
              <input type="password"/>
            </div>
            <div className="formInput">
              <label>Address</label>
              <input type="text" placeholder="Haifa haHalutz,10 297785"/>
            </div>
            <div className="formInput">
              <label>Country</label>
              <input type="text" placeholder="Israel"/>
            </div>
            <button>
              Send
            </button>
          </form>
        </div>
       </div>
      </div>
    </div>
  )
}

export default New
