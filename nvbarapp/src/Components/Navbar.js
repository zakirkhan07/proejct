import React from 'react';
import { FaFacebookSquare,FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

const Navbar = () => {
    return (
    <>
      <nav className="main-nav">
       <div className="logo">
        <h2>
           <span> Zakir </span> khan
       
       </h2>
    </div>
    <div className="menu-link">
        <ul>
          <li> 
          <a href="#">Home</a>
          </li>
          <li> 
          <a href="#">About</a>
          </li>
          <li> 
          <a href="#">Services</a>
          </li>
          <li> 
          <a href="#">Contacts</a>
          </li>

        </ul>


   </div>
  
                              
         {/* social media links */}
   
    <div className="social-media">
       <ul className="social-media-desktop">

        <li>

            <a href=" https://www.youtube.com/"
             target="Zakir"> 
            <FaFacebookSquare className="Facebook"/>
             </a>
           

        </li>
        <li>

             <a href=" https://www.youtube.com/"
             target="Zakir"> 
             <FaInstagramSquare className="instagram"/>
             
             </a>
            

        </li>
    
      <li>

         <a href=" https://www.youtube.com/"
         target="Zakir"> 
         <FaYoutubeSquare className="youtube"/>
           
          </a>
         
        </li>

     </ul>

    </div>


    </nav>




    </>
       
    );
};
export default Navbar;
