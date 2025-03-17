import templatesJson from './droptemplates.json' with {type: 'json'};

let templates = templatesJson.templateList;

let myNewItem;

function renderWeaponTemplate(item) {
    return`
        <div id="item" class="item-card">
            <div id="box-top">
                <img src="${myNewItem.thumbnail}" alt="" id="drop-thumbnail">
                <div id="text-box"> 
                    <p id="drop-name" class="${myNewItem.rarity}">${myNewItem.name}</p>
                    <p id="drop-material" class="${myNewItem.rarity}">${myNewItem.material}</p>
                </div>
            </div>
            <div id="box-bottom">
                <div id="drop-card">
                    <p id="drop-info-armor" class="yellow-text">Damage: (+)</p>
                    <div id="damagepanel">
                        <img id="dmgtype-thumbnail" src="${myNewItem.dmgtype0}" alt=""> 
                        <p id="dmgnumber" class="yellow-text">${myNewItem.dmg0}</p>
                        <img id="dmgtype-thumbnail" src="${myNewItem.dmgtype1}" alt=""> 
                        <p id="dmgnumber" class="yellow-text">${myNewItem.dmg1}</p>
                    </div>
                    <div id="secondary">
                        <p id="drop-info-secondary" class="white-text"> Categoria: ${myNewItem.cat}</p>
                        <p id="drop-info-secondary" class="white-text"> Velocidad: ${myNewItem.speed}</p>
                        ${myNewItem.range ? `<p id="drop-info-secondary" class="white-text"> Rango: ${myNewItem.range}</p>` : ""}
                        ${myNewItem.dur ? `<p id="drop-info-secondary" class="white-text"> Durabilidad: ${myNewItem.dur}/${myNewItem.dur}</p>` : ""}
                        <p id="drop-info-secondary" class="white-text"> Peso: ${myNewItem.wei} Kgs</p>
                        <p id="drop-info-secondary" class="yellow-text">Item nivel ${myNewItem.itemlvl}</p>
                        <p id="drop-info-secondary" class="gray-text"> Require ${myNewItem.sub} nivel ${myNewItem.reqlvl}</p>
                    </div>
                    <div id="bonus">
                        ${myNewItem.crit ? `<p id="drop-info-secondary" class="bonus-text"> Chance de critico +${myNewItem.crit}%</p>` : ''}
                        ${myNewItem.bonus0 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus0}</p>` : ''}
                        ${myNewItem.bonus1 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus1}</p>` : ''}
                        ${myNewItem.bonus2 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus2}</p>` : ''}
                        ${myNewItem.bonus3 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus3}</p>` : ''}
                        <div id="enhancement">
                            ${myNewItem.hassocket ? `<p id="drop-info-secondary" class="${myNewItem.isenhanced}"> ${myNewItem.socket0}</p>` : ''}
                            ${myNewItem.hassocket ? `<img src="${myNewItem.socketthumbnail1}" alt="">` : ''}
                        </div>
                    </div>
                    <p id="drop-info-secondary" class="${myNewItem.rarity}">${myNewItem.rarity !== 'normal' ? myNewItem.rarity : ''}</p>
                </div>
            </div>
        </div>
    `;   
}

function createItem(item){
    document.getElementById("item-template").innerHTML = renderWeaponTemplate(item);
}

function updateItem(item){
    myNewItem = templates[item];
    createItem(item);
}

updateItem(0);

document.getElementById("item-espada-caballero-elite").addEventListener("click", () => updateItem(0));
document.getElementById("item-lanza-caballero-elite").addEventListener("click", () => updateItem(1));
document.getElementById("item-hacha-caballero-elite").addEventListener("click", () => updateItem(2));
document.getElementById("item-martillo-caballero-elite").addEventListener("click", () => updateItem(3));


document.getElementById("item-check").addEventListener("click", () => console.log(myNewItem));