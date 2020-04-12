
export default function createLink(command) {
    let createTagA = document.createElement('a')
    let linkURL = prompt('Enter a URL:', 'http://');
    createTagA.setAttribute('href', linkURL)
    createTagA.innerHTML = linkURL
    document.execCommand(`${command}`, false, createTagA);
}