const link = document.querySelectorAll(".animation")

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__zoomIn")
        }
    })
}

const options = {}
const myObserver = new IntersectionObserver(callback, options)

link.forEach(item => {
    myObserver.observe(item)
})


const fadeleft = document.querySelectorAll(".fadeleft")
const callback2 = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInLeft")
        }
    })
}

const myObserver2 = new IntersectionObserver(callback2, options)
fadeleft.forEach(item => {
    myObserver2.observe(item)
})

const faderight = document.querySelectorAll(".faderight")
const callback3 = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInRight")
        }
    })
}

const myObserver3 = new IntersectionObserver(callback3, options)
faderight.forEach(item => {
    myObserver3.observe(item)
})









