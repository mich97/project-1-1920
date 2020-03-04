const renderOverview = (data) => {
    console.log(data)
    const categories = document.getElementById('categories')
    const slideWrapper = document.getElementById('slides')
    const slideContainer = document.getElementById('slide-container')
    categories.classList.add('hidden')

    data.forEach(book => {
        const bookContainer = document.createElement('a')
        const bookImage = document.createElement('img')
        const bookTitle = document.createElement('p')

        bookContainer.setAttribute('href', `#${book.id}`)
        bookContainer.setAttribute('class', 'slide')
        bookImage.setAttribute('src', book.coverimages[1])
        bookTitle.innerText = book.titles[0];


        bookContainer.appendChild(bookImage)
        bookContainer.appendChild(bookTitle)
        slideContainer.appendChild(bookContainer)
    })

    slideWrapper.classList.remove('hidden')
}

const renderDetail = (data) => {
    console.log(data)
    let detail, directives
    const resultsOverview = document.getElementById('results-overview')
    const detailContainer = document.getElementById('detail-container')


    detail = {
        path: data.coverimages[1],
        'detail-title': data.titles[0],
        'detail-description': data.summaries[0]
    }

    directives = {
        'detail-thumbnail': {
            src: function () {
                return this.path
            }
        }
    }

    resultsOverview.classList.add('hidden')
    detailContainer.classList.remove('hidden')
    Transparency.render(document.getElementById('detail-container'), detail, directives)


}

export {
    renderOverview,
    renderDetail
}