const form=document.querySelector(".form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(e.target);
    const weight=parseInt(document.querySelector("#weight").value);
    const height=parseInt(document.querySelector("#height").value);
    const results=document.querySelector("#results");
    if(weight === " " || weight <0 || isNaN(weight)){
        results.innerHTML=`give a valid ${weight}`

    }
    else if(height === " " || weight <0 || isNaN(height)){
        results.innerHTML=`give a valid ${height}`

    }else{
        const bmi=(weight/((height*height)/1000)).toFixed(2);
        results.innerHTML=`${bmi}`
    }
})