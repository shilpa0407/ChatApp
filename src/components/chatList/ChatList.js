import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import EditIcon from "@material-ui/icons/Edit";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatIcon from "@material-ui/icons/Chat";
import Avatar from "@material-ui/core/Avatar";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Gladys Kanyinda",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 2,
      name: "Ashish Ashraful",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      id: 3,
      name: "Yi Chun-Hwa",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      id: 4,
      name: "Justine Robinson",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Neeshan El Pasha",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="   chatlist__items top_pic">
          <div className="avatar_top">
            <Avatar alt="Remy Sharp" src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg?ezimgfmt=rs:286x288/rscb1/ng:webp/ngcb1" />
            
          </div>

          <div className="user_top">
<h4>User-1234</h4>
<span>
<FiberManualRecordIcon style={{color:"yellow", fontSize:"small"}}/>
</span>

<span>Away</span>
          </div>
           
          <div className="icon">
            {/* <Avatar  float="left" alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <IconButton color="inherit">
              <EditIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit">
              <MoreVertIcon fontSize="large" />
            </IconButton>
          </div>
        </div>

        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" placeholder="Search" required />
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>

        <div className="down_icon">
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <PhoneIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <ChatIcon
              style={{ color: "rgb(142, 196, 240)" }}
              fontSize="large"
            />
          </IconButton>
          <IconButton>
            <SupervisorAccountIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    );
  }
}
