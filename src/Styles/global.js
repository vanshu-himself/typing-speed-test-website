import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}
body{
    color:${({theme})=>theme.color};
    background:${({theme})=>theme.background};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
}
.canvas{
    display:grid;
    min-height: 100vh;
    grid-auto-flow:flow;
    grid-template-row: auto 1fr auto;
    gap:0.5rem;
    padding: 2rem;
    width:100vw;
    align-items: center;
    text-align:center;
}
.type-box{
    display:block;
    max-width:1000px;
    height:100px;
    margin-left:auto;
    margin-right:auto;
    // overflow: hidden;
}
.words{
    font-size:28px;
    display:flex;
    flex-wrap:wrap;
    color:${({theme})=>theme.color}
}
.word{
    margin:5px;
    padding-rigth:1px;
    
}
.hidden-input{
    opacity:0;
}
.current{
    border-left:1px solid ;
    animation:blinking 2s infinite;
    animation-timing-function:ease;

    @keyframes blinking{
        0%{border-left-color:${({theme})=>theme.background}};
        25%{border-left-color:${({theme})=>theme.color}}
        50%{border-left-color:${({theme})=>theme.background}}
        75%{border-left-color:${({theme})=>theme.color}}
        100%{border-left-color:${({theme})=>theme.background}}
    }
}
.current-right{
    border-right:1px solid ;
    animation:blinkingRight 2s infinite;
    animation-timing-function:ease;

    @keyframes blinkingRight{
        0%{border-right-color:white;}
        25%{border-right-color:black}
        50%{border-right-color:white}
        75%{border-right-color:black}
        100%{border-right-color:white}
    }
}
.correct{
    color:green;
}
.incorrect{
    color:red;
}
.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size:1.3rem;
    justify-content:space-between;
    padding:0.5rem;
}
.modes{
    display:flex;
    gap:0.6rem;
}
.time-mode:hover{
    color:green;
    cursor:pointer;
}
.footer{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
}
.stats-box{
    display:flex;
    width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
}
.left-stats{
    width:30%;
    padding:30px;
}
.rigth-stats{
    width:70%;

}.title{
    font-size:20px;
    color:${({theme})=>theme.typeBoxText}
}
.subtitle{
    font-size:30px;
    color:${({theme})=>theme.label}
}
.header{
    display:flex;
    width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
}
.user-profile{
    width:1000px;
    margin:autp;
    display:flex;
    height:15rem;
    background:${({theme})=>theme.typeBoxText};
    border-radius:20px;
    color:${({theme})=>theme.background};
   padding:1rem;
    justify-content:center;
    margin:auto;

}
.user{
    width:50%;
    display:flex;
    margin-top:30px;
    margin-botoom:30px;
    border-right:2px solid ;
}
.info{
    width:60%;
    padding:1rem;
    margin-top:1.5rem;
}
.picture{
    width:40%;
}
.total-tests{
    width:50%;
    font-size:3rem;
    margin:auto;
}
.table {
    margin:auto;
    width:1000px;
}
.graph-user-page{
    margin:auto;
    width:1000px;
}
.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content:center;
    align-items:center;
}
.stats-graph{
    margin:auto;
    width:600px;
}
.restart-btn{
    margin-top:30px;
    padding:10px 50px;
    background:${({theme})=>theme.color};
    color:${({theme})=>theme.background};
    border:none;
    border-radius:5px;
    
}
`