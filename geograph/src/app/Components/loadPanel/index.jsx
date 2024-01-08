
import './style.scss';

import Spinner from '../spinnerImg';

export const LoadingPanel=({Error=null, ...props})=>{
    return (
        <div className='high-panel' {...props}>
            {Error ? 
                <>
                    <span className='error-msj'>{Error}</span>
                    <Spinner />
                </>
            :
                <Spinner />
            }
        </div>
    )
}