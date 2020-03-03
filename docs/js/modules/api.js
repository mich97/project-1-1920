import { renderOverview, renderDetail } from './render.js'

const cors = 'https://cors-anywhere.herokuapp.com/'
const endpointSearch = 'https://zoeken.oba.nl/api/v1/search/?q='
const endpointDetails = 'https://zoeken.oba.nl/api/v1/details/?id='
const key = 'dc0e2f073c03758140452044906bc818'
const secret = '6b02878111c06660300798cf4c40a685'
const detail = 'Default'

const config = {
    Authorization: `Bearer ${secret}`
}

const getOverviewData = (categorie) => {
    fetch(`${cors}${endpointSearch}${categorie}&authorization=${key}&detaillevel=${detail}&output=json`, config)
        .then(response => {
            return response.json()
        })
        .then(data => {
            renderOverview(data.results)
        })
        .catch(err => {
            console.log(err)
        })
}

const getDetailData = (id) => {
    fetch(`${cors}${endpointDetails}${id}&authorization=${key}&detaillevel=${detail}&output=json`, config)
        .then(response => {
            return response.json()
        })
        .then(data => {
            renderDetail(data.record)
        })
        .catch(err => {
            console.log(err)
        })
}

export {
    getOverviewData,
    getDetailData
}