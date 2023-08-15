export function updateClick () {
    const output = ['Example Domain', 'First Click', 'Second Click', 'Third Click']
    let h2 = document.createElement('h2')
    h2.setAttribute("class", "clicks") 
    h2.innerText = "Example Domain"
    const bodyClick = () => {
        switch (h2.innerText) {
            case output[0]: h2.innerText = output[1]
            break;
            case output[1]: h2.innerText = output[2]
            break;
            case output[2]: h2.innerText = output[3]
            break;
            default : h2.innerText = output[0];
        }
    }
    document.body.style.height = "100vh"
    document.body.appendChild(h2)
    document.body.addEventListener('click', bodyClick)
    return document.body

}