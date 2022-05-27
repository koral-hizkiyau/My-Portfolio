import Protfolio from "./class.js"



export const createProtfolio = (_ar) => {
    _ar.map(item => {
        let {id,detail,image,src} = item;
        let protfolio = new Protfolio("#id_row",id,detail,image,src);
        protfolio.render();

    })
}