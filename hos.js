*{
    margin: 0;
    padding: 0;
}
#slider,.wrap, .slide-content{
    margin: 0 ;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 75vh;
    overflow-x: hidden;

}
.main-nav{
    display: flex;
    justify-content: space-between;
    border-bottom: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    width: 100%;
    margin: 0 auto;
}
ul.topnav {
    display: flex;
    padding: 0;
    list-style: none;
    margin-right: 60px;

}
ul.topnav a {
    display: block;
    text-decoration: none;
    text-align: center;
    color: black;
    padding: 12px;
    font-family: 'Lato', sans-serif;

}
ul.topnav a:hover{
    background: cornflowerblue;
}
.brand{
    text-transform: uppercase;
    font-family: 'Kulim Park', sans-serif;
    color: #303137 ;
    padding: 12px;
    text-decoration: none;
    font-weight: 700;
    margin-left: 60px;
}
span{
    color: #006400;
}
ul.topnav li.menu a{
    display: none;
    float: right;
    color: #383137;
}
.wrap
{
    position: relative;  
}
.slide{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.slide1{
    background-image: url('ds.jpg');
}

.slide2{
    background-image: url('ds.jpg');
}
.slide3{
    background-image: url('ds.jpg');
}
.slide4{
    background-image: url('ds.jpg');
}
.slide-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.slide-content span{
    font-size: 5rem;
    color: white;   
}
.arrow{
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    width: 0;
    height: 0;
    border-style: solid;
}
#arrow-left{
    border-width: 30px 40px 30px 0 ;
    left: 0;
    border-color: transparent #fff transparent transparent ;
    margin-left: 30px;
}
#arrow-right{
    border-width: 30px 0px 30px 40px ;
    right: 0;
    border-color: transparent transparent transparent #fff  ;
    margin-right: 30px;
}
@media(max-width: 680px){
    .brand, .menu{
        margin-left:0;
    }
    ul.topnav{
        margin-right: 0;
    }
    ul.topnav li a{
        display: none;
    }
    ul.topnav li.menu a{
        display: block;
    }
    ul.topnav.responsive{
        flex-direction: column;
        justify-content: center;
        
    }
    ul.topnav.responsive li.menu {
        display: block;
        position: absolute;
        top:0;
        right: 0;     

    }
    ul.topnav.responsive li a{
    float: none;
    display: block;
    text-align: left;
        
    }
    ul.topnav.responsive li {
        
        position: relative;
        top: 50px;
        right: 30px;
    }

}
