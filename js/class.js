class Protfolio {
    constructor(_parent, _id, _detail,_image,_src) {
        this.parent = _parent;
        this.id = _id;
        this.detail = _detail;
        this.image = _image;
        this.src= _src;

    }


    render(){
        let newDiv = document.createElement("div");
        newDiv.className = "clsRow col-lg-6";
        document.querySelector(this.parent).append(newDiv);
        newDiv.innerHTML += `
        <a target="_blank" href="${this.src}">
        <div class="container" style="position: relative; width: 100%;">
        <div class="text-block"  style="color:white;"><b>${this.detail}</b></div>
        <img src="images/${this.image}" alt="${this.detail}" class="rounded m-2 w-100 h-100">
        <button id="imgButton" class="btn btn-outline-light">View Project</button>
        </div>
        </a>
        `
    }

}

export default Protfolio;