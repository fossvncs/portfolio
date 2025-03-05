'use client'

import { useEffect } from "react"
import {} from 'aos'
import 'aos/dist/aos.css'
import Aos from "aos"

export function AosInit(){

    useEffect(() => {
        Aos.init({
            duration: 900,
            once: true
        })
    }, [])

    return null

}   