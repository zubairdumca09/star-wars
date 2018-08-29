import React, {PropTypes} from 'react';

const Input = ({name,label,onChange,placeholder,value,error,type}) => {
	let wrapperClass = 'form-group';
	if(error && error.length > 0){
		wrapperClass += " "+'has-error';
	}
	return (
			<div className={wrapperClass}>
				<label htmlFor={name}>{label}</label>
				<div className='field'>
					<input
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className='form-control'/>
					{error && <div className="alert alert-danger">{error}</div>}
				</div>
			</div>
		);
}



export default Input;
