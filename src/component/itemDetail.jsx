import React from 'react';

const ItemDetail = ( {selectedData} ) => {
    return(
        <section>
            <h3>{selectedData.snippet.title}</h3>
            <p>{
                selectedData.snippet.description.length < 30 ? selectedData.snippet.description : selectedData.snippet.description.substr(0,100)+'...'
            }</p>
            <div className="videobody">
                <iframe
                    width="100%"
                    height="200px"
                    src={`https://www.youtube.com/embed/${selectedData.id}`}
                    allow="accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture"
                />
            </div>
        </section>
    );
};

export default ItemDetail;