import React, { useState } from 'react'



export default function InsurancePeriodSelector() {
    const dataSet = {
        rows: [
        {
            field: "year",
            period_1: 2021,
            period_2: 2022,
            period_3: 2023,
            period_4: 2024,
            period_5: 2025
        }
    ]
    }

    let columnsSequence = []
    for(let key in dataSet.rows[0]) {
        columnsSequence = [...columnsSequence, key]
    }

    const [selectedFields, setSelectedFields] = useState([])

    function handleSelectedFields (e) {
        if (!selectedFields.includes(e.target.value)) {
            if (selectedFields.length >= 1) {
                // Already Selected One item
                const firstItemIndex = columnsSequence.indexOf(selectedFields[0])
                const lastItemIndex = columnsSequence.indexOf(e.target.value)
                const newItems = columnsSequence.splice(firstItemIndex, lastItemIndex)
                setSelectedFields([...newItems])
            } else {
                // New Item Added
                setSelectedFields([e.target.value])
            }
        } else {
            const popedList = selectedFields.filter(f => f !== e.target.value)
            setSelectedFields([...popedList])
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            columnsSequence.map(k => {
                                return (
                                    <th>
                                        <span key={k}>
                                            <input type="checkbox" value={ k } onChange={handleSelectedFields} />
                                            <div>{dataSet.rows[0][k]}</div>
                                        </span>
                                    </th>
                                )
                            })
                        }

                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            Selected Fields
            {
                selectedFields.map(f => <div key={f}>{f}</div>)
            }
        </div>
    )
}
