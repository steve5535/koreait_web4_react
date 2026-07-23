import React from 'react'

function DashBoardCard({ title, value, desc }) {
    return (
        <div>
            <article className='dashboardCard'>
                <span>{title}</span>
                <strong>{value}</strong>
                <p>{desc}</p>
            </article>
        </div>
    )
}

export default DashBoardCard
