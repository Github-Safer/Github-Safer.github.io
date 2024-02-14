// Author's Name: Safer Marie Pattawi
// Last Updated:Feb 15,2024
// Description: This is the  js of hamrie shop page which is the newly added feature in hamrie

let quantity1 = document.getElementById("quantity1");
let quantity2 = document.getElementById("quantity2");
let quantity3 = document.getElementById("quantity3");
let quantity4 = document.getElementById("quantity4");
let quantity5 = document.getElementById("quantity5");
let quantity6 = document.getElementById("quantity6");
let quantity7 = document.getElementById("quantity7");
let quantity8 = document.getElementById("quantity8");
let quantity9 = document.getElementById("quantity9");
let quantity10 = document.getElementById("quantity10");
let quantity11 = document.getElementById("quantity11");
let quantity12= document.getElementById("quantity12");
let quantity13 = document.getElementById("quantity13");
let quantity14 = document.getElementById("quantity14");
let quantity15= document.getElementById("quantity15");
let quantity16 = document.getElementById("quantity16");
let quantity17 = document.getElementById("quantity17");
let quantity18= document.getElementById("quantity18");
let quantity19 = document.getElementById("quantity19");
let quantity20 = document.getElementById("quantity20");
let quantity21= document.getElementById("quantity21");
let quantity22 = document.getElementById("quantity22");
let quantity23 = document.getElementById("quantity23");
let quantity24= document.getElementById("quantity24");
let quantity25 = document.getElementById("quantity25");
let quantity26 = document.getElementById("quantity26");
let quantity27= document.getElementById("quantity27");
let quantity28 = document.getElementById("quantity28");
let quantity29 = document.getElementById("quantity29");
let quantity30= document.getElementById("quantity30");


let table = document.getElementById("tableproduct");
 
let cart = localStorage.getItem ("HamrieShopCart");
let cartProduct = (cart) ? JSON.parse(cart) : [];



// 1st carousel
function getValue(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Vegetables",
                   pPrice: "350",
                   pQty: quantity1.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity1.value=""
}

function getValue2(event)
{
    event.preventDefault();
    let products = {
                    pName: "Pellets",
                    pDetail: "Grain formula",
                    pPrice: "400",
                    pQty: quantity2.value
                   };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity2.value=""
}

function getValue3(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Fruits",
                   pPrice: "100",
                   pQty: quantity3.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity3.value=""
}

function getValue4(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Dried Meal Worm",
                   pPrice: "200",
                   pQty: quantity4.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity4.value=""
}

function getValue5(event)
{
    event.preventDefault();
    let products = {
                   pName: "Pellet",
                   pDetail: "Luxury Formula",
                   pPrice: "450",
                   pQty: quantity5.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity5.value=""
}

function getValue6(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Sunflower Seeds",
                   pPrice: "100",
                   pQty: quantity6.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity6.value=""
}

function getValue7(event)
{
    event.preventDefault();
    let products = {
                   pName: "Pellet",
                   pDetail: "Luxury Formula",
                   pPrice: "550",
                   pQty: quantity7.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity7.value=""
}

function getValue8(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Meal Worm",
                   pPrice: "180",
                   pQty: quantity8.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity8.value=""
}

function getValue9(event)
{
    event.preventDefault();
    let products = {
                   pName: "Treats",
                   pDetail: "Freeze Dried Cheese",
                   pPrice: "300",
                   pQty: quantity9.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity9.value=""
}

//2nd carousel
function getValue10(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "450",
                   pQty: quantity10.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity10.value=""
}

function getValue11(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Natural",
                   pPrice: "200",
                   pQty: quantity11.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity11.value=""
}

function getValue12(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "400",
                   pQty: quantity12.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity12.value=""
}

function getValue13(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Hay",
                   pPrice: "200",
                   pQty: quantity13.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity13.value=""
}

function getValue14(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Dessert Sand",
                   pPrice: "350",
                   pQty: quantity14.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity14.value=""
}

function getValue15(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Reptile Sand",
                   pPrice: "500",
                   pQty: quantity15.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity15.value=""
}

function getValue16(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Wood Shavings",
                   pPrice: "350",
                   pQty: quantity16.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity16.value=""
}

function getValue17(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "450",
                   pQty: quantity17.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity17.value=""
}

function getValue18(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Paper Bedding",
                   pPrice: "600",
                   pQty: quantity18.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity18.value=""
}

function getValue19(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Aquarium Sand",
                   pPrice: "550",
                   pQty: quantity19.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity19.value=""
}

function getValue20(event)
{
    event.preventDefault();
    let products = {
                   pName: "Bedding",
                   pDetail: "Colored Paper Bedding",
                   pPrice: "750",
                   pQty: quantity20.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity20.value=""
}

function getValue21(event)
{
    event.preventDefault();
    let products = {
                   pName: "Sand",
                   pDetail: "Play Sand",
                   pPrice: "1000",
                   pQty: quantity21.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity21.value=""
}

//3rd carousel
function getValue22(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Plastic Wheel",
                   pPrice: "650",
                   pQty: quantity22.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity22.value=""
}

function getValue23(event)
{
    event.preventDefault();
    let products = {
                   pName: "Chew Toy",
                   pDetail: "Wood Chew Toy",
                   pPrice: "80",
                   pQty: quantity23.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity23.value=""
}

function getValue24(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Plastic wheel",
                   pPrice: "2500",
                   pQty: quantity24.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity24.value=""
}

function getValue25(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Multi Chamber Hideouts",
                   pPrice: "3500",
                   pQty: quantity25.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity25.value=""
}

function getValue26(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Ceramic Hideout",
                   pPrice: "550",
                   pQty: quantity26.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity26.value=""
}

function getValue27(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Ceramic Hideout",
                   pPrice: "500",
                   pQty: quantity27.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity27.value=""
}

function getValue28(event)
{
    event.preventDefault();
    let products = {
                   pName: "Wheel",
                   pDetail: "Metal Mesh Wheel",
                   pPrice: "150",
                   pQty: quantity28.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity28.value=""
}

function getValue29(event)
{
    event.preventDefault();
    let products = {
                   pName: "Toy",
                   pDetail: "Wood Tunel",
                   pPrice: "400",
                   pQty: quantity29.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity29.value=""
}

function getValue30(event)
{
    event.preventDefault();
    let products = {
                   pName: "Hideout",
                   pDetail: "Wood Hideout",
                   pPrice: "600",
                   pQty: quantity30.value
                  };

    cartProduct.push (products);
    localStorage.setItem("HamrieShopCart", JSON.stringify(cartProduct));

    quantity30.value=""
}
