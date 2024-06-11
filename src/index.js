import './style.css'
import 'lodash'

const dropdownMenuButton = document.getElementById('dropdown-menu-button');
const dropdownMenuDiv = document.getElementById('dropdown-menu-div');
const dropdownContainer = document.getElementById('dropdown-container')


let classNameName = 'hidden'
dropdownMenuDiv.className = classNameName

function addClassName(classNameName) {
    
    dropdownMenuDiv.className = classNameName
}

dropdownMenuButton.addEventListener('mouseenter', () => {
    classNameName = 'visible'
    addClassName(classNameName)
})

dropdownContainer.addEventListener('mouseleave', () => {
    classNameName = 'hidden'
    addClassName(classNameName)
})