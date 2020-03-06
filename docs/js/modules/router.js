import { getOverviewData, getDetailData } from './api.js'
import { renderLoading } from './render.js'

const routeHandler = () => {
    routie({
        'china': () => {
            renderLoading()
            getOverviewData("China")
        },
        'czech': () => {
            renderLoading()
            getOverviewData("Czech")
        },
        'egypt': () => {
            renderLoading()
            getOverviewData("Egypt")
        },
        'france': () => {
            renderLoading()
            getOverviewData("France")
        },
        'india': () => {
            renderLoading()
            getOverviewData("India")
        },
        'italy': () => {
            renderLoading()
            getOverviewData("Italy")
        },
        'japan': () => {
            renderLoading()
            getOverviewData("Japan")
        },
        'spain': () => {
            renderLoading()
            getOverviewData("Spain")
        },
        'thailand': () => {
            renderLoading()
            getOverviewData("Thailand")
        },
        'turkey': () => {
            renderLoading()
            getOverviewData("Turkey")
        },
        'uk': () => {
            renderLoading()
            getOverviewData("Britain")
        },
        'usa': () => {
            renderLoading()
            getOverviewData("United States")
        },
        'sliderback': () => {
            const slider = document.getElementById('slider')
            const sliderInner = document.getElementById('slider__inner')
            const categories = document.getElementById('categories')
            const sliderBack = document.getElementById('slider-back')
            const loading = document.getElementById('loading-state')

            slider.classList.add('hidden')
            sliderBack.classList.add('hidden')
            categories.classList.remove('hidden')
            loading.classList.add('hidden')
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
            const slider = document.getElementById('slider')
            slider.classList.add('hidden')
            renderLoading()
            getDetailData(id)
        }
    })
}

export {
    routeHandler
}