import { ErrorMessage, useField } from 'formik'

const NumberField = ({ label, className, currencySymbol, ...props }) => {
    const [field] = useField(props)
    return (
        <div className="flex flex-col gap-y-2 w-full">
            {label && (
                <label htmlFor={field.name} className="block font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm"> {currencySymbol} </span>
                </div>
                <input className={`${className} w-full pl-8`} {...props} {...field} type="number" />
            </div>
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={field.name}
                component="span"
            />
        </div>
    )
}

export default NumberField
