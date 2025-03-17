import headerImage from "../images/chef-claude-icon.png"

export default function Header(){
    return(
       <header className="header-container">
        <img src={headerImage}/>
        <h1>Chef Claude</h1>
       </header>
    )
}