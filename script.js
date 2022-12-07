const m1 = async ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Initializing Network....")
        },2000)
    })
}

const m2=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Connecting To Server.....")
        },3000)
    })
}


const m3=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Retreiving username...")
        },3000)
    })
}

const m4=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Username found....")
        },3000)
    })
}

const m5=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Trying a combination of 4.5 Trillion passwords...")
        },3000)
    })
}

const m6=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Password found...")
        },3000)
    })
}

const m7=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Connecting to Facebook...")
        },3000)
    })
}

const run = async () => {
    let a1 = await m1();
    document.querySelector("#hack1").innerHTML = (a1);
    let a2 = await m2();
    document.querySelector("#hack2").innerHTML = (a2);
    let a3 = await m3();
    document.querySelector("#hack3").innerHTML = (a3);
    let a4 = await m4();
    document.querySelector("#hack4").innerHTML = (a4);
    let a5 = await m5();
    document.querySelector("#hack5").innerHTML = (a5);
    let a6 = await m6();
    document.querySelector("#hack6").innerHTML = (a6);
    let a7 = await m7();
    document.querySelector("#hack7").innerHTML = (a7);
    let a8 = await m8();
    document.querySelector("#hack8").innerHTML = (a8);
    let a9 = await m9();
    document.querySelector("#hack9").innerHTML = (a9);
  
  }
  
  run();