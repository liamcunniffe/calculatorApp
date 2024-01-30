import "./button.css"

const Button = ( {symbol, color, handleClick} ) => {
    return <div 
    onClick={() => handleClick(symbol)}
    className="buttonWrapper" 
    style={{ backgroundColor: color}}
    >{symbol}
    </div>

}

export default Button