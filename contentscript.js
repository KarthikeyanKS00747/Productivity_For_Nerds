//var-variable,const-fixed variable,object-dictionary,array-list,function-def,
//[let method,var,const]-declaring variable, //-comment, semicolon-colon,bracket notation-indexing,
//[multidimensional arrays,nested arrays]-nested lists,push-append,sunhift-append(start of a list)
//shift-delete element at the start of a list,if content-with parenthesis ends with {},type-typeof

function removeElementbyId(id){
    document.getElementById(id).style.display = "none";
}
//removeElement("page-manager")
/*function removeElementbyClass(className){
    elements = document.getElementsByClassName(className)

    for (element in elements){
    element.style.display = "none";
    }
}
*/
let logo = document.getElementById("logo-icon")
logo.innerHTML = "Study"
/*
let title1 = document.getElementsByClassName("style-scope ytd-rich-grid-media").innerHTML

alert(title1)

*/