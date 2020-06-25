function timer()
{
var tt=setInterval(
    myclock
, (1000));
var c=21;
function myclock()
{
    if(c>1 && hastoend==0)
    {
        document.getElementById('demo').innerHTML=c-2;c--;
    }
    else{
        clearInterval(tt);
        var temp=0;
        for(var j=1;j<=100;j++)
                   {
        if(document.getElementById(`id${j}`).classList=='lit')
        {temp=1;
            break;
        }
        
                    }            
                    resetgame();
                    if(temp==0 )
                    {alert("YOU WIN!!!");}
                    else
                    {alert('Time Up. Better luck next time!!');
                }
                    
        
    }
}
   }

var hastoend;
function setter()
{
    hastoend=0;
}
function start()
{
      my=setInterval(
    ()=>{
         
      var x=Math.floor(Math.random()*100+1);
      console.log(x);
      var str=`id${x}`;
      console.log(str);
     if( document.getElementById(str).classList=='box')
      {document.getElementById(str).classList.add('lit');document.getElementById(str).classList.remove('box');}
      else
      {
          document.getElementById(str).classList.remove('lit');document.getElementById(str).classList.add('box');
      }
       
}, 800);
}
function stop(){
clearInterval(my);
//document.getElementById('reset1').style.display='inline';
hastoend=1;
}
function action()
{
    document.getElementById('b1').classList.add('btn');
   // document.getElementById('b1').style.backgroundColor='white';
    var i;
    for(i=1;i<=91;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
    
}
   function act()
   {
       action();
       setTimeout(() => {
        document.getElementById('b1').classList.remove('btn');    
       }, 400);
       
   }
   function act1()
   {
       action1();
       setTimeout(() => {
        document.getElementById('b2').classList.remove('btn');    
       }, 400);
       
   }
function action1()
{
    document.getElementById('b2').classList.add('btn');
    //document.getElementById('b2').style.backgroundColor='white';
    var i;
    for(i=2;i<=92;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
}
function act2()
   {
       action2();
       setTimeout(() => {
        document.getElementById('b3').classList.remove('btn');    
       }, 400);
       
   }
function action2()
{
    document.getElementById('b3').classList.add('btn');
   // document.getElementById('b3').style.backgroundColor='white';
    var i;
    for(i=3;i<=93;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
}
function act3()
   {
       action3();
       setTimeout(() => {
        document.getElementById('b4').classList.remove('btn');    
       }, 400);
       
   }
function action3()
{
    document.getElementById('b4').classList.add('btn');
   // document.getElementById('b4').style.backgroundColor='white';
    var i;
    for(i=4;i<=94;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
}
function act4()
   {
       action4();
       setTimeout(() => {
        document.getElementById('b5').classList.remove('btn');    
       }, 400);
       
   }
function action4()
{
    document.getElementById('b5').classList.add('btn');
   // document.getElementById('b5').style.backgroundColor='white';
    var i;
    for(i=5;i<=95;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
}
function act5()
   {
       action5();
       setTimeout(() => {
        document.getElementById('b6').classList.remove('btn');    
       }, 400);
       
   }
function action5()
{
    document.getElementById('b6').classList.add('btn');
   // document.getElementById('b6').style.backgroundColor='white';
    var i;
    for(i=6;i<=96;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');
            document.getElementById(str).classList.add('box');
    }
    }
}
function act6()
   {
       action6();
       setTimeout(() => {
        document.getElementById('b7').classList.remove('btn');    
       }, 400);
       
   }
function action6()
{
    document.getElementById('b7').classList.add('btn');
//document.getElementById('b7').style.backgroundColor='white';
    var i;
    for(i=7;i<=97;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
           
        document.getElementById(str).classList.remove('lit');
        document.getElementById(str).classList.add('box');
       }
    }
}
function act7()
   {
       action7();
       setTimeout(() => {
        document.getElementById('b8').classList.remove('btn');    
       }, 400);
       
   }
function action7()
{
    document.getElementById('b8').classList.add('btn');
   // document.getElementById('b8').style.backgroundColor='white';
    var i;
    for(i=8;i<=98;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {  document.getElementById(str).classList.remove('lit');
            document.getElementById(str).classList.add('box');
    }
    }
}
function act8()
   {
       action8();
       setTimeout(() => {
        document.getElementById('b9').classList.remove('btn');    
       }, 400);
       
   }
function action8()
{
    document.getElementById('b9').classList.add('btn');
   // document.getElementById('b9').style.backgroundColor='white';
    var i;
    for(i=9;i<=99;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
       }
    }
}
function act9()
   {
       action9();
       setTimeout(() => {
        document.getElementById('b10').classList.remove('btn');    
       }, 400);
       
   }
function action9()
{
    document.getElementById('b10').classList.add('btn');
   // document.getElementById('b10').style.border='white';
    var i;
    for(i=10;i<=100;i=i+10)
    {
        var str=`id${i}`;
        if(document.getElementById(str).classList=='lit')
       { 
        document.getElementById(str).classList.remove('lit');   
        document.getElementById(str).classList.add('box');
     }
    }
}
function resetgame()
{
   
    stop();
    document.getElementById('demo').innerHTML="20 seconds!!"
    var i;
    for(i=1;i<=100;i++)
    {
        var str=`id${i}`;
       //document.getElementById(str).classList.add('box');
       if(document.getElementById(str).classList=='lit')
       {
        document.getElementById(str).classList.remove('lit');
            document.getElementById(str).classList.add('box');
       }

    
    }
}