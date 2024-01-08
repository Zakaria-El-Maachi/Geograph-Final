

export const Item = ({title="titulo", imgItem=null, imgAlt, children=null})=>{

    return <div className='info-part'>
                <div className='info-img'>
                    <img src={imgItem} alt={imgAlt} />
                </div>
                <div className='info-content'>
                    <h3>{title}</h3>

                    <div className='info-sumary'>
                        {children}
                    </div>
                </div>
            </div>
}