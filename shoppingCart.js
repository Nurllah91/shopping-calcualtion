 
 const shoppingCart = [
    {name: 'panjabi', price: 9000, quantity: 3},
    {name: 'pajama', price: 900, quantity: 3},
    {name: 'tupi', price: 500, quantity: 3},
    {name: 'watch', price: 7000, quantity: 3},
    {name: 'sunglass', price: 2000, quantity: 3}
 ]

 function productsCoast(products){
    let coast = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        const productTotal = product.price * product.quantity;
         coast = coast + productTotal;
    }
    return coast;
 }


 const totalCoast = productsCoast(shoppingCart);
 
 console.log("Toal coast today", totalCoast)