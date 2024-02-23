import itemJson from './droplist.json' assert {type: 'json'};

function renderMagicWeapon(param){
    document.getElementById(itemJson.droplist[param].setid).innerHTML +=`
                    <div id="item${itemJson.droplist[param].id}" class="item-card">
                        <div id="box-top">
                            <img src="${itemJson.droplist[param].thumbnail}" alt="" id="drop-thumbnail">
                                <div id="text-box"> 
                                    <p id="drop-name" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].name}</p>
                                    <p id="drop-material" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].material}</p>
                                </div>
                            <img src="" alt="" id="drop-x">
                        </div>
                        <div id="box-bottom">
                            <div id="drop-card">
                                <p id="drop-info-armor" class="yellow-text">Damage: (+${itemJson.droplist[param].dmgplus})</p>
                                <div id="damagepanel">
                                    <img id="dmgtype-thumbnail" src="${itemJson.droplist[param].dmgtype0}" alt=""> 
                                    <p id="dmgnumber" class="yellow-text">${itemJson.droplist[param].dmg0}</p>
                                </div>
                                <div id="secondary">
                                    <p id="drop-info-secondary" class="white-text"> Category: ${itemJson.droplist[param].cat}</p>
                                    <p id="drop-info-secondary" class="white-text"> Attack speed: ${itemJson.droplist[param].speed}</p>
                                    <p id="drop-info-secondary" class="white-text"> Durability: ${itemJson.droplist[param].dur}/${itemJson.droplist[param].dur}</p>
                                    <p id="drop-info-secondary" class="white-text"> Weight: ${itemJson.droplist[param].wei} Kgs</p>
                                    <p id="drop-info-secondary" class="yellow-text">Item level ${itemJson.droplist[param].itemlvl}</p>
                                    <p id="drop-info-secondary" class="gray-text"> Requires ${itemJson.droplist[param].sub} Level ${itemJson.droplist[param].reqlvl}</p>
                                </div>
                                <div id="bonus">
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus0}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus1}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus2}</p>
                                    <div id="enhancement">
                                        <p id="drop-info-secondary" class="${itemJson.droplist[param].isenhanced}"> ${itemJson.droplist[param].socket1}</p>
                                        <img src="${itemJson.droplist[param].socketthumbnail1}" alt="">
                                    </div>
                                </div>
                                <p id="drop-info-secondary" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].rarity}</p>
                            </div>
                        </div>
                        <p id="price">${itemJson.droplist[param].owner} - ${itemJson.droplist[param].price} Mgs</p>                    
                        </div>
`}
function renderEpicWeapon(param){
    document.getElementById(itemJson.droplist[param].setid).innerHTML +=`
                    <div id="item${itemJson.droplist[param].id}" class="item-card">
                        <div id="box-top">
                            <img src="${itemJson.droplist[param].thumbnail}" alt="" id="drop-thumbnail">
                                <div id="text-box"> 
                                    <p id="drop-name" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].name}</p>
                                    <p id="drop-material" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].material}</p>
                                </div>
                            <img src="" alt="" id="drop-x">
                        </div>
                        <div id="box-bottom">
                            <div id="drop-card">
                                <p id="drop-info-armor" class="yellow-text">Damage: (+${itemJson.droplist[param].dmgplus})</p>
                                <div id="damagepanel">
                                    <img id="dmgtype-thumbnail" src="${itemJson.droplist[param].dmgtype0}" alt=""> 
                                    <p id="dmgnumber" class="yellow-text">${itemJson.droplist[param].dmg0}</p>
                                </div>
                                <div id="secondary">
                                    <p id="drop-info-secondary" class="white-text"> Category: ${itemJson.droplist[param].cat}</p>
                                    <p id="drop-info-secondary" class="white-text"> Attack speed: ${itemJson.droplist[param].speed}</p>
                                    <p id="drop-info-secondary" class="white-text"> Durability: ${itemJson.droplist[param].dur}/${itemJson.droplist[param].dur}</p>
                                    <p id="drop-info-secondary" class="white-text"> Weight: ${itemJson.droplist[param].wei} Kgs</p>
                                    <p id="drop-info-secondary" class="yellow-text">Item level ${itemJson.droplist[param].itemlvl}</p>
                                    <p id="drop-info-secondary" class="gray-text"> Requires ${itemJson.droplist[param].sub} Level ${itemJson.droplist[param].reqlvl}</p>
                                </div>
                                <div id="bonus">
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus0}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus1}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus2}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus3}</p>
                                    <div id="enhancement">
                                        <p id="drop-info-secondary" class="${itemJson.droplist[param].isenhanced}"> ${itemJson.droplist[param].socket1}</p>
                                        <img src="${itemJson.droplist[param].socketthumbnail1}" alt="">
                                    </div>
                                </div>
                                <p id="drop-info-secondary" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].rarity}</p>
                            </div>
                        </div>
                        <p id="price">${itemJson.droplist[param].owner} - ${itemJson.droplist[param].price} Mgs</p>                    
                    </div>
`}
function renderLegendaryWeapon(param){
    document.getElementById(itemJson.droplist[param].setid).innerHTML +=`
                    <div id="item${itemJson.droplist[param].id}" class="item-card">
                        <div id="box-top">
                            <img src="${itemJson.droplist[param].thumbnail}" alt="" id="drop-thumbnail">
                                <div id="text-box"> 
                                    <p id="drop-name" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].name}</p>
                                    <p id="drop-material" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].material}</p>
                                </div>
                            <img src="" alt="" id="drop-x">
                        </div>
                        <div id="box-bottom">
                            <div id="drop-card">
                                <p id="drop-info-armor" class="yellow-text">Damage: (+${itemJson.droplist[param].dmgplus})</p>
                                <div id="damagepanel">
                                    <img id="dmgtype-thumbnail" src="${itemJson.droplist[param].dmgtype0}" alt=""> 
                                    <p id="dmgnumber" class="yellow-text">${itemJson.droplist[param].dmg0}</p>
                                </div>
                                <div id="secondary">
                                    <p id="drop-info-secondary" class="white-text"> Category: ${itemJson.droplist[param].cat}</p>
                                    <p id="drop-info-secondary" class="white-text"> Attack speed: ${itemJson.droplist[param].speed}</p>
                                    <p id="drop-info-secondary" class="white-text"> Durability: ${itemJson.droplist[param].dur}/${itemJson.droplist[param].dur}</p>
                                    <p id="drop-info-secondary" class="white-text"> Weight: ${itemJson.droplist[param].wei} Kgs</p>
                                    <p id="drop-info-secondary" class="yellow-text">Item level ${itemJson.droplist[param].itemlvl}</p>
                                    <p id="drop-info-secondary" class="gray-text"> Requires ${itemJson.droplist[param].sub} Level ${itemJson.droplist[param].reqlvl}</p>
                                </div>
                                <div id="bonus">
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus0}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus1}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus2}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus3}</p>
                                    <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus4}</p>
                                    <div id="enhancement">
                                        <p id="drop-info-secondary" class="${itemJson.droplist[param].isenhanced}"> ${itemJson.droplist[param].socket1}</p>
                                        <img src="${itemJson.droplist[param].socketthumbnail1}" alt="">
                                    </div>
                                </div>
                                <p id="drop-info-secondary" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].rarity}</p>
                            </div>
                        </div>
                        <p id="price">${itemJson.droplist[param].owner} - ${itemJson.droplist[param].price} Mgs</p>                    
                    </div>
`}

function renderLegendaryArmor(param){
    document.getElementById(itemJson.droplist[param].setid).innerHTML +=`
                  <div id="item${itemJson.droplist[param].id}" class="item-card">
                    <div id="box-top">
                      <img src="${itemJson.droplist[param].thumbnail}" alt="" id="drop-thumbnail">
                        <div id="text-box"> 
                            <p id="drop-name" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].name}</p>
                            <p id="drop-material" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].material}</p>
                        </div>
                      <img src="thumbs/drop-x.png" alt="" id="drop-x">
                    </div>
                    <div id="box-bottom">
                        <div id="drop-card">
                        
                            <p id="drop-info-armor" class="yellow-text">Armor: ${itemJson.droplist[param].armor} (+${itemJson.droplist[param].armplus})</p>
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
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].sla}</p>
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].pie}</p>
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].sma}</p>
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].fir}</p>
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].ice}</p>
                                    <p id="drop-info-resis" class="yellow-text">${itemJson.droplist[param].ele}</p>
                                </div>
                            </div>
                            <div id="secondary">
                                <p id="drop-info-secondary" class="white-text"> Category: ${itemJson.droplist[param].cat}</p>
                                <p id="drop-info-secondary" class="white-text"> Durability: ${itemJson.droplist[param].dur}/${itemJson.droplist[param].dur}</p>
                                <p id="drop-info-secondary" class="white-text"> Weight: ${itemJson.droplist[param].wei} Kgs</p>
                                <p id="drop-info-secondary" class="yellow-text">Item level ${itemJson.droplist[param].itemlvl}</p>
                                <p id="drop-info-secondary" class="gray-text"> Requires ${itemJson.droplist[param].sub} Level ${itemJson.droplist[param].reqlvl}</p>
                            </div>
                            <div id="bonus">
                                <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus0}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus1}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus2}</p>
                                <p id="drop-info-secondary" class="bonus-text"> ${itemJson.droplist[param].bonus3}</p>
                                <div id="enhancement">
                                    <p id="drop-info-secondary" class="${itemJson.droplist[param].isenhanced}"> ${itemJson.droplist[param].enha1}</p>
                                    <img src="${itemJson.droplist[param].enhathumbnail1}" alt="">
                                </div>
                            </div>
                            <p id="drop-info-secondary" class="${itemJson.droplist[param].rarity}">${itemJson.droplist[param].rarity}</p>
                        </div>
                    </div>
                    <p id="price">${itemJson.droplist[param].owner} - ${itemJson.droplist[param].price} Mgs</p>                    
                    </div>
`}

renderMagicWeapon(0)
renderMagicWeapon(1)
renderEpicWeapon(2)
renderLegendaryArmor(3)
renderMagicWeapon(4)
renderLegendaryArmor(7)
renderEpicWeapon(6)
renderLegendaryArmor(7)