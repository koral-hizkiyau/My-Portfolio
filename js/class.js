class Protfolio {
    constructor(_parent, _id,_title,_image,_src,_demo,_detail,_icons) {
        this.parent = _parent;
        this.id = _id;
        this.title = _title;
        this.image = _image;
        this.src = _src;
        this.demo = _demo;
        this.detail = _detail;
        this.icons = _icons;

    }

    render(){
    
        let newDiv = document.createElement("div");
        newDiv.className = "clsRow col-lg-8 py-3";
        document.querySelector(this.parent).append(newDiv);
        newDiv.innerHTML += `  
        <div class="text-block"  style="color:white;"><b>${this.title}</b></div>
        <div class="row">
        <div class="col-lg-6" style="display:flex;margin:auto;">
        <img src="images/${this.image}" alt="${this.title}" class="rounded m-2"/></div>
        <div class="col-lg-6">
        <h4 style="color:white">Details:</h4>
        <div style="color:white;margin-top:2%;font-size:18px">${this.detail}</div> 
        <img src="images/icons/${this.icons}" class="py-3" alt="icon" width="70%" style="background-color="white;"/></div></div>
        <div class="col-lg-8" style="display: flex;margin: auto;  justify-content: center;">
        <a target="_blank" href="${this.demo}">
        <button id="imgButton" class="btn btn-outline-light mr-2">View Site</button></a>
        <a target="_blank" href="${this.src}">
        <button id="imgButtonGit" class="btn btn-outline-light">Repo</button></a>
     
        <div>

        `
    }

}

export default Protfolio;