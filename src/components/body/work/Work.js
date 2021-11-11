import React from 'react'
import { Workdata } from '../../data/Workdata'
import Separator from '../common/Separator'
import './work.css'
import Workcard from './Workcard';

function Work() {
    const data = Workdata;
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item)=>{
                    return (
                        <Workcard work={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
