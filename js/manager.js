import Protfolio from "./class.js"



export const createProtfolio = (_ar) => {
    _ar.map(item => {
        let {id,title,image,src,demo,detail,icons} = item;
        let protfolio = new Protfolio("#id_row",id,title,image,src,demo,detail,icons);
        protfolio.render();

    })
}