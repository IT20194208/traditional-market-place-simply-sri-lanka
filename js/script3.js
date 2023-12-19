  
  let filterProduct=[];
  let galleryarray = [
    
      {
        id:1,
        productName: "Sri Lanka hand made products",
        category: "craft",
        price: "Rs.500.00",
        image: "images/all/1.jpg",
        link:"1.html",
      },
      {
        id:2,
        productName: "Sri Lanka hand made products(with elephant)",
        category: "craft",
        price: "Rs.450.00",
        image: "images/all/2.jpg",
      },
      {
        id:3,
        productName: "Hand made coconut shell based items-ship",
        category: "craft",
        price: "Rs.950.00",
        image: "images/all/3.jpg",
      },
      {
        id:4,
        productName: "wooden horse",
        category: "craft",
        price: "Rs.4700.00",
        image: "images/all/4.jpg",
      },
      {
        id:5,
        productName: "Single ship - light weight wooden table top",
        category: "craft",
        price: "Rs.850.00",
        image: "images/all/5.jpg",
      },
      {
        id:6,
        productName: "Polkatu Pahana",
        category: "craft",
        price: "Rs.3000.00",
        image: "images/all/6.jpg",
      },
      {
        id:7,
        productName: "Sri Lanka Best Ginger - 1kg",
        category: "food",
        price: "Rs.900.00",
        image: "images/all/7.jpg",
      },
      {
        id:8,
        productName: "Hand painting canvas wall art(90*60cm)",
        category: "art",
        price: "Rs.9830.00",
        image: "images/all/8.jpg",
        link:"home.html"
        
      },
      {
        id:9,
        productName: "Hand painting canvas wall art",
        category: "art",
        price: "Rs.7000.00",
        image: "images/all/9.jpg",
        link:"home.html"
        
      },
      {
        id:10,
        productName: "Hand painting canvas wall art(A3 Size- traditional art)",
        category: "art",
        price: "Rs.5600.00",
        image: "images/all/10.jpg",
      },
      {
        id:11,
        productName: "Hand painting canvas wall art(A4 size)",
        category: "art",
        price: "Rs.4710.00",
        image: "images/all/11.jpg",
      },
      {
        id:12,
        productName: "Hand painting canvas wall art(A4size with frame )",
        category: "art",
        price: "Rs.4210.00",
        image: "images/all/12.jpg",
      },
      {
        id:13,
        productName: "Hand painting canvas wall art(A4size)with wood frame",
        category: "art",
        price: "Rs.3700.00",
        image: "images/all/13.jpg",
      },
      {
        id:14,
        productName: "Hand painting canvas wall art(A3 size)",
        category: "art",
        price: "Rs.5810.00",
        image: "images/all/14.jpg",
      },
      {
        id:15,
        productName: "Hand painting canvas wall art with wood frame",
        category: "art",
        price: "Rs.7720.00",
        image: "images/all/15.jpg",
      },
      {
        id:16,
        productName: "Konda kewm",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/1.jpg",
      },
      {
        id:17,
        productName: "kokis",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/17.jpg",
      },
      {
        id:18,
        productName: "Honey rings",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/18.png",
      },
      {
        id:19,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        image: "images/all/19.jpg",
      },
      {
        id:20,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/20.jpg",
      },
      {
        id:21,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/21.jpg",
      },
      {
        id:22,
        productName: "oil spoons",
        category: "eco",
        price: "Rs.250.00",
        image: "images/all/22.jpg",
      },
      {
        id:23,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/23.jpg",
      },
      {
        id:24,
        productName: "coconut spoons kithul hadel good finish",
        category: "eco",
        price: "Rs.300.00",
        image: "images/all/24.jpg",
      },
      {
        id:25,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        image: "images/all/25.jpg",
      },
      {
        id:26,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        image: "images/all/26.jpg",
      },
      {
        id:27,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        image: "images/all/27.jpg",
      },
      {
        id:28,
        productName: "Salt bawl",
        category: "eco",
        price: "Rs.1126.00",
        image: "images/all/28.jpg",
      },
      {
        id:29,
        productName: "Eco Bag",
        category: "eco",
        price: "Rs.700.00",
        image: "images/all/29.jpg",
      },
      {
        id:30,
        productName: "Coconut husk Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        image: "images/all/30.jpeg",
      },
      {
        id:31,
        productName: "Ceylon Cinnamon Sticks",
        category: "food",
        price: "Rs.340.00",
        image: "images/all/31.png",
      },
      {
        id:32,
        productName: "Best Sri Lanka Spices Black pepper-250g",
        category: "food",
        price: "Rs.1099.00",
        image: "images/all/32.jpg",
      },
      {
        id:33,
        productName: "Organic fresh Gotukola 1kg",
        category: "food",
        price: "Rs.375.00",
        image: "images/all/33.jpg",
      },
      {
        id:34,
        productName: "Candid papaya, Papaya Jujubes (100g)",
        category: "food",
        price: "Rs.500.00",
        image: "images/all/34.jpg",
      },
      {
        id:35,
        productName: "Dehydrated jack fruits 100g",
        category: "food",
        price: "Rs.6.00",
        image: "images/all/35.jpg",
      },
      {
        id:36,
        productName: "Sri Lanka Best Organic Coconut Butter 400g",
        category: "food",
        price: "Rs.1990.00",
        image: "images/all/36.jpg",
      },
      {
        id:37,
        productName: "Organic Roasted Coconut Chip",
        category: "food",
        price: "Rs.450.00",
        image: "images/all/37.jpg",
      },
      {
        id:38,
        productName: "Coconut husk chips 1kg",
        category: "eco",
        price: "Rs.1000.00",
        image: "images/all/38.jpeg",
      },
      {
        id:39,
        productName: "100% Best Naturel Coconut Milk Sri lanka",
        category: "food",
        price: "Rs.1000.00",
        image: "images/all/39.png",
      },
      {
        id:40,
        productName: "sinhala pickles",
        category: "food",
        price: "Rs.924.00",
        image: "images/all/40.jpg",
      },
      {
        id:41,
        productName: "Curry Leaves Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        image: "images/all/41.jpg",
      },
      {
        id:42,
        productName: "Heen Bowitiya ( Osbeckia Octandra) Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        image: "images/all/42.jpg",
      },
      {
        id:43,
        productName: "Dehydrate Jackfruit 100g",
        category: "food",
        price: "Rs.280.00",
        image: "images/all/43.jpg",
      },
      {
        id:44,
        productName: "lime pickles",
        category: "food",
        price: "Rs.550.00",
        image: "images/all/44.jpg",
      },
      {
        id:45,
        productName: "Grain porridge",
        category: "food",
        price: "Rs.1025.00",
        image: "images/all/45.jpeg",
      },
      {
        id:46,
        productName: "Coconut Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        image: "images/all/46.jpeg",
      },
      {
        id:47,
        productName: "Crochet (Woolen) Baby Girl/Boy shoes",
        category: "garments",
        price: "Rs.650.00",
        image: "images/all/47.jpg",
      },
      {
        id:48,
        productName: "SRYN - Polo Regular Collar Tshirts",
        category: "garments",
        price: "Rs.1760.00",
        image: "images/all/48.jpg",
      },
      {
        id:49,
        productName: "Blue bathik Frock",
        category: "garments",
        price: "Rs.3100.00",
        image: "images/all/49.jpeg",
      },
      {
        id:50,
        productName: "pencil case",
        category: "garments",
        price: "Rs.350.00",
        image: "images/all/50.jpg",
      },
      {
        id:51,
        productName: "Baby Frock 3/4/5/6 Year",
        category: "garments",
        price: "Rs.420.00",
        image: "images/all/51.jpeg",
      },
      {
        id:52,
        productName: "Tuvil Fabric Baby Shorts",
        category: "garment",
        price: "Rs.490.00",
        image: "images/all/52.jpeg",
      },
      {
        id:53,
        productName: "Blue And Red Kid Frock",
        category: "garments",
        price: "Rs.1190.00",
        image: "images/all/53.jpeg",
      },
      {
        id:54,
        productName: "Avengers Boys short",
        category: "garments",
        price: "Rs.440.00",
        image: "images/all/54.jpeg",
      },
      {
        id:55,
        productName: "Cross Over Plain Frock",
        category: "garments",
        price: "Rs.3490.00",
        image: "images/all/55.jpg",
      },
      {
        id:56,
        productName: "Printed mosquito net double size",
        category: "house-hold",
        price: "Rs.2460.00",
        image: "images/all/56.jpg",
      },
      {
        id:57,
        productName: "Baby cot mosquito net",
        category: "house-hold",
        price: "Rs.1760.00",
        image: "images/all/57.jpg",
      }, 
      {
        id:58,
        productName: "King size printed mosquito net",
        category: "house-hold",
        price: "Rs.4160.00",
        image: "images/all/58.jpg",
      },
      {
        id:59,
        productName: "Wall mounted mosquito net double size",
        category: "house-hold",
        price: "Rs.2560.00",
        image: "images/all/59.jpg",
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
