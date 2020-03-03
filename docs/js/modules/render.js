const renderOverview = (data) => {
    console.log(data)
    const resultsOverview = document.getElementById('results-overview')
    resultsOverview.innerHTML = ''

    data.forEach(book => {
        const bookContainer = document.createElement('a')
        const bookImage = document.createElement('img')
        const bookTitle = document.createElement('p')

        bookContainer.setAttribute('href', `#${book.id}`)
        bookImage.setAttribute('src', book.coverimages[1])
        bookTitle.innerText = book.titles[0];

        bookContainer.appendChild(bookImage)
        bookContainer.appendChild(bookTitle)
        resultsOverview.appendChild(bookContainer)
    })

}

const renderDetail = (data) => {
    console.log(data)
    let detail, directives
    const resultsOverview = document.getElementById('results-overview')
    const detailContainer = document.getElementById('detail-container')


    detail = {
        path: data.coverimages[1]
    }

    directives = {
        'detail-thumbnail': {
            src: function() {
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