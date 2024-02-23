import itemJson from './droplist.json' assert {type: 'json'};

const ALLITEMS = itemJson.droplist
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

renderizeItems()