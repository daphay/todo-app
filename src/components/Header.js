import React, { Component } from 'react';

class Header extends Component {

    componentDidUpdate(prevProps, prevState) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if(prevProps.headerText !== this.props.headerText){
            document.getElementById("HeadText").innerHTML = "completed";
            document.getElementById("HeadText").style.backgroundColor = bgColor;
        }
      }

    render (){
        return (
            <header>
            <h1 className="appName"> A Todo App <span id="HeadText"></span></h1>
            <p className="enterInputText"> Please use the input field to add to-dos item(s) </p>
        </header>
        )
    }
};

 export default Header;