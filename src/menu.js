import React from 'react';



class Menu extends React.Component {



    constructor(props){
        super(props);
      //  const abc = "abc";
       // console.log(abc);
    }


    render(){
        return(



            <nav id="Menu">
                <h2>Menu</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Ipsum veroeros</a></li>
                    <li><a href="generic.html">Tempus etiam</a></li>
                    <li><a href="generic.html">Consequat dolor</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
            </nav>



        )
    }

}

export default Menu;
