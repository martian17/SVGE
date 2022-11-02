class SVGE extends ELEM{
    Child_Constructor = SVGE;
    constructor(nname,attrs,inner,style){
        if(typeof nname === "string" && nname[0].match(/[a-z]/)){
            let e = document.createElementNS("http://www.w3.org/2000/svg",nname);
            super(e);
            if(attrs){
                ELEM.attrParser(attrs).map((a)=>{
                    e.setAttribute(a[0],a[1]);
                });
            }
            if(inner){
                this.setInner(inner);
            }
            if(style){
                e.style = style;
            }
        }else{
            super(nname,attrs,inner,style);//default initialization
        }
    }
    attr(a,b){
        //this.e.setAttributeNS("http://www.w3.org/2000/svg",a,b);
        this.e.setAttribute(a,b);
    }
};
