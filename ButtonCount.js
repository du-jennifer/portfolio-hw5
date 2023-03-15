class ButtonCount extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: "open" });

        const bttn = document.createElement("button");
        let count = 0;
        bttn.innerHTML = "Times Clicked: " + count;
            
        bttn.onclick = function(){
            count += 1;
            bttn.innerHTML = "Times Clicked: " + count;
        }
        
        this.shadowRoot.appendChild(bttn);
    }

    

}

customElements.define("button-count", ButtonCount);