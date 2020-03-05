import {getOverviewData, getDetailData} from './api.js'

const routeHandler = () => {
    routie({
        'china': () => {
            getOverviewData("China")
        },
        'czech': () => {
            getOverviewData("Czech")
        },
        'egypt': () => {
            getOverviewData("Egypt")
        },
        'france': () => {
            getOverviewData("France")
        },
        'india': () => {
            getOverviewData("India")
        },
        'italy': () => {
            getOverviewData("Italy")
        },
        'japan': () => {
            getOverviewData("Japan")
        },
        'spain': () => {
            getOverviewData("Spain")
        },
        'thailand': () => {
            getOverviewData("Thailand")
        },
        'turkey': () => {
            getOverviewData("Turkey")
        },
        'uk': () => {
            getOverviewData("Britain")
        },
        'usa': () => {
            getOverviewData("United States")
        },
        'sliderback': () => {
            const slider = document.getElementById('slider')
            const sliderInner = document.getElementById('slider__inner')
            const categories = document.getElementById('categories')
            const sliderBack = document.getElementById('slider-back')

            slider.classList.add('hidden')
            sliderBack.classList.add('hidden')
            categories.classList.remove('hidden')
            sliderInner.innerHTML = ""
        },
        'detailback': () => {
            const detailContainer = document.getElementById('detail-container')
            const slider = document.getElementById('slider')
            const sliderBack = document.getElementById('slider-back')

            detailContainer.classList.add('hidden')
            slider.classList.remove('hidden')
            sliderBack.classList.remove('hidden')
        },
        ':id': (id) => {
            getDetailData(id)
        }
    })
}

export {
    routeHandler
}