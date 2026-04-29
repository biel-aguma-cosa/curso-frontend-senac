function change_tab(event,name,tab) {
    const pet_container = document.getElementById(name)

    const buttons = pet_container.getElementsByClassName('tab')
    const target_button = event.currentTarget

    const containers = pet_container.getElementsByClassName('pet_content')
    const target_container = pet_container.getElementsByClassName(tab)[0]

    for (let button of buttons) {
        button.className = 'tab pets'
        console.log(button)}
    for (let container of containers) {
        container.className = container.className.replace(' active','')
        console.log(container)}

    target_button.className += ' active'
    target_container.className += ' active'
}