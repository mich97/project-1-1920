const renderOverview = (data) => {
    console.log(data)

    const slider = document.getElementById('slider')
    const sliderInner = document.getElementById('slider__inner')
    const back = document.getElementById('slider-back')
    const loading = document.getElementById('loading-state')


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


    slider.classList.remove('hidden')
    back.classList.remove('hidden')
    loading.classList.add('hidden')
}

const renderDetail = (data) => {
    console.log(data)
    let detail, directives

    const detailContainer = document.getElementById('detail-container')

    const loading = document.getElementById('loading-state')
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


    detailContainer.classList.remove('hidden')
    Transparency.render(document.getElementById('detail-container'), detail, directives)
    loading.classList.add('hidden')
    sliderBack.classList.add('hidden')
}

const renderLoading = () => {
    const loading = document.getElementById('loading-state')
    const categories = document.getElementById('categories')
    categories.classList.add('hidden')
    loading.classList.remove('hidden')
}

export {
    renderOverview,
    renderDetail,
    renderLoading
}