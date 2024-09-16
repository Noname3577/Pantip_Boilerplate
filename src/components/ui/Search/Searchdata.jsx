/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import './searchdata.css';

import { useState } from 'react';

const SearchBar = ({ userdata }) => {
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleHeaderClick = (room_name_th) => {
    setSelectedHeader(room_name_th);
    const data
      = userdata.data.find(item => item.room_name_th === room_name_th)
        ?.topics || [];
    setSearchResults(data);
  };

  return (
    <div className="search_full">
      <div>
        {userdata
        && userdata.data.map(item => (
          <button
            key={item.room_id}
            onClick={() => handleHeaderClick(item.room_name_th)}
            className="btn_a"
          >
            {item.room_name_th}
          </button>
        ))}
        <div className="search_text_count">
          {' '}
          {searchResults.length !== 0
            ? `${searchResults.length} รายการ`
            : 'ไม่มีข้อมูล / เลือกข้อมูล'}
          {' '}
        </div>
      </div>
      {selectedHeader && (
        <ul>
          <div className="search_cardc">
            {searchResults.map((user, index) => (
              <li key={index}>
                <div key={user.topic_id} className="card_c">
                  <a
                    href={`https://pantip.com/topic/${user.topic_id} `}
                    target="_blank"
                  >
                    <div className="card-header flex justify-center">
                      <img
                        style={{
                          width: '100%',
                          maxHeight: 250,
                          minHeight: 250,
                        }}
                        src={user.thumbnail_url || '/unnamed.png'}
                        alt={user.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="card rounded-lg">
                      <div className="card-body p-0">
                        <h5>{user.title}</h5>
                        <div className="flex flex-wrap gap-2">
                          {user.tags.map(tag => (
                            <span
                              key={tag.id}
                              className=""
                              style={{ color: 'rgba(0,0,0,0.7)', fontSize: 10 }}
                              title={tag.name}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
