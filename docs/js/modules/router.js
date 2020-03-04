import { getOverviewData, getDetailData } from './api.js'

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
        ':id': (id) => {
            getDetailData(id)
        }
    })
}

export {
    routeHandler
}