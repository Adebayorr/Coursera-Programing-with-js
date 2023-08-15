export function updateHeading () {
    let h2 = document.createElement("h2")
    h2.setAttribute('class', 'heading')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    document.body.innerHTML = ''
    h2.innerText = "This heading will update to the value of input"
    function updateH1 () {
        h2.innerText = input.value
    }

    document.body.appendChild(h2)
    document.body.appendChild(input)
    input.addEventListener('change', updateH1)

    return document.body
}