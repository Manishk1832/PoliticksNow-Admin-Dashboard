import { Link } from "react-router-dom"
import "./menu.scss"


export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "./Assets/home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "./Assets/user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "./Assets/user.svg",
        },
        
        {
          id:2,
          title:"Messages",
          url:"/messages",
          icon:"./Assets/post.svg"
        },
      
        
      ],
    },
    
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "./Assets/setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "./Assets/backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "./Assets/chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "./Assets/log.svg",
        },
      ],
    },
  ];
  


const Menu = () => {
  return (
    <div className="menu">
      
      {menu.map((item)=>(

      <div className="item" key = {item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map((listItem)=>(
        <Link to="/" className="listItem" key={listItem.id}>
        <img src={listItem.icon} alt="" />
        <span className="listItemTitle">{listItem.title}</span>
        </Link>
        ))}
        
      </div>

        ))}

    
    </div>

    

    



  )
}

export default Menu