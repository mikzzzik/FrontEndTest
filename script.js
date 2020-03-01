

let items = document.getElementsByName("item");
let items_text =  document.getElementsByName("item_text");
function UpdateToSquare(){
    for(let i = 0;i< items.length; i++){
        items[i].className = "item square";
        items_text[i].className = "desc-square";
    }
}
function UpdateToRow() {
    for(let i = 0;i< items.length; i++){
        items[i].className = "item row";
        items_text[i].className = "desc-row";
    }
}