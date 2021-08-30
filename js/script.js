// Impostazione del prezzo base del panino

// Necessario nome per ordinare l'hamburger

// Impostare il calcolo del prezzo in base agli ingredienti scelti

// Calcolo del prezzo tramite pressione del bottone
// Con relativo sconto applicabile

// Output del prezzo finale sullo schermo

let priceBurger; 
let nameBurger;

const coupons = ['BOOLEAN','ONSALE','GETBURGER'];
let ingredients = [];

let bottone = document.getElementById('btn-calculate');



bottone.addEventListener('click',
function() {
    nameBurger = document.getElementById('name-burger').value;    
    priceBurger = 10;

    if (nameBurger == 0)
    {
        alert("You have to put a name for me to call when the burger is ready!");
    }else
    {
        ingredients = document.getElementsByClassName('ingredient');

        for (let i = 0; i < ingredients.length; i++)
        {
            if (ingredients[i].checked)
            {
                priceBurger += parseInt(ingredients[i].value);
            }
        }

        if(coupons.includes(document.getElementById('coupon').value))
        {
            priceBurger = Math.floor(priceBurger * 0.8);
        }

        console.log(ingredients);

        document.getElementById('price').innerHTML = priceBurger + " &euro;";
    }
});

// while (docu)