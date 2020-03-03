import { getOverviewData, getDetailData } from './api.js'

const routeHandler = () => {
    routie({
        'italy': () => {
            getOverviewData("Italy")
        },
        'france': () => {
            getOverviewData("France")
        },
        ':id': (id) => {
            getDetailData(id)
        }
    })
}

export {
    routeHandler
}