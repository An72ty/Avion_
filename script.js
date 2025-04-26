let shop_items = document.getElementsByClassName('shop-item');


[...shop_items].forEach(shop_item => {
    let img = shop_item.getElementsByClassName('shop-item-preview')[0];
    let price = shop_item.getElementsByClassName('price')[0];
    let name = shop_item.getElementsByClassName('name')[0];

    shop_item.addEventListener('mouseover', () => {  
        img.style.transform = 'scale(1.03, 1.03)';
        price.style.transform = 'scale(0.9, 0.9) translate(-19px, 10px)';
        name.style.transform = 'translate(-3px, 10px)';
    });
    shop_item.addEventListener('mouseout', () => {
        img.style.transform = '';
        price.style.transform = '';
        name.style.transform = '';
    })
});