import React, { useState } from 'react';


const ImageSeaarch = ({ searchText }) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div >
            <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-lg md:mx-auto">

                <form class="mb-4 md:flex md:flex-wrap md:justify-between" >
                    <div class="flex flex-col mb-4 md:w-1/2">

                        <input class="border py-2 px-3 text-grey-darkest md:mr-2" type="text" onChange={e => setText(e.target.value)} />
                    </div>
                    <div class="flex flex-col mb-4 md:w-1/2 ">
                        <button class="btn btn-blue bg-red-100 p-3 rounded hover:text-grey-darker " type="submit" onClick={onSubmit}>Search</button>

                    </div>

                </form>
            </div>
        </div>


    )
}
export default ImageSeaarch;

