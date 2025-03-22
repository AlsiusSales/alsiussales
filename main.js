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
                    <p id="drop-material" class="${myNewItem.rarity}">${myNewItem.material} (${myNewItem.quality})</p>
                </div>
            </div>
            <div id="box-bottom">
                <div id="drop-card">
                    <p id="drop-info-armor" class="yellow-text">Daño: (+${myNewItem.bonusdmg})</p>
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
                        <p id="drop-info-secondary" class="white-text"> Peso: ${myNewItem.wei} Kgs</p>
                        <p id="drop-info-secondary" class="gray-text"> Require ${myNewItem.sub} nivel ${myNewItem.reqlvl}</p>
                    </div>
                    <div id="bonus">
                        ${myNewItem.crit ? `<p id="drop-info-secondary" class="bonus-text"> Chance de critico +${myNewItem.crit}%</p>` : ''}
                        ${myNewItem.bonus0 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus0} +${myNewItem.bonus0num}</p>` : ''}
                        ${myNewItem.bonus1 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus1} +${myNewItem.bonus1num}</p>` : ''}
                        ${myNewItem.bonus2 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus2} +${myNewItem.bonus2num}</p>` : ''}
                        ${myNewItem.bonus3 ? `<p id="drop-info-secondary" class="bonus-text"> ${myNewItem.bonus3} +${myNewItem.bonus3num}</p>` : ''}
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

// Generic handler for dropdown changes
function handleDropdownChange(elementId, property, options) {
    document.getElementById(elementId).addEventListener("change", function(event) {
        myNewItem[property] = options[event.target.value] || event.target.value;
        createItem(myNewItem);
    });
}

// Dropdown handlers
handleDropdownChange('selectRarity', 'rarity', {
    especial: 'especial',
    magico: 'magico',
    epico: 'epico',
    legendario: 'legendario'
});

handleDropdownChange('selectMaterial', 'material', {
    hierro: 'Hierro',
    acero: 'Acero',
    aceroFino: 'Acero fino',
    aleacion: 'Aleacion de acero',
    xyme: 'Xymerald'
});

handleDropdownChange('selectQual', 'quality', {
    normal: 'Normal',
    mejorado: 'Mejorado',
    superior: 'Superior',
    gran: 'Gran',
    maestre: 'Maestre'
});

handleDropdownChange('selectFisDmg', 'bonus0', {
    punzante: 'Daño punzante',
    cortante: 'Daño cortante',
    aplastante: 'Daño aplastante'
});

handleDropdownChange('selectMagDmg', 'bonus1', {
    fuego: 'Daño de fuego',
    elec: 'Daño electrico',
    hielo: 'Daño de hielo'
});

handleDropdownChange('selectBonus2', 'bonus2', {
    velocidadataque: 'Velocidad de ataque',
    velocidadinvocacion: 'Velocidad de invocacion',
    fuerza: 'Fuerza',
    constitucion: 'Constitucion',
    concentracion: 'Concentracion',
    inteligencia: 'Inteligencia',
    destreza: 'Destreza',
    chancecritico: 'Chance de critico',
    dmgcritico: 'Daño critico',
    atributoclase: 'Atributo de clase'
});

handleDropdownChange('selectBonus3', 'bonus3', {
    velocidadataque: 'Velocidad de ataque',
    velocidadinvocacion: 'Velocidad de invocacion',
    fuerza: 'Fuerza',
    constitucion: 'Constitucion',
    concentracion: 'Concentracion',
    inteligencia: 'Inteligencia',
    destreza: 'Destreza',
    chancecritico: 'Chance de critico',
    dmgcritico: 'Daño critico',
    atributoclase: 'Atributo de clase'
});



document.getElementById('selectLvl').addEventListener("input", function(event) {
  
    myNewItem.reqlvl = event.target.value;
    
    createItem(myNewItem);
});

document.getElementById('selectBonusDmg').addEventListener("input", function(event) {

  myNewItem.bonusdmg = event.target.value;
  
  createItem(myNewItem);
});

document.getElementById('selectCrit').addEventListener("input", function(event) {

    myNewItem.crit = event.target.value;
    
    createItem(myNewItem);
});

document.getElementById('selectFisDmgNum').addEventListener("input", function(event) {

  myNewItem.bonus0num = event.target.value;
  
  createItem(myNewItem);
});

document.getElementById('selectMagDmgNum').addEventListener("input", function(event) {
  
    myNewItem.bonus1num = event.target.value;
    
    createItem(myNewItem);
});

document.getElementById('selectBonus2Num').addEventListener("input", function(event) {
  
    myNewItem.bonus2num = event.target.value;
    
    createItem(myNewItem);
});

document.getElementById('selectBonus3Num').addEventListener("input", function(event) {
  
    myNewItem.bonus3num = event.target.value;
    
    createItem(myNewItem);
});