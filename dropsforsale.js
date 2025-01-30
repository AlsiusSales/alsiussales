import itemJson from './droplist.json' with { type: "json" };
const ALLITEMS = itemJson.droplist;

// Construccion de carta de objeto
function renderItemCard(item) {
    return `
        <div id="item${item.id}" class="item-card">
            <div id="box-top">
                <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
                <div id="text-box"> 
                    <p id="drop-name" class="${item.rarity}">${item.name}</p>
                    <p id="drop-material" class="${item.rarity}">${item.material}</p>
                </div>
                <img src="" alt="" id="drop-x">
            </div>
            <div id="box-bottom">
                <div id="drop-card">
                    <p id="drop-info-armor" class="yellow-text">Damage: (+${item.dmgplus})</p>
                    <div id="damagepanel">
                        <img id="dmgtype-thumbnail" src="${item.dmgtype0}" alt=""> 
                        <p id="dmgnumber" class="yellow-text">${item.dmg0}</p>
                        <img id="dmgtype-thumbnail" src="${item.dmgtype1}" alt=""> 
                        <p id="dmgnumber" class="yellow-text">${item.dmg1}</p>
                    </div>
                    <div id="secondary">
                        <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                        <p id="drop-info-secondary" class="white-text"> Attack speed: ${item.speed}</p>
                        <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                        <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                        <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                        <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                    </div>
                    <div id="bonus">
                        <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                        <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                        <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                        ${item.bonus3 ? `<p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>` : ''}
                        ${item.bonus4 ? `<p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>` : ''}
                        <div id="enhancement">
                            <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.socket1}</p>
                            <img src="${item.socketthumbnail1}" alt="">
                        </div>
                    </div>
                    <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
                </div>
            </div>
            <p id="price">${item.owner} - ${item.price} Mgs</p>                    
        </div>
    `;
}

// Renderizar todos los objetos
function renderAll() {
    document.getElementById("drops-for-sale").innerHTML = '';
    ALLITEMS.forEach(item => {
        document.getElementById(item.setid).innerHTML += renderItemCard(item);
    });
}

// Renderizar objetos por su clase o sublcase
function renderItems(sub1, sub2) {
    document.getElementById("drops-for-sale").innerHTML = '';
    ALLITEMS.forEach(item => {
        if (item.sub === sub1 || item.sub === sub2) {
            document.getElementById(item.setid).innerHTML += renderItemCard(item);
        }
    });
}

// Event listeners fpara botones de filtro
document.getElementById("button-all").addEventListener("click", () => renderAll());
document.getElementById("button-barbarian").addEventListener("click", () => renderItems("Barbarian", "Warrior"));
document.getElementById("button-knight").addEventListener("click", () => renderItems("Knight", "Warrior"));
document.getElementById("button-conjurer").addEventListener("click", () => renderItems("Conjurer" , "Mage"));
document.getElementById("button-warlock").addEventListener("click", () => renderItems("Warlock", "Mage"));
document.getElementById("button-hunter").addEventListener("click", () => renderItems("Hunter", "Archer"));
document.getElementById("button-marksman").addEventListener("click", () => renderItems("Marksman", "Archer"));