import './button.styles.scss'

const BUTTON_STYLES = {
    google : 'google-sign-in',
    inverted : 'inverted'   
}

const Button = ({children, buttonType, ...otherProps}) =>
{
    return(

     <button className={`button-container ${BUTTON_STYLES[buttonType]}`}
     {...otherProps} >
        {children}
     </button>
    )
}

export default Button;