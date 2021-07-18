var pic=["DAD.jfif","MOM.jfif","me.jfif","bro.jfif"];
var names=["Arif Ali","Sumeeta Ali","Arnav Ali","Zihan Ali& Zavian Ali"];
var i=0;
function update() {
    document.getElementById("f1").src=pic[i];
    document.getElementById("thetag").innerHTML=names[i];
i=i+1;
if (i==4) {
    i=0;
}
}
