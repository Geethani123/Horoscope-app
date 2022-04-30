import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import HoroScopeData from './HoroScopeData';

const HoroScopeName = (props) => {
    const [showDataComp, setShowDataComp] = useState(false)
    let [users, setUsers] = useState([])
    let [nameSelect, setNameSelect] = useState(null)

    const getUsers = async () => {
        const responce = await axios.get('http://sandipbgt.com/theastrologer/api/sunsigns')
        setUsers(responce.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const nameSelectbutton = (ele) => {
        setNameSelect(ele)
        setShowDataComp(true)
    }

    const restartButton = () => {
        props.setShowComponent(false)
    }

    return (<>
        {!showDataComp ? <div className='button-grid'>
            {users.map((ele, ind) => {
                return <React.Fragment key={ind}>
                    <Button onClick={() => nameSelectbutton(ele)} className='btn-sign'  >{ele}</Button></React.Fragment>
            })}
            <Button onClick={() => restartButton()} className='btn-sign'  >Cancel</Button>
        </div> : <>
            <HoroScopeData nameSelect={nameSelect} setShowDataComp={setShowDataComp} />
        </>}
    </>
    )
}

export default HoroScopeName