  
  let filterProduct=[];
  let galleryarray = [
    
      {
        id:1,
        productName: "Sri Lanka hand made products",
        category: "craft",
        price: "Rs.500.00",
        des:"Ornamental wood items featuring elephants are popular decorative pieces that are often intricately carved and finished with traditional techniques. These items, which can range from small figurines to larger home decor pieces, are made from a variety of different types of wood, including teak, mahogany, and rosewood. Elephant-themed ornamental wood items are particularly popular in countries like India and Sri Lanka, where the elephant is an important cultural symbol and is revered for its strength, intelligence, and gentle nature. These items are often used as decorative accents in homes and offices and are also popular as souvenirs and gifts. In addition to being beautiful and functional, ornamental wood items featuring elephants are also a valued part of cultural heritage in many parts of the world.",
        image: "images/all/1.jpg",
      },
      {
        id:2,
        productName: "Sri Lanka hand made products(with elephant)",
        category: "craft",
        price: "Rs.450.00",
        des:"Ornamental wood items featuring elephants are popular decorative pieces that are often intricately carved and finished with traditional techniques. These items, which can range from small figurines to larger home decor pieces, are made from a variety of different types of wood, including teak, mahogany, and rosewood. Elephant-themed ornamental wood items are particularly popular in countries like India and Sri Lanka, where the elephant is an important cultural symbol and is revered for its strength, intelligence, and gentle nature. These items are often used as decorative accents in homes and offices and are also popular as souvenirs and gifts. In addition to being beautiful and functional, ornamental wood items featuring elephants are also a valued part of cultural heritage in many parts of the world.",
        image: "images/all/2.jpg",
      },
      {
        id:3,
        productName: "Hand made coconut shell based items-ship",
        category: "craft",
        price: "Rs.950.00",
        des:"coconut shell item",
        image: "images/all/3.jpg",
      },
      {
        id:4,
        productName: "wooden horse",
        category: "craft",
        price: "Rs.4700.00",
        des:"Are you looking for a unique and beautiful way to fill your space? Look no further than our wooden ornamental horse! These stunning pieces are handcrafted by skilled artisans using high-quality wood and traditional techniques.Each horse is adorned with intricate carvings and designs, making them not only practical, but also a work of art. The elegant and timeless style of these boxes make them suitable for any room or decor.They are also eco-friendly. Wood is a natural and renewable resource, making these horses a sustainable choice.In addition to being perfect for storing your notes and documents, these horses also make for a thoughtful and appreciated gift. Surprise a loved one with one of these beautiful horse, or treat yourself to a piece of functional art for your home or office.Order yours today and add a touch of elegance and sustainability to your space!",
        image: "images/all/4.jpg",
      },
      {
        id:5,
        productName: "Single ship - light weight wooden table top",
        category: "craft",
        price: "Rs.850.00",
        des:"Single ship - light weight wooden table top",
        image: "images/all/5.jpg",
      },
      {
        id:6,
        productName: "Polkatu Pahana",
        category: "craft",
        price: "Rs.3000.00",
        des:"This is coconut shell base product",
        image: "images/all/6.jpg",
      },
      {
        id:7,
        productName: "Sri Lanka Best Ginger - 1kg",
        category: "food",
        price: "Rs.900.00",
        des:"Ginger (Zingiber officinale) is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.[2] It is a herbaceous perennial which grows annual pseudostems (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades. The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome on separate shoots.",
        image: "images/all/7.jpg",
      },
      {
        id:8,
        productName: "Hand painting canvas wall art(90*60cm)",
        category: "art",
        price: "Rs.9830.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing",
        image: "images/all/8.jpg", 
      },
      {
        id:9,
        productName: "Hand painting canvas wall art",
        category: "art",
        price: "Rs.7000.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/9.jpg",  
      },
      {
        id:10,
        productName: "Hand painting canvas wall art(A3 Size- traditional art)",
        category: "art",
        price: "Rs.5600.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/10.jpg",
      },
      {
        id:11,
        productName: "Hand painting canvas wall art(A4 size)",
        category: "art",
        price: "Rs.4710.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/11.jpg",
      },
      {
        id:12,
        productName: "Hand painting canvas wall art(A4size with frame )",
        category: "art",
        price: "Rs.4210.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/12.jpg",
      },
      {
        id:13,
        productName: "Hand painting canvas wall art(A4size)with wood frame",
        category: "art",
        price: "Rs.3700.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/13.jpg",
      },
      {
        id:14,
        productName: "Hand painting canvas wall art(A3 size)",
        category: "art",
        price: "Rs.5810.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/14.jpg",
      },
      {
        id:15,
        productName: "Hand painting canvas wall art with wood frame",
        category: "art",
        price: "Rs.7720.00",
        des:"*Acrylic painting on canvas | *Painted by Hand | *K Art Gallery | *Quality canvas painting | *Quality pencil drawing | You can get paintings is any size and any colour which is matches with your living room ,Bed room ,kitchen room ,your workshop ,office room restaurant ETC….",
        image: "images/all/15.jpg",
      },
      {
        id:16,
        productName: "Konda kewm",
        category: "food",
        price: "Rs.50.00",
        des:"konda kewm traditional foods",
        image: "images/all/16.jpg",
      },
      {
        id:17,
        productName: "kokis",
        category: "food",
        price: "Rs.50.00",
        des:"Kokis traditional foods",
        image: "images/all/17.jpg",
      },
      {
        id:18,
        productName: "Honey rings",
        category: "food",
        price: "Rs.50.00",
        des:"Honey Rings Traditional foods",
        image: "images/all/18.png",
      },
      {
        id:19,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/19.jpg",
      },
      {
        id:20,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/20.jpg",
      },
      {
        id:21,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/21.jpg",
      },
      {
        id:22,
        productName: "oil spoons",
        category: "eco",
        price: "Rs.250.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/22.jpg",
      },
      {
        id:23,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.200.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/23.jpg",
      },
      {
        id:24,
        productName: "coconut spoons kithul hadel good finish",
        category: "eco",
        price: "Rs.300.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/24.jpg",
      },
      {
        id:25,
        productName: "coconut spoons",
        category: "eco",
        price: "Rs.100.00",
        des:"Coconut Spoons,Good Finish 100% , Good product || Buy Now",
        image: "images/all/25.jpg",
      },
      {
        id:26,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        des:"100% natural product",
        image: "images/all/26.jpg",
      },
      {
        id:27,
        productName: "String hoppers plates",
        category: "eco",
        price: "Rs.60.00",
        des:"100% natural product",
        image: "images/all/27.jpg",
      },
      {
        id:28,
        productName: "Salt bawl",
        category: "eco",
        price: "Rs.1126.00",
        des:"COCONUT & COCONUT BASED PRODUCTS || Good Product || Buy Now",
        image: "images/all/28.jpg",
      },
      {
        id:29,
        productName: "Eco Bag",
        category: "eco",
        price: "Rs.700.00",
        des:"100% natural product-eco friendly bag",
        image: "images/all/29.jpg",
      },
      {
        id:30,
        productName: "Coconut husk Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        des:"Coconut chips Divipubuduwa Mundalam || 25 mm coconut chips || 100% Naturel || Buy Now ||",
        image: "images/all/30.jpeg",
      },
      {
        id:31,
        productName: "Ceylon Cinnamon Sticks",
        category: "food",
        price: "Rs.340.00",
        des:"100% Organic Ceylon Cinnamon Sticks, Premium Grade Ceylon Cinnamon Sticks, cinnamon roll 100g",
        image: "images/all/31.png",
      },
      {
        id:32,
        productName: "Best Sri Lanka Spices Black pepper-250g",
        category: "food",
        price: "Rs.1099.00",
        des:"Black pepper (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit (the peppercorn), which is usually dried and used as a spice and seasoning.",
        image: "images/all/32.jpg",
      },
      {
        id:33,
        productName: "Organic fresh Gotukola 1kg",
        category: "food",
        price: "Rs.375.00",
        des:"this is healthy food 100% and it is organic fresh foods lot of resources having on gotukola(lot of vitamins)",
        image: "images/all/33.jpg",
      },
      {
        id:34,
        productName: "Candid papaya, Papaya Jujubes (100g)",
        category: "food",
        price: "Rs.500.00",
        des:"no added artificial colours, flavors ,preservatives Only added suger and dehydrated ..made by home grown fresh natural papaya..100% natural",
        image: "images/all/34.jpg",
      },
      {
        id:35,
        productName: "Dehydrated jack fruits 100g",
        category: "food",
        price: "Rs.6.00",
        des:"No added artificial colours flavors preservatives.Fast food,snacks.",
        image: "images/all/35.jpg",
      },
      {
        id:36,
        productName: "Sri Lanka Best Organic Coconut Butter 400g",
        category: "food",
        price: "Rs.1990.00",
        des:"Coconut butter is similar to nut butter in concept - it's dried desiccated coconut ground down, until it releases its oils and becomes a buttery paste. It tastes quite naturally sweet, and almost has a fudge or shortbread type texture to it. It's a great pantry staple to have on hand as you can use it in loads of applications - sweet and savoury. Here are a few of my favourite ideas:",
        image: "images/all/36.jpg",
      },
      {
        id:37,
        productName: "Organic Roasted Coconut Chip",
        category: "food",
        price: "Rs.450.00",
        des:"Coconut chips are made from fresh, sliced coconut meat harvested from mature Sri Lankan coconuts. It is a perfect snack straight from the bag, or add a satisfying crunch to your smoothie bowl, salad, or yogurt. Coconut chips do not contain gluten, dairy, and soy, or preservatives. Number One Organic Coconut Chips Supplier and manufacture in Sri Lanka.Coconut chips exporters in Sri Lanka.",
        image: "images/all/37.jpg",
      },
      {
        id:38,
        productName: "Coconut husk chips 1kg",
        category: "eco",
        price: "Rs.1000.00",
        des:"coconut chips",
        image: "images/all/38.jpeg",
      },
      {
        id:39,
        productName: "100% Best Naturel Coconut Milk Sri lanka",
        category: "food",
        price: "Rs.1000.00",
        des:"Coconut milk is an opaque, milky-white liquid extracted from the grated pulp of mature coconuts.[1] The opacity and rich taste of coconut milk are due to its high oil content, most of which is saturated fat. Coconut milk is a traditional food ingredient used in Southeast Asia, Oceania, South Asia, and East Africa. It is also used for cooking in the Caribbean, tropical Latin America, and West Africa, where coconuts were introduced during the colonial era.",
        image: "images/all/39.png",
      },
      {
        id:40,
        productName: "sinhala pickles",
        category: "food",
        price: "Rs.924.00",
        des:"Sinhala pickles; one of the Sri lankan best traditional pickels which is use for all festive occasions .These pickels are 100% homemade product without artificial food preservatives.If you like these homemade pickels, you can oder small quantities and bulk quantities.Also we are making these pickels after your order because we want to give you fresh product.These products can be use withi 3 month from the manufacture date.",
        image: "images/all/40.jpg",
      },
      {
        id:41,
        productName: "Curry Leaves Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        des:"Curry Leaves Tea Bags 100% || Naturel 100% || Helthy Food || Buy Now",
        image: "images/all/41.jpg",
      },
      {
        id:42,
        productName: "Heen Bowitiya ( Osbeckia Octandra) Tea Bags 50g",
        category: "food",
        price: "Rs.540.00",
        des:"Heen Bowitiya ( Osbeckia Octandra) Tea Bags 50g || 100% natural products || buy now ",
        image: "images/all/42.jpg",
      },
      {
        id:43,
        productName: "Dehydrate Jackfruit 100g",
        category: "food",
        price: "Rs.280.00",
        des:"Dehydrate Jackfruit 100g || 100% Naturel || 100% Helthy Food",
        image: "images/all/43.jpg",
      },
      {
        id:44,
        productName: "lime pickles",
        category: "food",
        price: "Rs.550.00",
        des:"Lime Pickle 250g 50% off discount",
        image: "images/all/44.jpg",
      },
      {
        id:45,
        productName: "Grain porridge",
        category: "food",
        price: "Rs.1025.00",
        des:"Ingredients : Green gram,Sesame,Kalu heenati haal,Kurakkan flour,Thana haal,Corn flour,Sudu heenati haal,Meneri haal,Suwandal haal,CornNet weight : 600g ( 3 Packets )Brand : Sri Ganesha Ayurveda products Made in Sri Lanka No preservatives added",
        image: "images/all/45.jpeg",
      },
      {
        id:46,
        productName: "Coconut Chips 25mm 1kg",
        category: "eco",
        price: "Rs.260.00",
        des:"Celo Coconut chips kaluthara || Coconut Chips 25mm 1kg ||oraginal",
        image: "images/all/46.jpeg",
      },
      {
        id:47,
        productName: "Crochet (Woolen) Baby Girl/Boy shoes",
        category: "garments",
        price: "Rs.650.00",
        des:"Very smooth and worm | Comfortable for baby| Made of acrylic wool| Highly stretching| Completely handmade| Hand washable| Very smooth and worm| Comfortable for baby| Made of acrylic wool| Highly stretching| Completely handmade| Hand washable",
        image: "images/all/47.jpg",
      },
      {
        id:48,
        productName: "SRYN - Polo Regular Collar Tshirts",
        category: "garments",
        price: "Rs.1760.00",
        des:"SRYN - Polo Regular Collar Tshirts [Fine Pique] S | M | L | XL Ratio: S - 6, M - 12, L - 12, XL - 6 Minimum of Quantity 36Pcs lkr 1,260/- (Wholesale Only )",
        image: "images/all/48.jpg",
      },
      {
        id:49,
        productName: "Blue bathik Frock",
        category: "garments",
        price: "Rs.3100.00",
        des:"Blue bathik Frock",
        image: "images/all/49.jpeg",
      },
      {
        id:50,
        productName: "pencil case",
        category: "garments",
        price: "Rs.350.00",
        des:"pencil case Sri Lankan made",
        image: "images/all/50.jpg",
      },
      {
        id:51,
        productName: "Baby Frock 3/4/5/6 Year",
        category: "garments",
        price: "Rs.420.00",
        des:"Nipuna saviya Eheliyagoda Baby Frock 3/4/5/6 | Year100% Good product | Buy Now",
        image: "images/all/51.jpeg",
      },
      {
        id:52,
        productName: "Tuvil Fabric Baby Shorts",
        category: "garment",
        price: "Rs.490.00",
        des:"Nipuna saviya Eheliyagoda | Year100% Good product | Buy Now",
        image: "images/all/52.jpeg",
      },
      {
        id:53,
        productName: "Blue And Red Kid Frock",
        category: "garments",
        price: "Rs.1190.00",
        des:"Nipuna saviya Eheliyagoda | Year100% Good product | Buy Now",
        image: "images/all/53.jpeg",
      },
      {
        id:54,
        productName: "Avengers Boys short",
        category: "garments",
        price: "Rs.440.00",
        des:"Nipuna saviya | Year100% Good product | Buy Now",
        image: "images/all/54.jpeg",
      },
      {
        id:55,
        productName: "Cross Over Plain Frock",
        category: "garments",
        price: "Rs.3490.00",
        des:"Cross over beautiful frock Plain frock with a beautiful print It’s matching to wear at any occasions3 Angle buttons of blouse Best material to wear and use",
        image: "images/all/55.jpg",
      },
      {
        id:56,
        productName: "Printed mosquito net double size",
        category: "house-hold",
        price: "Rs.2460.00",
        des:"Printed mosquito net double size",
        image: "images/all/56.jpg",
      },
      {
        id:57,
        productName: "Baby cot mosquito net",
        category: "house-hold",
        price: "Rs.1760.00",
        des:"Baby cot mosquito net",
        image: "images/all/57.jpg",
      }, 
      {
        id:58,
        productName: "King size printed mosquito net",
        category: "house-hold",
        price: "Rs.4160.00",
        des:"King size printed mosquito net",
        image: "images/all/58.jpg",
      },
      {
        id:59,
        productName: "Wall mounted mosquito net double size",
        category: "house-hold",
        price: "Rs.2560.00",
        des:"Wall mounted mosquito net double size",
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
                <a href="productInfor.html?id=${currarray[i].id}" class="btn">view product</a>
            </div>
        
        `/*this is essential ``*/
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


