import React, {useState} from 'react';
import {ReactComponent as Search} from './search.svg';

function SearchInput ({placeholder}) {
    const [value, setValue] = useState('');
    const onChangeSearch = ({target}) => {
        setValue(target.value);
    };
    return(
        <> 
            <div className="search_field">
                <input 
                    id='search'
                    type="search"
                    value={value}
                    onChange={onChangeSearch}
                    placeholder={placeholder} 
                />
                <button 
                    className='search_field_clear'
                    onClick={() => setValue('')}
                >   
                    X
                </button>
            </div>
            <label htmlFor='search' className="icon search_icon">
                <Search />
            </label>
        </>
        
    );
}

export default SearchInput;