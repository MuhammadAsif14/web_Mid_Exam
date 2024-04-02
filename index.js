const srcs=["./one.svg","./two.svg","./three.svg","./four.svg"];
let count=0;
function next(){


    const bigdiv=document.getElementsByTagName("img")[0];
    // console.log(bigdiv.src);
    // const img=document.createElement("img");
    if(count===3){
        count=0;
    }
    bigdiv.src=srcs[count]
    count++;
    // bigdiv.src="./three.svg";
    // img.classList.add("bigimage");
    // bigdiv.append(img);
    // console.log("clicked Next");
    

}
let count2=3;
function prev(){


    const bigdiv=document.getElementsByTagName("img")[0];
    // console.log(bigdiv.src);
    // const img=document.createElement("img");
    if(count2===0){
        count2=3;
    }
    bigdiv.src=srcs[count2]
    count2--;
    // bigdiv.src="./three.svg";
    // img.classList.add("bigimage");
    // bigdiv.append(img);
    // console.log("clicked Next");
    

}