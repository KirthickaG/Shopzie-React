import '../formInput/form-input.styles.scss'

const FormInput = ({label, ...otherOptions}) =>
{
    return(
        <div className='group'> 
            <input className='form-input' {...otherOptions}/>       
            {
                label &&
                <label className={`form-input-label ${otherOptions.value.length} ? 'shrink' : ''`}>{label}</label>

            }
        </div>

    )
}

export default FormInput;