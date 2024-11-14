import itemJson from './droplist.json' with { type: "json" };
const ALLITEMS = itemJson.droplist

//primer renderizada de todos los items

ALLITEMS.forEach(item => { 
    if(item.type == "weapon" && item.rarity == "Magical") {
   document.getElementById(item.setid).innerHTML +=`
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
   `}
else if(item.type == "weapon" && item.rarity == "Epic") {
   document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
   `}
else if(item.type == "weapon" && item.rarity == "Legendary") {
   document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
   `}
else if(item.type == "ranged" && item.rarity == "Magical") {
    document.getElementById(item.setid).innerHTML +=`
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
                            <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                            <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                            <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                            <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                            <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                        </div>
                        <div id="bonus">
                            <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                            <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                            <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
    `}
else if(item.type == "ranged" && item.rarity == "Epic") {
    document.getElementById(item.setid).innerHTML +=`
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
                                <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                            </div>
                            <div id="bonus">
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
    `}
else if(item.type == "ranged" && item.rarity == "Legendary") {
    document.getElementById(item.setid).innerHTML +=`
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
                                <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                            </div>
                            <div id="bonus">
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
    `}
else if(item.type == "armor" && item.rarity == "Magical") {
   document.getElementById(item.setid).innerHTML +=`
   <div id="item${item.id}" class="item-card">
   <div id="box-top">
     <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
       <div id="text-box"> 
           <p id="drop-name" class="${item.rarity}">${item.name}</p>
           <p id="drop-material" class="${item.rarity}">${item.material}</p>
       </div>
     <img src="thumbs/drop-x.png" alt="" id="drop-x">
   </div>
   <div id="box-bottom">
       <div id="drop-card">
       
           <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
           <div id="resis">
               <div id="resis-thumbnail">
                       <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                       <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                   </div>
   
               <div id="resis-text">
                   <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
               </div>
           </div>
           <div id="secondary">
               <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
           </div>
           <div id="bonus">
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
               <div id="enhancement">
                   <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                   <img src="${item.enhathumbnail1}" alt="">
               </div>
           </div>
           <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
       </div>
   </div>
   <p id="price">${item.owner} - ${item.price} Mgs</p>                    
   </div>
   
   `}
else if(item.type == "armor" && item.rarity == "Epic") {
   document.getElementById(item.setid).innerHTML +=`
   <div id="item${item.id}" class="item-card">
   <div id="box-top">
     <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
       <div id="text-box"> 
           <p id="drop-name" class="${item.rarity}">${item.name}</p>
           <p id="drop-material" class="${item.rarity}">${item.material}</p>
       </div>
     <img src="thumbs/drop-x.png" alt="" id="drop-x">
   </div>
   <div id="box-bottom">
       <div id="drop-card">
       
           <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
           <div id="resis">
               <div id="resis-thumbnail">
                       <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                       <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                   </div>
   
               <div id="resis-text">
                   <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
               </div>
           </div>
           <div id="secondary">
               <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
           </div>
           <div id="bonus">
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
               <div id="enhancement">
                   <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                   <img src="${item.enhathumbnail1}" alt="">
               </div>
           </div>
           <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
       </div>
   </div>
   <p id="price">${item.owner} - ${item.price} Mgs</p>                    
   </div>
   
   `}
else if(item.type == "armor" && item.rarity == "Legendary") {
   document.getElementById(item.setid).innerHTML +=`
   <div id="item${item.id}" class="item-card">
   <div id="box-top">
     <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
       <div id="text-box"> 
           <p id="drop-name" class="${item.rarity}">${item.name}</p>
           <p id="drop-material" class="${item.rarity}">${item.material}</p>
       </div>
     <img src="thumbs/drop-x.png" alt="" id="drop-x">
   </div>
   <div id="box-bottom">
       <div id="drop-card">
       
           <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
           <div id="resis">
               <div id="resis-thumbnail">
                       <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                       <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                       <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                   </div>
   
               <div id="resis-text">
                   <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                   <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
               </div>
           </div>
           <div id="secondary">
               <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
           </div>
           <div id="bonus">
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
               <div id="enhancement">
                   <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                   <img src="${item.enhathumbnail1}" alt="">
               </div>
           </div>
           <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
       </div>
   </div>
   <p id="price">${item.owner} - ${item.price} Mgs</p>                    
   </div>
   
   `}
})

//creacion de event listeners para cada boton del hmtl

let allButton = document.getElementById("button-all");
allButton.addEventListener("click", renderAll);

let barbButton = document.getElementById("button-barbarian");
barbButton.addEventListener("click", renderBarbarian);

let conjuButton = document.getElementById("button-conjurer");
conjuButton.addEventListener("click", renderConjurer);

let hunterButton = document.getElementById("button-hunter");
hunterButton.addEventListener("click", renderHunter);

let knightButton = document.getElementById("button-knight");
knightButton.addEventListener("click", renderKnight);

let marksButton = document.getElementById("button-marksman");
marksButton.addEventListener("click", renderMarksman);

let lockButton = document.getElementById("button-warlock");
lockButton.addEventListener("click", renderWarlock);


//funciones para renderizar los items pertenecientes a un grupo dependiendo del boton que se toca

function renderAll() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => { 
        if(item.type == "weapon" && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
       `}
   else if(item.type == "weapon" && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
   else if(item.type == "weapon" && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
   else if(item.type == "ranged" && item.rarity == "Magical") {
        document.getElementById(item.setid).innerHTML +=`
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
                                <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                            </div>
                            <div id="bonus">
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
        `}
   else if(item.type == "ranged" && item.rarity == "Epic") {
        document.getElementById(item.setid).innerHTML +=`
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
                                    <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                    <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                    <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                    <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                    <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                                </div>
                                <div id="bonus">
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
        `}
   else if(item.type == "ranged" && item.rarity == "Legendary") {
        document.getElementById(item.setid).innerHTML +=`
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
                                    <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                    <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                    <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                    <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                    <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                                </div>
                                <div id="bonus">
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
        `}
   else if(item.type == "armor" && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
   else if(item.type == "armor" && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
   else if(item.type == "armor" && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
})
}

function renderBarbarian() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "weapon" && (item.sub == "Barbarian" || item.sub == "Warrior") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
       `}
    else if(item.type == "weapon" && (item.sub == "Barbarian" || item.sub == "Warrior")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "weapon" && (item.sub == "Barbarian" || item.sub == "Warrior")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "armor" && (item.sub == "Barbarian" || item.sub == "Warrior")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Barbarian" || item.sub == "Warrior")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Barbarian" || item.sub == "Warrior")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
})
}

function renderConjurer() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "ranged" && (item.sub == "Conjurer" || item.sub == "Mage") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                           </div>
                           <div id="bonus">
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Conjurer" || item.sub == "Mage")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Conjurer" || item.sub == "Mage")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "tunic" && (item.sub == "Conjurer" || item.sub == "Mage")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "tunic" && (item.sub == "Conjurer" || item.sub == "Mage")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "tunic" && (item.sub == "Conjurer" || item.sub == "Mage")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
})
}

function renderHunter() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "ranged" && (item.sub == "Hunter" || item.sub == "Archer") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                           </div>
                           <div id="bonus">
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Hunter" || item.sub == "Archer")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Hunter" || item.sub == "Archer")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "armor" && (item.sub == "Hunter" || item.sub == "Archer")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Hunter" || item.sub == "Archer")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Hunter" || item.sub == "Archer")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
})
}

function renderKnight() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "weapon" && (item.sub == "Knight" || item.sub == "Warrior") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
       `}
    else if(item.type == "weapon" && (item.sub == "Knight" || item.sub == "Warrior")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "weapon" && (item.sub == "Knight" || item.sub == "Warrior")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "armor" && (item.sub == "Knight" || item.sub == "Warrior")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Knight" || item.sub == "Warrior")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Knight" || item.sub == "Warrior")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
})
}

function renderMarksman() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "ranged" && (item.sub == "Marksman" || item.sub == "Archer") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                           </div>
                           <div id="bonus">
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Marksman" || item.sub == "Archer")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Marksman" || item.sub == "Archer")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "armor" && (item.sub == "Marksman" || item.sub == "Archer")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Marksman" || item.sub == "Archer")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "armor" && (item.sub == "Marksman" || item.sub == "Archer")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else {}
})
}

function renderWarlock() {
    document.getElementById("drops-for-sale").innerHTML =``,
    ALLITEMS.forEach(item => {
        if(item.type == "ranged" && (item.sub == "Warlock" || item.sub == "Mage") && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
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
                               <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                               <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                               <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                               <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                               <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                           </div>
                           <div id="bonus">
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                               <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Warlock" || item.sub == "Mage")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
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
       `}
    else if(item.type == "ranged" && (item.sub == "Warlock" || item.sub == "Mage")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
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
                                   <p id="drop-info-secondary" class="white-text"> Range: ${item.range}</p>
                                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
                               </div>
                               <div id="bonus">
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus4}</p>
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
       `}
    else if(item.type == "tunic" && (item.sub == "Warlock" || item.sub == "Mage")  && item.rarity == "Magical") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "tunic" && (item.sub == "Warlock" || item.sub == "Mage")  && item.rarity == "Epic") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else if(item.type == "tunic" && (item.sub == "Warlock" || item.sub == "Mage")  && item.rarity == "Legendary") {
       document.getElementById(item.setid).innerHTML +=`
       <div id="item${item.id}" class="item-card">
       <div id="box-top">
         <img src="${item.thumbnail}" alt="" id="drop-thumbnail">
           <div id="text-box"> 
               <p id="drop-name" class="${item.rarity}">${item.name}</p>
               <p id="drop-material" class="${item.rarity}">${item.material}</p>
           </div>
         <img src="thumbs/drop-x.png" alt="" id="drop-x">
       </div>
       <div id="box-bottom">
           <div id="drop-card">
           
               <p id="drop-info-armor" class="yellow-text">Armor: ${item.armor} (+${item.armplus})</p>
               <div id="resis">
                   <div id="resis-thumbnail">
                           <img id="resis-thumbnail" src="thumbs/drop-slashing.png" alt="">                      
                           <img id="resis-thumbnail" src="thumbs/drop-piercing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-smashing.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-fire.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-ice.png" alt="">
                           <img id="resis-thumbnail" src="thumbs/drop-electricity.png" alt="">
                       </div>
       
                   <div id="resis-text">
                       <p id="drop-info-resis" class="yellow-text">${item.sla}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.pie}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.sma}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.fir}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ice}</p>
                       <p id="drop-info-resis" class="yellow-text">${item.ele}</p>
                   </div>
               </div>
               <div id="secondary">
                   <p id="drop-info-secondary" class="white-text"> Category: ${item.cat}</p>
                   <p id="drop-info-secondary" class="white-text"> Durability: ${item.dur}/${item.dur}</p>
                   <p id="drop-info-secondary" class="white-text"> Weight: ${item.wei} Kgs</p>
                   <p id="drop-info-secondary" class="yellow-text">Item level ${item.itemlvl}</p>
                   <p id="drop-info-secondary" class="gray-text"> Requires ${item.sub} Level ${item.reqlvl}</p>
               </div>
               <div id="bonus">
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus0}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus1}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus2}</p>
                   <p id="drop-info-secondary" class="bonus-text"> ${item.bonus3}</p>
                   <div id="enhancement">
                       <p id="drop-info-secondary" class="${item.isenhanced}"> ${item.enha1}</p>
                       <img src="${item.enhathumbnail1}" alt="">
                   </div>
               </div>
               <p id="drop-info-secondary" class="${item.rarity}">${item.rarity}</p>
           </div>
       </div>
       <p id="price">${item.owner} - ${item.price} Mgs</p>                    
       </div>
       
       `}
    else {}
})
}