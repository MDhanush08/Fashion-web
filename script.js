console.log('Welcome to my website')

let shopping=document.querySelector('#shopping');
let container1 =document.querySelector('#container1');
let close =document.querySelector('#close')


shopping.addEventListener('click',()=>{
    console.log('I am clicked');
    container1.classList.add('active');
})

close.addEventListener('click',()=>{
    container1.classList.remove('active');
})

// Count Set code
let count = 0;

function addToCart(cartType) {
   
    count++;
    document.querySelector('.cart-count').innerText = count;
    
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    const removeButton = document.createElement('button');
// let amount12 create
       var amount12='';
       let imgSrc='';
    if (cartType === 'cart1') {
        imgSrc='yellowTS.png';
        newItem.textContent = `T-Shirt `;
    } 
    else if(cartType === 'cart2') { 
        imgSrc='hoodie.png';
        newItem.textContent = `Hoodie`;
    }
    else if(cartType === 'cart3') { 
        imgSrc='trouser.png';
        newItem.textContent = `Shorts`;
    }
    else if(cartType === 'cart4') { 
        imgSrc='coat.png';
        newItem.textContent = `Black-Coat`;
    }
    else if(cartType === 'cart5') { 
        imgSrc='Checked shirt.png';
        newItem.textContent = `Shirt`;
    }
    else if(cartType === 'cart6') { 
        imgSrc='jean1.png';
        newItem.textContent = `Jeans-Pant`;
    }
    

    // Create and style the remove button
    removeButton.textContent = '✖️';
    removeButton.style.backgroundColor=' #453E3B';
    removeButton.style.color='rgb(255, 255, 255)';

    removeButton.style.border='none';
    
    removeButton.onclick = function() {
        cartItems.removeChild(newItem);
        count--;
        if(count === 0){
            count='';
        }
        document.querySelector('.cart-count').innerText = count;
      
    };


     /// image add 
     const img = document.createElement('img');
     img.src = imgSrc;
     img.alt = cartType;
     img.style.width = '50px'; 
     img.style.height = '50px'; 
     img.style.marginRight = '10px';

     const textSpan = document.createElement('span');
     textSpan.textContent = newItem.textContent;

     newItem.textContent = '';
     newItem.appendChild(img);
     newItem.appendChild(textSpan);


    // Append the remove button to the list item
    newItem.appendChild(removeButton);

    // Append the list item to the cart items list
    cartItems.appendChild(newItem);
}

