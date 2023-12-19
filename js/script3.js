  
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
        link:"2.html",
      },
      {
        id:3,
        productName: "Hand made coconut shell based items-ship",
        category: "craft",
        price: "Rs.950.00",
        image: "images/all/3.jpg",
        link:"3.html",
      },
      {
        id:4,
        productName: "wooden horse",
        category: "craft",
        price: "Rs.4700.00",
        image: "images/all/4.jpg",
        link:"4.html",
      },
      {
        id:5,
        productName: "Single ship - light weight wooden table top",
        category: "craft",
        price: "Rs.850.00",
        image: "images/all/5.jpg",
        link:"5.html",
      },
      {
        id:6,
        productName: "Polkatu Pahana",
        category: "craft",
        price: "Rs.3000.00",
        image: "images/all/6.jpg",
        link:"6.html",
      },
      {
        id:7,
        productName: "Sri Lanka Best Ginger - 1kg",
        category: "food",
        price: "Rs.900.00",
        image: "images/all/7.jpg",
        link:"7.html",
      },
      {
        id:8,
        productName: "Hand painting canvas wall art(90*60cm)",
        category: "art",
        price: "Rs.9830.00",
        image: "images/all/8.jpg",
        link:"8.html"
        
      },
      {
        id:9,
        productName: "Hand painting canvas wall art",
        category: "art",
        price: "Rs.7000.00",
        image: "images/all/9.jpg",
        link:"9.html"
        
      },
      {
        id:10,
        productName: "Hand painting canvas wall art(A3 Size- traditional art)",
        category: "art",
        price: "Rs.5600.00",
        image: "images/all/10.jpg",
        link:"10.html",
      },
      {
        id:11,
        productName: "Hand painting canvas wall art(A4 size)",
        category: "art",
        price: "Rs.4710.00",
        image: "images/all/11.jpg",
        link:"11.html",
      },
      {
        id:12,
        productName: "Hand painting canvas wall art(A4size with frame )",
        category: "art",
        price: "Rs.4210.00",
        image: "images/all/12.jpg",
        link:"12.html",
      },
      {
        id:13,
        productName: "Hand painting canvas wall art(A4size)with wood frame",
        category: "art",
        price: "Rs.3700.00",
        image: "images/all/13.jpg",
        link:"13.html",
      },
      {
        id:14,
        productName: "Hand painting canvas wall art(A3 size)",
        category: "art",
        price: "Rs.5810.00",
        image: "images/all/14.jpg",
        link:"14.html",
      },
      {
        id:15,
        productName: "Hand painting canvas wall art with wood frame",
        category: "art",
        price: "Rs.7720.00",
        image: "images/all/15.jpg",
        link:"15.html",
      },
      {
        id:16,
        productName: "Konda kewm",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/1.jpg",
        link:"16.html",
      },
      {
        id:17,
        productName: "kokis",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/17.jpg",
        link:"17.html",
      },
      {
        id:18,
        productName: "Honey rings",
        category: "food",
        price: "Rs.50.00",
        image: "images/all/18.png",
        link:"18.html",
      },
      {
        id:19,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        image: "images/all/19.jpg",
        link:"19.html",
      },
      {
        id:20,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/20.jpg",
        link:"20.html",
      },
      {
        id:21,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/21.jpg",
        link:"21.html",
      },
      {
        id:22,
        productName: "oil spoons",
        category: "eco",
        price: "Rs.250.00",
        image: "images/all/22.jpg",
        link:"22.html",
      },
      {
        id:23,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        image: "images/all/23.jpg",
        link:"23.html",
      },
      {
        id:24,
        productName: "coconut spoons kithul hadel good finish",
        category: "eco",
        price: "Rs.300.00",
        image: "images/all/24.jpg",
        link:"24.html",
      },
      {
        id:25,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        image: "images/all/25.jpg",
        link:"25.html",
      },
      {
        id:26,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        image: "images/all/26.jpg",
        link:"26.html",
      },
      {
        id:27,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        image: "images/all/27.jpg",
        link:"27.html",
      },
      {
        id:28,
        productName: "Salt bawl",
        category: "eco",
        price: "Rs.1126.00",
        image: "images/all/28.jpg",
        link:"28.html",
      },
      {
        id:29,
        productName: "Eco Bag",
        category: "eco",
        price: "Rs.700.00",
        image: "images/all/29.jpg",
        link:"29.html",
      },
      {
        id:30,
        productName: "Coconut husk Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        image: "images/all/30.jpeg",
        link:"30.html",
      },
      {
        id:31,
        productName: "Ceylon Cinnamon Sticks",
        category: "food",
        price: "Rs.340.00",
        image: "images/all/31.png",
        link:"31.html",
      },
      {
        id:32,
        productName: "Best Sri Lanka Spices Black pepper-250g",
        category: "food",
        price: "Rs.1099.00",
        image: "images/all/32.jpg",
        link:"32.html",
      },
      {
        id:33,
        productName: "Organic fresh Gotukola 1kg",
        category: "food",
        price: "Rs.375.00",
        image: "images/all/33.jpg",
        link:"33.html",
      },
      {
        id:34,
        productName: "Candid papaya, Papaya Jujubes (100g)",
        category: "food",
        price: "Rs.500.00",
        image: "images/all/34.jpg",
        link:"34.html",
      },
      {
        id:35,
        productName: "Dehydrated jack fruits 100g",
        category: "food",
        price: "Rs.6.00",
        image: "images/all/35.jpg",
        link:"35.html",
      },
      {
        id:36,
        productName: "Sri Lanka Best Organic Coconut Butter 400g",
        category: "food",
        price: "Rs.1990.00",
        image: "images/all/36.jpg",
        link:"36.html",
      },
      {
        id:37,
        productName: "Organic Roasted Coconut Chip",
        category: "food",
        price: "Rs.450.00",
        image: "images/all/37.jpg",
        link:"37.html",
      },
      {
        id:38,
        productName: "Coconut husk chips 1kg",
        category: "eco",
        price: "Rs.1000.00",
        image: "images/all/38.jpeg",
        link:"38.html",
      },
      {
        id:39,
        productName: "100% Best Naturel Coconut Milk Sri lanka",
        category: "food",
        price: "Rs.1000.00",
        image: "images/all/39.png",
        link:"39.html",
      },
      {
        id:40,
        productName: "sinhala pickles",
        category: "food",
        price: "Rs.924.00",
        image: "images/all/40.jpg",
        link:"40.html",
      },
      {
        id:41,
        productName: "Curry Leaves Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        image: "images/all/41.jpg",
        link:"41.html",
      },
      {
        id:42,
        productName: "Heen Bowitiya ( Osbeckia Octandra) Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        image: "images/all/42.jpg",
        link:"42.html",
      },
      {
        id:43,
        productName: "Dehydrate Jackfruit 100g",
        category: "food",
        price: "Rs.280.00",
        image: "images/all/43.jpg",
        link:"43.html",
      },
      {
        id:44,
        productName: "lime pickles",
        category: "food",
        price: "Rs.550.00",
        image: "images/all/44.jpg",
        link:"44.html",
      },
      {
        id:45,
        productName: "Grain porridge",
        category: "food",
        price: "Rs.1025.00",
        image: "images/all/45.jpeg",
        link:"45.html",
      },
      {
        id:46,
        productName: "Coconut Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        image: "images/all/46.jpeg",
        link:"46.html",
      },
      {
        id:47,
        productName: "Crochet (Woolen) Baby Girl/Boy shoes",
        category: "garments",
        price: "Rs.650.00",
        image: "images/all/47.jpg",
        link:"47.html",
      },
      {
        id:48,
        productName: "SRYN - Polo Regular Collar Tshirts",
        category: "garments",
        price: "Rs.1760.00",
        image: "images/all/48.jpg",
        link:"48.html",
      },
      {
        id:49,
        productName: "Blue bathik Frock",
        category: "garments",
        price: "Rs.3100.00",
        image: "images/all/49.jpeg",
        link:"49.html",
      },
      {
        id:50,
        productName: "pencil case",
        category: "garments",
        price: "Rs.350.00",
        image: "images/all/50.jpg",
        link:"50.html",
      },
      {
        id:51,
        productName: "Baby Frock 3/4/5/6 Year",
        category: "garments",
        price: "Rs.420.00",
        image: "images/all/51.jpeg",
        link:"51.html",
      },
      {
        id:52,
        productName: "Tuvil Fabric Baby Shorts",
        category: "garment",
        price: "Rs.490.00",
        image: "images/all/52.jpeg",
        link:"52.html",
      },
      {
        id:53,
        productName: "Blue And Red Kid Frock",
        category: "garments",
        price: "Rs.1190.00",
        image: "images/all/53.jpeg",
        link:"53.html",
      },
      {
        id:54,
        productName: "Avengers Boys short",
        category: "garments",
        price: "Rs.440.00",
        image: "images/all/54.jpeg",
        link:"54.html",
      },
      {
        id:55,
        productName: "Cross Over Plain Frock",
        category: "garments",
        price: "Rs.3490.00",
        image: "images/all/55.jpg",
        link:"55.html",
      },
      {
        id:56,
        productName: "Printed mosquito net double size",
        category: "house-hold",
        price: "Rs.2460.00",
        image: "images/all/56.jpg",
        link:"56.html",
      },
      {
        id:57,
        productName: "Baby cot mosquito net",
        category: "house-hold",
        price: "Rs.1760.00",
        image: "images/all/57.jpg",
        link:"57.html",
      }, 
      {
        id:58,
        productName: "King size printed mosquito net",
        category: "house-hold",
        price: "Rs.4160.00",
        image: "images/all/58.jpg",
        link:"58.html",
      },
      {
        id:59,
        productName: "Wall mounted mosquito net double size",
        category: "house-hold",
        price: "Rs.2560.00",
        image: "images/all/59.jpg",
        link:"59.html",
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
