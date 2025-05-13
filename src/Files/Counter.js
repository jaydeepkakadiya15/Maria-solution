import React from 'react'


const Counter = () => {
    
    const counter = [
        { value: "102k", label: "HAPPY CLIENT" },
        { value: "5087+", label: "WIN AWARDS" },
        { value: "72k", label: "FINISHED WORK" },
        { value: "99%", label: "SOCIAL FOLLOWERS" },
    ]

  return (
    <div>
        <div className='counter text-center'>
            <div className='container'>
                <div className='row'>
                {
                    counter.map((v,i) => (
                        <div key={i} className="col-6 col-md-3 mb-4 mb-md-0">
                            <h3 className="cnt_value mb-2">{v.value}</h3>
                            <p className="cnt_label">{v.label}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter