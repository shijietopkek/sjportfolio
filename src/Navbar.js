import React from 'react';
import './Navbar.css';
import classnames from 'classnames'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prevScrollpos:window.pageYOffset,
            visible:true
        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    render(){
        return(
            
            <nav id='navbar' className={classnames('navbar navbar-expand-md fixed-top hide-on-mobile', {
                "navbar--hidden": !this.state.visible
              })}>
                <a class="btn btn-dark home-btn" href='#about'><span class="fas fa-home"></span></a>
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navlinksCollapsible' aria-controls = 'navlinksCollapsible' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navlinksCollapsible'>
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item' ><a href='#interests' class='btn btn-dark'>Interests</a></li>
                        <li class='nav-item' ><a href='#awards' class='btn btn-dark'>Awards</a></li>
                        <li class='nav-item' ><a href='#projects' class='btn btn-dark'>Projects</a></li>
                        <li class='nav-item' ><a href='#websites'  class='btn btn-dark'>Websites</a></li>
                    </ul>
                </div>
            </nav>
  
    
 )
    }
   
}

export default Navbar;
