/*
* Dropdown Toogle
*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){

        /* Toggle between adding and removing the .active class
        to highlight the button and change the icon */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active .accordion-content.
        The nextElementSibling property returns the element immediately following the specified
        element, in the same tree level.

        The difference between this property and the nextSibling, is that nextSibling returns
        the next Sibling node as an element node, a text node or a comment node,
        while nextElementSibling returns the next Sibling node as an element node
        (ignore text and comment node).
        */

        let accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    })
}