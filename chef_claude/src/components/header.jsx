import ChefClaudeIcon from '../assets/chef-claude-icon.png';

export default function Header(){
    return(
        <header className='header'>
          <img src={ChefClaudeIcon} alt="Chef Claude Icon" />
           <h1>Chef Claude</h1>
        </header>
    )
}