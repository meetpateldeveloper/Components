import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(rest.className,'flex items-center px-3 py-1.5 border',{
    'border-blue-600 bg-blue-500 text-white':primary,
    'border-gray-900 bg-gray-900 text-white':secondary,
    'border-green-600 bg-green-500 text-white':secondary,
    'border-yellow-600 bg-yellow-500 text-white':warning,
    'border-red-600 bg-red-500 text-white':danger,
    'bg-white':outline,
    'rounded-full':rounded,
    'text-blue-500':outline && primary,
    'text-gray-900':outline && secondary,
    'text-green-500':outline && secondary,
    'text-yellow-400':outline && warning,
    'text-red-500':outline && danger,
  })

  return <button {...rest} className={classes}>{children}</button>;
}



Button.propTypes = {
   checkOnlyOneVariation: ({primary,secondary,success,warning,danger})=>{
    const count = 
      Number(!!primary)
    + Number(!!secondary)
    + Number(!!warning)
    + Number(!!success)
    + Number(!!danger);
    
if(count>1){
    return new Error('Only one of the button variation allowed');
}
},
};

export default Button;
