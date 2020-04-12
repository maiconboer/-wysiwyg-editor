import createLink from './create-link.js'
import Export2Doc from './download-doc.js'

export default function initEditor() {

    // title
    const selectHeadind = document.querySelector('#list-headings')
    selectHeadind.addEventListener('change', (event) => {
        let selected = event.target.value
        document.execCommand('formatBlock', false, selected);
    })

    // font
    const selectFont = document.querySelector('#list-fonts')
    selectFont.addEventListener('change', (event) => {
        let selected = event.target.value
        document.execCommand('fontName', true, selected);
    })

    // size
    const selectSize = document.querySelector('#list-sizes')
    selectSize.addEventListener('change', (event) => {
        let selected = event.target.value
        document.execCommand('fontSize', true, selected);
    })

    // text styles
    const buttons = document.querySelectorAll('button')
    let arrayButtons = [...buttons]
    arrayButtons.forEach(item => {
        item.addEventListener('click', function (event) {
            item.classList.toggle('ativo')
            let command = event.target.id
            document.execCommand(`${command}`);
            if (command === 'createLink') {
                createLink(command);
            }
        })
    })

    // color
    const inputColor = document.querySelector('#foreColor')
    inputColor.addEventListener('input', () => {
        let color = inputColor.value
        document.execCommand('foreColor', true, color);
        console.log(color)
    })

    // background-color
    const inputBackColor = document.querySelector('#backColor')
    inputBackColor.addEventListener('input', () => {
        let background = inputBackColor.value
        document.execCommand('backColor', true, background);
        console.log(background)
    })

    // download text - .doc
    const download = document.querySelector('.download-doc')
    download.addEventListener('click', () => {
        let element = '.editor'
        Export2Doc(element)
    })
}
