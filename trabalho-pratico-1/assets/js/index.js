function changeMenu(element) {
    let current = document.getElementsByClassName("active");

    if (!!current[0]) {
        current[0].className = current[0].className.split(/[^A-Za-z]/).filter(value => value !== 'active').join(" ");
    }

    let detailTitle = document.getElementById('detailTitle');
    detailTitle.innerHTML = element.innerHTML

    const parent = element.parentElement

    let arrClass = parent.className.split(/[^A-Za-z]/);

    arrClass.push("active");

    parent.className = arrClass.join(" ");
}

function validInput() {
    let searchInput = document.getElementById("searchInput");

    try {
        if (!!searchInput.value && parseInt(searchInput.value, 10) > 3) {
            alert('Busca realizada com sucesso')
        } else {
            alert('Preencha o campo de busca')
        }
    } catch (e) {
        alert('Preencha o campo de busca')
    }

}