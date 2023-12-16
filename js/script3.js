  
  let filterProduct=[];
  let galleryarray = [
    
      {
        id:1,
        productName: "Regular White",
        category: "Topwear",
        price: "30",
        image: "js/white-tshirt.jpg",
      },
      {
        id:2,
        productName: "Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "js/short-skirt.jpg",
      },
      {
        id:3,
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "Rs.99.00",
        image: "js/sporty-smartwatch.jpg",
      },
      {
        id:4,
        productName: "Knitted Top",
        category: "Topwear",
        price: "29",
        image: "js/foods.png",
      },
      {
        id:5,
        productName: "Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "js/4.png",
      },
      {
        id:6,
        productName: "Kokis",
        category: "Bottomwear",
        price: "89",
        image: "js/1.jpg",
      },
      {
        id:7,
        productName: "Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "js/2.jpg",
      },
      {
        id:8,
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "js/3.jpg",
        link:"home.html"
        
      },
      {
        id:9,
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "js/3.jpg",
        link:"home.html"
        
      },
    
  ]
showgallery(galleryarray);

  function showgallery(currarray){

    document.getElementById("card").innerText = "";

    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML += `

        
            <div class="box">
                <span class="price">${currarray[i].price}</span>
                <img src="${currarray[i].image}" alt="coconut spoon">
                <h3>${currarray[i].productName}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="${currarray[i].link}" class="btn">view product</a>
            </div>
        
        `
    }
  }
/*this is live searching option*/
document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;
    
    filterProduct = galleryarray.filter(function(a){
        if(a.productName.includes(text)){
            return a.productName;
        }
    });
    if(this.value == ""){
        showgallery(showgallery);
    }
    else{
        if(filterProduct == ""){
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }
        else{
            showgallery(filterProduct);
            document.getElementById("para").style.display = 'none';
        }
    }
})
