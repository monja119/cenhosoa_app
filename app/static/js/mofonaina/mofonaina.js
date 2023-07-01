let text_home = document.querySelector('#text-home')


// text_2 welcome
let counter = 1
let counter_scaling = true
let index = 0
let text_1 = "                    " +
                  "Eto amin'ity toerana ity no " +
                  "                             "
let text_2 = "                    " +
                  "C'est vraiment un plaisir pour moi de vous acceuillir" +
                  "                             "
let text = ['text_1', 'text_2']
welcome = () => {
    if (counter === eval(text[index % 2]).length) {
        counter_scaling = false
    } else if (counter === 0) {
        counter_scaling = true
        index += 1
    }

    counter_scaling ? counter++ : counter--

    text_home.innerText = eval(text[index % 2]).substring(0, counter)

    setTimeout(welcome, 50)
}
welcome()

