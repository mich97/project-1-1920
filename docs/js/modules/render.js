const renderOverview = (data) => {
    console.log(data)
    const categories = document.getElementById('categories')
    const slider = document.getElementById('slider')
    const sliderInner = document.getElementById('slider__inner')
    const back = document.getElementById('slider-back')


    data.forEach(book => {
        const sliderContents = document.createElement('div')
        const bookAnchor = document.createElement('a')
        const bookImage =  document.createElement('img')
        const bookTitle = document.createElement('h2')

        sliderContents.classList.add('slider__contents')
        bookAnchor.setAttribute('href', `#${book.id}`)
        bookImage.classList.add('slider__image')
        bookImage.setAttribute('src', book.coverimages[1])
        bookTitle.classList.add('slider__caption')
        bookTitle.innerText = book.titles[0]

        sliderContents.appendChild(bookAnchor)
        bookAnchor.appendChild(bookImage)
        bookAnchor.appendChild(bookTitle)

        sliderInner.appendChild(sliderContents)
    })

    categories.classList.add('hidden')
    slider.classList.remove('hidden')
    back.classList.remove('hidden')
}

const renderDetail = (data) => {
    console.log(data)
    let detail, directives
    const slider = document.getElementById('slider')
    const detailContainer = document.getElementById('detail-container')
    const sliderBack = document.getElementById('slider-back')

    detail = {
        path: data.coverimages[1],
        'detail-title': data.titles[0],
        publisher: data.publisher,
        description: data.description[1],
        link: data.detailLink
    }

    directives = {
        'detail-thumbnail': {
            src: function() {
                return this.path
            }
        },
        'detail-publisher': {
          text: function(params) {
              return `${params.value} ${this.publisher}`
          }
        },
        'detail-description': {
          text: function(params) {
              return `${params.value} ${this.description}`
          }
        },
        'detail-link': {
            href: function() {
                return this.link
            }
        }
    }

    sliderBack.classList.add('hidden')
    slider.classList.add('hidden')
    detailContainer.classList.remove('hidden')
    Transparency.render(document.getElementById('detail-container'), detail, directives)


}

export {
    renderOverview,
    renderDetail
}