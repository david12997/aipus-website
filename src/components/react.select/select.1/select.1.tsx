'use client'

import Select, { SingleValue as SingleValueType, components } from 'react-select';

const SelectLanguage = ():JSX.Element => {
    const stylesSelect ={
        control: (provided:any, state:any) => ({
            ...provided,
            minHeight: '60px',
            width: '100%',
            backgroundColor: '#EFEFEF',
            color: '#6e6e6e',
            fontWeight:"bold",
            fontSize:"20px",
            
        }),
    
    }

    const optionsSelect =[
        { value: 'en_US', label: 'English US', flag: 'https://cms.aipus.co/aipus/assets/jzsz61rl5kgsgs8c' },
        { value: 'es_CO', label: 'Español CO', flag: 'https://cms.aipus.co/aipus/assets/8whr7x1buvwgs0cc' },
        { value: 'en_UK', label: 'English UK', flag: 'https://cms.aipus.co/aipus/assets/d2iztwtmaego4484' },
        { value: 'es_ES', label: 'Español ES', flag: 'https://cms.aipus.co/aipus/assets/nf0s5w2zm0gocw0o' },
        { value: 'en_AU', label: 'English AU', flag: 'https://cms.aipus.co/aipus/assets/o5vj73q6jzkokws0' },
        { value: 'es_MX', label: 'Español MX', flag: 'https://cms.aipus.co/aipus/assets/rwwsol9hxxwso8os' },
    ]

    // Componente personalizado para las opciones que incluye la bandera
    const FlagOption = (props: any) => {
        return (
            <components.Option {...props}>
                <div className='flex cursor-pointer p-2' onClick={props.innerProps.onClick}>
                    <img src={props.data.flag} alt="" style={{ width: '50px' }} />
                    <p className='text-[18px] font-semibold ml-1'>{props.data.label}</p>
                </div>
            </components.Option>
        );
    };

    // Componente personalizado para el valor seleccionado que incluye la bandera
    const SingleValue = ({ children, ...props }: SingleValueType<any>) => (
        <components.SingleValue {...props}>
            <div className='flex cursor-pointer p-2 items-center'>
                <img src={props.data.flag} alt="" style={{ width: '50px' }} />
                <p className='text-[18px] font-semibold ml-1'>{props.data.label}</p>
            </div>
        </components.SingleValue>
    );
  

    const handleChange = (selectedOption: SingleValueType<any>) => {
        if (selectedOption) {
          // Aquí cambiarías el idioma de la página, por ejemplo, usando un contexto de i18n
          console.log('Idioma seleccionado:', selectedOption.value);
        }
      };


    return<>
        <Select
            id="languague"
            instanceId={"languague"}
            options={optionsSelect}
            defaultValue={optionsSelect[1]}
            className="w-[100%] mt-2"
            classNamePrefix="select"
            styles={stylesSelect}
            components={{ Option: FlagOption, SingleValue }}
            onChange={handleChange}

        />
    </>
}

export default SelectLanguage;