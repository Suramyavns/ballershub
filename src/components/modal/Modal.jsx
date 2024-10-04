// src/components/Modal.js
import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import ModalContent from './ModalContent';
import Image from '../Image';

const Modal = ({ data, showModal, setShowModal }) => {
  if (!showModal) return null;
  const [content,setContent] = useState(
    {
      'title':'Standings',
      'slug':'standings',
      'endpoint':'get_standings'
    } 
  )
  return (
    <div className="fixed px-4 sm:px-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ws-light">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12">
        <div className="flex justify-between items-center mb-4">
            <div className='flex gap-3 items-center'>
                <Image style='w-6' src={data.country_logo} title={data.country_name} />
                <Image style='w-6' src={data.league_logo} title={data.league_name} />
                <span className='flex gap-2 items-center flex-wrap'>
                  <h2 className="ws-bold text-xl font-semibold">
                    {data.league_name}
                  </h2>
                  <h2 className="ws-bold text-xs sm:text-xl font-semibold">
                    {data.league_season}
                  </h2>
                </span>
            </div>
        <button
          aria-label='Close this popup'
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <NavBar currentContent={content} setCardContent={setContent} />
          <div className='w-full flex justify-center items-center h-64'>
            <ModalContent season={data.league_season} content={content} id={data.league_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
