/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useSearchParams } from 'react-router-dom'
import { getAds } from '../../api'
import { useAdContext } from '../../context/ad'
import { GET_ADS_SUCCESS, REQUEST_AD_API, REQUEST_AD_ERROR } from '../../reducer/ad'
import AdCard from './AdCard'

const AdsList = () => {
    const token = localStorage.getItem('token') || ''
    const alert = useAlert()
    const {
        adState: { ads },
        adDispatch,
    } = useAdContext()

    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (token) {
            adDispatch({ type: REQUEST_AD_API })
            getAds(token, searchParams)
                .then((res) => adDispatch({ type: GET_ADS_SUCCESS, payload: res }))
                .catch((error) => {
                    adDispatch({ type: REQUEST_AD_ERROR })
                    alert.error(error.message)
                })
        }
    }, [adDispatch, searchParams])

    return (
        <div className="flex flex-col gap-2">
            {!!ads.length && ads.map((ad) => <AdCard key={ad.id} ad={ad} />)}
            {!ads.length && <p>No hay anuncios</p>}
        </div>
    )
}

export default AdsList
