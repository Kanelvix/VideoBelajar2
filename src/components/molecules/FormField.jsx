import Input from '../atoms/Input';
import Select from '../atoms/Select';

const FormField = (props) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-[--base-color] text-sm'>{props.label} <span className='text-[--red-color]'>*</span></label>
      {props.type === 'select' ? (
        <Select options={props.options} />
      ) : (
        <Input type={props.type} placeholder={props.placeholder} />
      )}
    </div>
  )
};

export default FormField;