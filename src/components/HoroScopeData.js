import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';

const HoroScopeData = (props) => {
    let [horoscopeDataa, setHoroscopeData] = useState('')
    let [horoscopeDataaYesterday, setHoroscopeDataYesterday] = useState('')
    let [horoscopeDataaTomorrow, setHoroscopeDataTomorrow] = useState('')

    const getUsers1 = async () => {
        const responce = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${props.nameSelect}/today`)
        setHoroscopeData(responce.data.horoscope)
        // console.log(responce.data.horoscope);
    }
    const getUsers2 = async () => {
        const responce = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${props.nameSelect}/yesterday`)
        setHoroscopeDataYesterday(responce.data.horoscope)
        // console.log(responce.data.horoscope);
    }
    const getUsers3 = async () => {
        const responce = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${props.nameSelect}/tomorrow`)
        setHoroscopeDataTomorrow(responce.data.horoscope)
        // console.log(responce.data.horoscope);
    }
    useEffect(() => {
        getUsers1()
        getUsers2()
        getUsers3()
    }, [])

    const [ChangeDay, setChangeDay] = useState(null)
    const btnChange = (e) => {
        setChangeDay(e)
    }
    const backButtons = () => {
        props.setShowDataComp(false)
    }
    return (<>
        <div className='second-Page'>
            {ChangeDay === null ? <>
                <Button label="Yesterday" className="p-button-secondary ml-2 asd" onClick={() => { btnChange('Yes') }} />
                <Button label="Today" className="p-button-secondary ml-2 asd" onClick={() => { btnChange('To') }} />
                <Button label="Tomorrow" className="p-button-secondary ml-2 asd" onClick={() => { btnChange('Tom') }} />
            </>
                :
                ChangeDay === 'Yes' ? <>
                    <br />{horoscopeDataaYesterday}</>
                    : ChangeDay === 'To' ? <>{horoscopeDataa}</>
                        :
                        ChangeDay === 'Tom' ? <>{horoscopeDataaTomorrow}</> : null}
        </div>
        <Button onClick={() => backButtons()} className='btn-sign1'  >BACK</Button>
    </>

    )
}

export default HoroScopeData;