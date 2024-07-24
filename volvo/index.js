var a =document.querySelector("#intro img")
var b=0


var tl=gsap.timeline()
     tl.to("#intro img",{
    // rotate:"360",
    duration:"3",
    Transition:"all ease",
})
tl.to("#intro",{
   top:"-110%",
   duration: "1",
   Transition:"all ease",
})
tl.from("#Part1 #heading h1",{
     opacity:"0",
     duration:".4",
})
tl.from("#Part1 #heading p",{
    opacity:"0",
    duration:".4",
})
tl.from("#Part1 img",{
    x:"-100%",
    opacity:"0",
    duration:".8",
})

// /================================================================================/ 


gsap.from("#part2-1 img",{
    x:"-100%",
    duration:"1",
    scrollTrigger:{
        trigger:"#part2-1 img",
        // markers:"true",
        start:"top 60%"
    }
})
gsap.from("#part2-2 h1",{
    x:"140%",
    duration:"1",
    scrollTrigger:{
        trigger:"#part2-2 h1",
        // markers:"true",
        start:"top 60%"
    }
})
gsap.from("#part2-2 p",{
    y:"50%",
    opacity:"0",
    duration:"1",
    scrollTrigger:{
        trigger:"#part2-2 p",
        // markers:"true",
        start:"top 75%"
    }
})

gsap.from("#part3upper h1",
{  
       y:"-50%",
       opacity:"0",
       duration:"1.2", 
       scrollTrigger:{
              trigger:"#part3upper h1",
            //  markers:"true",
              start:"top 35%" ,
       }        
})
gsap.from("#part3upper p",
    {  
           y:"50%",
           opacity:"0",
           duration:"1.2", 
           scrollTrigger:{
            trigger:"#part3upper p",
        //    markers:"true",
            start:"top 50%" ,
     }           
    })

    gsap.from(".part3lower1 img",
        {  
             scale:"0",
             duration:"1.2", 
             scrollTrigger:{
                trigger:".part3lower1 img",
            //    markers:"true",
                start:"top 75%" ,
         }          
             
        })   
        gsap.from(".part3lower2 img",
            {  
                 scale:"0",
                 duration:"1.2",  
                 scrollTrigger:{
                    trigger:".part3lower2 img",
                //    markers:"true",
                    start:"top 75%" ,
             }       
            })   
        gsap.from(".part3lower3 img",
                {  
                     scale:"0",
                     duration:"1.2",
                     scrollTrigger:{
                        trigger:".part3lower3 img",
                    //    markers:"true",
                        start:"top 75%" ,
                 }       
                           
                })   